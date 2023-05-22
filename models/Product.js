import mongoose from "mongoose"
const ProductSchema = new mongoose.Schema({
    title:{type:String, require:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"Category"},
    brand:{type:String},
    price:{type:Number},
    discountPrice:{type:Number,default:0.0},
    description:{type:String},
})

module.exports = mongoose.models.Product || mongoose.model("Product",ProductSchema)