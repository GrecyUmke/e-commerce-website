"use client"
// const fs = require("fs");

// fs.writeFileSync("page.js")


import React, { useState, useEffect } from "react";

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default YourComponent;




// var box=document.getElementById("box");
// var button=document.getElementById("button");
// var request = new XMLHttpRequest();

// function clickButton(){
//     var search = document.getElementById("search");
//     var gettingdata="";
//     gettingdata=search.value;
//     request.addEventListener('load',dataElement);
//     request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query='+gettingdata);
//     request.send();
// }

// button.addEventListener("click",clickButton);

// function dataElement() {
//     var data = JSON.parse(request.responseText); 
//     showdata(data.results);
// }

// function showdata(data){
//     data.forEach((item)=>{
//         box.innerHTML=`<p>Title : ${item.title}</p>
//         <p>Release Date :  ${item.release_date}</p>
//         <p>Vote Average : ${item.vote_average}</p>`   
//     });
// }
