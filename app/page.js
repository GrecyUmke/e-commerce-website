import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import NavBar from "./NavBar";
import SlideBar from "./SlideBar";
import ItemsBar from "./ItemsBar";
import Footer from "./Footer";

const Page = () =>{
  return(
    <>
      <NavBar/>
      <SlideBar/>
      <ItemsBar/>
      <ItemsBar/>
      <ItemsBar/>
      <Footer/>
    </>
  )
}
export default Page;