import React from "react";

export const Sidebar = () => {
  return (
    <div className="sidebar" style={{ border: "2px solid green", flex: "11" }}>
      <div>
        <h4>Product Type</h4>
        <p style={{ border: "2px solid green" }}>
          Furniture jhfytfgfdsjyfdtshdf
        </p>
        <p>Homeware</p>
        <p>Sofas</p>
        <p>Light Fittings</p>
        <p>Accessories</p>
      </div>

      <h4>Price</h4>
      <p>0 - 100</p>
      <p>101 - 250</p>
      <p>250+</p>

      <h4>Designer</h4>
      <p>Robert Smith</p>
      <p>Liam Galagher</p>
      <p>Biggie Smalls</p>
      <p>Thom Yorke</p>
    </div>
  );
};
