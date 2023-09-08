import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Heading from "./Heading";
import Preloader from "./Preloader";
// npm install react-router-dom --save
// import Navbar from "./Navbar";
import Upload from "./Upload"; // Import your Upload component here
import "./App.css"
import Card from "./Card";
import Sdata from "./Sdata";
function App() {
  return (
    <>
      <Preloader />
      <Heading />
      <Upload/>
      {Sdata.map((item) => (
        <Card
          key={item.id}
          img_src={item.img_src}
          sname={item.sname}
          series_link={item.series_link}
        />
      ))}

    </>
  );
}

export default App;
