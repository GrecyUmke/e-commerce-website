import React from "react";
import NavBar from "./NavBar";
import SlideBar from "./SlideBar";
import ItemsBar from "./ItemsBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Page = () =>{
  return(
    <>
      <NavBar/>
      <SlideBar/>
      <ItemsBar/>
      <ItemsBar/>
      <ItemsBar/>
    </>
  )
}
export default Page;