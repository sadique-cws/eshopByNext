"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateCategory = () => {
    const router = useRouter();
    const initValue = {
        title:"",
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
        let insertCategory = await fetch("http://127.0.0.1:3000/api/category",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        })
        insertCategory = await insertCategory.json()
        console.log(insertCategory);
        setData(initValue)

        router.push("/admin/manage/category")


    }
  return (
    <form action="" method="post" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="title">Cat Title</label>
                  <input type="text" id="title" name="title" value={data.title} onChange={handleChange} className="border px-2 py-3 w-full" />
                </div>
                <div className="mb-2">
                  <label htmlFor="desc">description</label>
                  <textarea rows={5} id="desc" name="description" value={data.description} onChange={handleChange} className="border px-2 py-3 w-full" ></textarea>
                </div>
                <div className="mb-2">
                  <input type="submit" className="bg-teal-500 text-white px-3 py-2 rounded w-full" />
                </div>
            </form>
  )
}

export default CreateCategory