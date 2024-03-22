import React from "react";
import Navigation from "./Navigation";
import PizzaContent from "./pizza_store/components/howToMakePizza/OrderPizza"
// import PortfolioContent from "./portfolio/Main";

export default function PizzaStore() {

  return (
    <div className="main-top">
      <Navigation />
      <div>
        <PizzaContent />
        {/* <PortfolioContent /> */}
      </div>
    </div>
  )
}