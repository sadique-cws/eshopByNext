"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CreateProduct = ({callingCategory}) => {
    const router = useRouter();
    const initValue = {
        title:"",
        brand:"",
        category:"",
        price:"",
        discountPrice:"",
        description:""
    }
    const [data,setData] = useState(initValue)

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let insertProduct = await fetch("http://127.0.0.1:3000/api/product",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        })
        insertProduct = await insertProduct.json()
        console.log(insertProduct);
        setData(initValue)

        router.push("/admin/manage/product")


    }
  return (
    <div className="bg-slate-100 shadow-lg p-5 border-2 border-slate-200">
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="title">Cat Title</label>
                  <input type="text" id="title" name='title' value={data.title} onChange={handleChange} className="border px-2 py-3 w-full" />
                </div>
                <div className="mb-2">
                  <label htmlFor="brand">brand</label>
                  <input type="text" id="brand" name ="brand" value={data.brand} onChange={handleChange} className="border px-2 py-3 w-full" />
                </div>
                <div className="mb-2">
                  <label htmlFor="price">price</label>
                  <input type="text" id="price" name ="price" value={data.price} onChange={handleChange} className="border px-2 py-3 w-full" />
                </div>
                <div className="mb-2">
                  <label htmlFor="discountPrice">discountPrice</label>
                  <input type="text" id="discountPrice" name ="discountPrice" value={data.discountPrice} onChange={handleChange} className="border px-2 py-3 w-full" />
                </div>
                <div className="mb-2">
                  <label htmlFor="discountPrice">Category</label>
                  <select id="discountPrice" name="category" value={data.category} onChange={handleChange} className="border px-2 py-3 w-full">
                    <option value="">Select Category</option>
                    {
                        callingCategory.map((value,id) => (
                            <option value={value._id} key={id}>{value.title}</option>
                        ))
                    }
                    </select>
                </div>
                <div className="mb-2">
                  <label htmlFor="desc">description</label>
                  <textarea rows={5} name="description" value={data.description} onChange={handleChange} id="desc" className="border px-2 py-3 w-full" ></textarea>
                </div>
                <div className="mb-2">
                  <input type="submit" className="bg-teal-500 text-white px-3 py-2 rounded w-full" />
                </div>
            </form>
        </div>
  )
}

export default CreateProduct