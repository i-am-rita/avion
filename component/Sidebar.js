"use client";

import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <div className="sidebar" style={{flex: "11" }}>
      <div>
        <h4
          style={{
            marginBottom: "15px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Product Type
        </h4>
        <Paragraph>
          <p>= Furniture</p>
          <p>= Homeware</p>
          <p>= Sofas</p>
          <p>= Light Fittings</p>
          <p>= Accessories</p>
        </Paragraph>
      </div>

      <h4
        style={{
          marginTop: "50px",
          marginBottom: "15px",
          fontStyle: "normal",
          fontWeight: "400",
        }}
      >
        Price
      </h4>
      <Paragraph>
        <p>= 0 - 100</p>
        <p>= 101 - 250</p>
        <p>= 250+</p>
      </Paragraph>

      <h4
        style={{
          marginTop: "50px",
          marginBottom: "15px",
          fontStyle: "normal",
          fontWeight: "400",
        }}
      >
        Designer
      </h4>
      <Paragraph>
        <p>= Robert Smith</p>
        <p>= Liam Galagher</p>
        <p>= Biggie Smalls</p>
        <p>= Thom Yorke</p>
      </Paragraph>
    </div>
  );
};

const Paragraph = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
`;
