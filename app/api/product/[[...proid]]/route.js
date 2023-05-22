import DbConnect from "@/app/utils/DbConnect";
import Product from "@/models/Product"
import { NextResponse } from "next/server";
DbConnect();

export async function GET(req, {params}){
    const {proid} = params;
    let data;
    try{
        data = (!proid) ? await Product.populate(await Product.find(), {path:"category"}) : await Product.findById(proid) 
    }
    catch(err){
        return NextResponse.json({"msg":err.message})
    }
    return NextResponse.json({
            "data":data,
            "count":data.length,
    })
}

export async function POST(req, {params}){
    const {proid} = params;
    let record,data;
    try{
        record = await req.json();
        data  = (!proid) && await Product.create(record)
    }
    catch(err){
        return NextResponse.json({"msg":err.message})
    }
    return NextResponse.json({data})
}