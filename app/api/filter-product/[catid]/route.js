import { NextResponse } from "next/server";
import Product from "@/models/product"
import DbConnect from "@/app/utils/DbConnect";

DbConnect(); // connect here only one time for whole page


export async function GET(req, {params}){
    const {catid} = params;
    let data = await Product.populate(await Product.find({category:catid}), {path:"category"})
    return NextResponse.json({data})
}
