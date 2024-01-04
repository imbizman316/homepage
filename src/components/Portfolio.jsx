import React from "react";
import Navigation from "./Navigation";
import PortfolioContent from "./portfolio/Main";

export default function Porfolio() {

  return (
    <div className="main-top">
      <Navigation />
      <div>
        <PortfolioContent />
      </div>
    </div>
  )
}