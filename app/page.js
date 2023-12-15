import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import NavBar from "./NavBar";
import SlideBar from "./SlideBar";
import ItemsBar from "./ItemsBar";
import ItemsBar2 from "./ItemsBar2";
import ItemsBar3 from "./ItemsBar3";
import Footer from "./Footer";

const Page = () =>{
  return(
    <>
      <NavBar/>
      <SlideBar/>
      <ItemsBar/>
      <ItemsBar2/>
      <ItemsBar3/>
      <Footer/>
    </>
  )
}
export default Page;