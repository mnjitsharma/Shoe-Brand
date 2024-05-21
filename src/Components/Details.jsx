import React from "react";
import "../css/Details.css";
import amazonLogo from "../assets/amazon-logo.png";
import flipkartLogo from "../assets/flipkart-logo.png";
import shoeImg from "../assets/shoe.png";

const Details = () => {
  return (
    <main className="detail container">
      <div className="detail-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="detail-btn">
          <button className="primary-btm">Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="e-commerce-icons">
            <img
              src={amazonLogo}
              alt="amazom logo"
              width="70px"
              className="amazon-logo"
            />
            <img src={flipkartLogo} alt="flipkart logo" width="70px" />
          </div>
        </div>
      </div>
      <div className="detail-image">
        <img src={shoeImg} alt="Shoe Image" width="550px" />
      </div>
    </main>
  );
};

export default Details;
