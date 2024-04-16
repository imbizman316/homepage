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
          footsteps in my career as well as my hobbies and interest.
        </p>
        <p>
          Although I stepped my foot in the game industry as an assistant
          overseas business manager, later on in my career, I realized that
          coding was where I fitted the best.
        </p>
      </div>
    </div>
  );
}
