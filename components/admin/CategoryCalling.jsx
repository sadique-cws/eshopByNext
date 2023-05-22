import React from 'react'

const CategoryCalling = ({data}) => {
  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                id
            </th>
            <th scope="col" class="px-6 py-3">
                title
            </th>
            <th scope="col" class="px-6 py-3">
                description
            </th>
          
            <th scope="col" class="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        {
            data.map((value,id) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={id}>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {id+1}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value.title}
            </th>
            <td class="px-6 py-4">
               {value.description}
            </td>
        </tr>
        
            ))
        }
    </tbody>
</table>
  )
}

export default CategoryCalling