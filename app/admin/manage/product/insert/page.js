import getCategory from "@/app/controllers/getCategory";
import CreateProduct from "@/components/admin/CreateProduct";
import Link from "next/link";
import React from "react";

const page = async() => {
    const callingCategory = await getCategory();
  return (
     <div className="flex flex-1 flex-col p-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Insert Product</h1>
            <Link href="/admin/manage/product" className="bg-green-600 text-white px-3 py-2 rounded">
              Go Back
            </Link>
          </div> 
          <CreateProduct callingCategory={callingCategory.data}/>
        </div>
     
  );
};

export default page;
