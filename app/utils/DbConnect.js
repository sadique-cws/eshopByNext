import mongoose from "mongoose"

const DbConnect = (req,res) => {
    if(mongoose.connection.readyState >= 1){
        return mongoose.connection;
    }
    return mongoose.connect(process.env.DB_URL)
}

export default DbConnect;