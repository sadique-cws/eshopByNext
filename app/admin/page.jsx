import Link from 'next/link';
import React from 'react'
import getCategory from '../controllers/getCategory';
import getProduct from '../controllers/getProduct';

const page = async() => {
  let categoryRecords = await getCategory();
  let productRecords = await getProduct();

  return (
   
          <div className="flex w-full gap-5 p-5">
              <div className="flex-1">
                
<Link href="/admin/manage/product" class="block p-6 bg-red-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productRecords.count}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Total Products</p>

  
</Link>

              </div>
              <div className="flex-1">
                
<Link href="/admin/manage/category" class="block p-6 bg-green-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{categoryRecords.count}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">total Category</p>
</Link>

              </div>
          </div>
     
  )
}

export default page