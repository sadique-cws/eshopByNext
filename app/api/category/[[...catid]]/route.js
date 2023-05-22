import { NextResponse } from "next/server";
import Category from "@/models/category"
import DbConnect from "@/app/utils/DbConnect";

DbConnect(); // connect here only one time for whole page

export async function GET(req, {params}){
    const {catid} = params;
    let data;
   try{
        data = (catid)? await Category.findById(catid) : await Category.find();
        return NextResponse.json({
                            "data":data,
                            "count":data.length
                        })
   }
   catch(e){
        return NextResponse.json({"msg": e.message}) 
   }
    
}
export async function POST(req, {params}){
    const {catid} = params;
    let record, data;
    try{
        record = await req.json()
        data = (!catid) && await Category.create(record) 
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
    return NextResponse.json({data})
}