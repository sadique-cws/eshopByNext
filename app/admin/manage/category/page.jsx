import getCategory from '@/app/controllers/getCategory';
import CategoryCalling from '@/components/admin/categoryCalling';
import React from 'react'

const page = async() => {
    let categoryRecords = await getCategory();
  return (
    <div className='flex flex-1 flex-col p-5'>
    <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Manage Categories</h1>
        <a href="" className="bg-green-600 text-white px-3 py-2 rounded">Create Product</a>
    </div>
    <CategoryCalling data={categoryRecords.data}/>
</div>
  )
}

export default page