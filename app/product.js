"use client"
import React from "react";
import { useEffect } from "react";

const fetchData = ()=>{
    let API='https://api.escuelajs.co/api/v1/categories';

    const fetchApi=async (url)=>{
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
        }catch(error){
            console.log(error)
        }
    };
    useEffect(()=>{
        fetchApi(API);
    },[]);

    return(
        <h2>Fetch Data</h2>
    )
}
export default fetchData

