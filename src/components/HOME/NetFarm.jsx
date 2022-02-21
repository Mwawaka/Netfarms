import React from "react";
import Navbar from "../HOME/Navbar";
import "./style.css";
import data from "./Data";
import Footer from "./Footer";
import Hero from "./Hero";
import Form from "./Form";

function NetFarm() {
  const dataList=data.map(datas =><Hero 
  key={datas.id}
  datas={datas}
  />)
  return (
    <div className="page">
      <Navbar />
      {dataList}
      <Form/>
      <Footer/>
    </div>
  );
}

export default NetFarm;
