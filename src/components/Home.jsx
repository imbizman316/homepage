import React from "react";
import Navigation from "./Navigation";
import myface from "./assets/User_Photo_leeh7_1.jpg";
import "../../../homepage/src/index.css";

export default function Home() {
  return (
    <div className="main-top">
      <Navigation />
      <div className="home">
        <img
          src={myface}
          alt="Face"
          style={{
            width: "150px",
            borderRadius: "10%",
            border: "5px solid black",
          }}
        ></img>
        <p>
          My name is Mike and welcome to my website. Here you can find my
          porfolio.
        </p>
        <p>yoyoyo</p>
      </div>
    </div>
  );
}
