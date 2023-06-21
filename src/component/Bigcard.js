import React from "react";
import styles from "../app/page.module.css";

import Button from "@/constants/Button";

export const Bigcard = ({
  position,
  top,
  right,
  backgroundColor,
  h6title,
  ptitle,
  color,
  pcolor,
  padding,
  margin,
  marginTop,
  marginBottom,
}) => {
  return (
    <div>
      <div
        style={{
          position,
          top,
          right,
          color,
          pcolor,
          backgroundColor,
          padding,
          marginTop,
          marginBottom,
          //   border: "1px solid red",
          width: "623px",
          marginBottom: "100px",
        }}
      >
        <div className={styles.imagecard}>
          <h6 style={{ color: color ? color : "#000" }}>{h6title} </h6>
          <p style={{ color: pcolor ? pcolor : "#000", margin }}>{ptitle}</p>
        </div>
        <Button
          name="View Collection"
          backgroundColor="#F9F9F9"
          color="#2A254B"
        />
      </div>
    </div>
  );
};
