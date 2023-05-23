import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/public/ProductCard'
import getCategory from '@/app/controllers/getCategory'

export default async function filter({params}) {
  const callingCategory = await getCategory()
  let callingProduct = await fetch(`http://127.0.0.1:3000/api/filter-product/${params.catid}`)
  callingProduct = await callingProduct.json()
  return (
    <div className="flex px-10">
        <div className="w-2/12 p-5 flex flex-col">
            {callingCategory.data.map((value, id) => (<Link key={id} href={`/filter/${value._id}`} className='bg-teal-200 px-3 py-2 hover:bg-teal-400'>{value.title}</Link>))}
        </div>
        <div className='w-10/12 p-5'>
          <h1 className='text-3xl font-semibold'>Most Searched Products </h1>
          <div className="grid grid-cols-4 gap-4 mt-5">
             {callingProduct.data.map((value, id) => <ProductCard value={value} key={id}/>)}
          </div>
        </div>
    </div>
  )
}
