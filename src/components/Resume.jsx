import React from "react";
import Navigation from "./Navigation";
import ResumeContent from "./resume/ResumeContent";

export default function Resume () {

  return (
    <div className="main-top">
      <Navigation />
      <div>

        <h4>Resume Section</h4>
        <ResumeContent />

      </div>
    </div>
  )
}