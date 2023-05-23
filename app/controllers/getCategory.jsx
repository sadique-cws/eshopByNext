import React from 'react'

const getCategory = async() => {
    let categoryRecords = await fetch(process.env.CAT_URL,{cache:"no-store"});
    categoryRecords = await categoryRecords.json()
    return categoryRecords;
}

export default getCategory