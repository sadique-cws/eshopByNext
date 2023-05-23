import getCategory from "@/app/controllers/getCategory";
import CreateCategory from "@/components/admin/CreateCategory";
import CategoryCalling from "@/components/admin/categoryCalling";
import React from "react";

const page = async () => {
  let categoryRecords = await getCategory();
  return (
    <div className="flex flex-col p-5">
      <div className="w-full">
      <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Manage Categories</h1>
          </div>
      </div>
     <div className="flex mt-4 gap-3">
     <div className="w-9/12">
        <div className="flex flex-1 flex-col p-5 shadow-md border-2 border-slate-200 bg-slate-100">
          
          <CategoryCalling data={categoryRecords.data} />
        </div>
      </div>
      <div className="w-3/12">
        <div className="bg-slate-100 shadow-lg p-5 border-2 border-slate-200">
            <CreateCategory/>
        </div>
      </div>
     </div>
    </div>
  );
};

export default page;
