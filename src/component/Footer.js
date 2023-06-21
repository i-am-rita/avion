"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Email } from "./Email";

export const Footer = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image src="/signup.svg" alt="signup image" width={1440} height={444} />

        <div
          style={{
            position: "absolute",
            top: "25%",
            width: "100%",
            //   border: "1px solid red",
          }}
        >
          <Join style={{ textAlign: "center" }}>
            <h4>Join the club and get the benefits</h4>
            <p>
              Sign up for our newsletter and receive exclusive offers on <br />{" "}
              new ranges, sales, pop up stores and more
            </p>
            <div className="offers">
              <div className="offer">
                <Image
                  src="/check1.svg"
                  alt="check mark"
                  width={15}
                  height={16}
                />
                <p>Exclusive offers</p>
              </div>
              <div className="offer">
                <Image
                  src="/check1.svg"
                  alt="check mark"
                  width={15}
                  height={16}
                />
                <p>Free events</p>
              </div>
              <div className="offer">
                <Image
                  src="/check1.svg"
                  alt="check mark"
                  width={15}
                  height={16}
                />{" "}
                <p>Large discounts</p>
              </div>
            </div>
            <Email backgroundColor="#f9f9f9" width="53%" />
            {/* <div className="email">
              <input type="text" placeholder="your@email.com" />
              <button className="signup-button">Sign up</button>
            </div> */}
          </Join>
        </div>
      </div>

      <FooterContainer>
        <div className="footer">
          <div>
            <h5>Menu</h5>
            <p>New arrivals</p>
            <p>Best sellers</p>
            <p>Recently viewed</p>
            <p>Popular this week</p>
            <p>All products</p>
          </div>
          <div>
            <h5>Categories</h5>
            <p>Crockery</p>
            <p>Furniture</p>
            <p>Homeware</p>
            <p>Plant pots</p>
            <p>Chairs</p>
            <p>Crockery</p>
          </div>
          <div>
            <h5>Our company</h5>
            <p>About us</p>
            <p>Vacancies</p>
            <p>Contact us</p>
            <p>Privacy</p>
            <p>Returns policy</p>
          </div>
          <div style={{ border: "2px solid black", width: "100%" }}>
            <h5>Join our mailing list</h5>
            <Email backgroundColor="grey" width="627px" />
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

const Join = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  h4 {
    ${"" /* font-family: "Clash Display"; */}
    font-style: normal;
    font-weight: 200;
    font-size: 32px;

    ${"" /* letter-spacing: 1px; */}
    line-height: 2;
    text-align: center;
    color: #ffffff;
  }

  p {
    ${"" /* font-family: "Satoshi"; */}
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.5;
    text-align: center;
    color: #ffffff;
  }

  .offers {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 30px 0px;

    .offer {
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 25px;
        color: #fff;
      }
    }
  }

  ${"" /* .email {
  
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    input {
      padding: 10px 20px;
      width: 390px;
      height: 56px;
      font-size: 15px;
      border: none;
      background-color: #f9f9f9;
      color: #2a254b;
    }

    .signup-button {
      padding: 10px 30px;
      height: 56px;
      border: none;
      font-size: 15px;
      font-weight: 300;
      font-style: normal;
      background-color: #2a254b;
      color: #fff;
    }
  } */}
`;

const FooterContainer = styled.div`
  background: purple;
  border: 1px solid green;
  width: 100%;
  ${"" /* */}

  .footer {
    display: flex;
    width: 100%;
    padding: 50px 75px;
    gap: 120px;

    ${"" /* div p{
        width: 100%;
    } */}
  }
`;
