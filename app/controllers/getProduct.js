import React from 'react'

const getProduct = async () => {
    let productRecords = await fetch(process.env.PRO_URL,{cache:"no-store"})
    productRecords = await productRecords.json()
    return productRecords;
}

export default getProduct