import getProduct from '@/app/controllers/getProduct'
import ProductCalling from '@/components/admin/ProductCalling'
import React from 'react'

const page = async() => {
    let productRecords = await getProduct();
  return (
    <div className='flex flex-1 flex-col p-5'>
        <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Manage Product</h1>
            <a href="" className="bg-green-600 text-white px-3 py-2 rounded">Create Product</a>
        </div>
        <ProductCalling data={productRecords.data}/>
    </div>
  )
}

export default page