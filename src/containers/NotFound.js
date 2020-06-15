import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h3>You must be lost!</h3>
      <img className="Image" src={require("../Images/John Travolta lost.gif")} alt="lost-gif" />
    </div>
  );
}