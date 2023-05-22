import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String}
})

module.exports = mongoose.models.Category || mongoose.model("Category",CategorySchema)