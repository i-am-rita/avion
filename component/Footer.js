"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Email } from "./Email";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="footer">
          <div className="footer-details">
            <h5>Menu</h5>
            <p>New arrivals</p>
            <p>Best sellers</p>
            <p>Recently viewed</p>
            <p>Popular this week</p>
            <p>All products</p>
          </div>
          <div className="footer-details">
            <h5>Categories</h5>
            <p>Crockery</p>
            <p>Furniture</p>
            <p>Homeware</p>
            <p>Plant pots</p>
            <p>Chairs</p>
            <p>Crockery</p>
          </div>
          <div className="footer-details">
            <h5>Our company</h5>
            <p>About us</p>
            <p>Vacancies</p>
            <p>Contact us</p>
            <p>Privacy</p>
            <p>Returns policy</p>
          </div>
          <div style={{ width: "100%" }} className="footer-details">
            {/* <div> */}
            <h5>Join our mailing list</h5>
            <p>
              <Email
                backgroundColor="rgba(249, 249, 249, 0.15)"
                width="500px"
              />
            </p>
            {/* </div> */}
          </div>
        </div>
        <hr
          style={{
            height: "0.5px",
            backgroundColor: "#4E4D93",
            margin: "0 85px",
            border: "none",
          }}
        />
        <div className="copyright">
          <p>Copyright 2022 Avion LTD</p>
          <div>
            <Image src="/check1.svg" alt="check mark" width={25} height={16} />
            <Image src="/check1.svg" alt="check mark" width={25} height={16} />
            <Image src="/check1.svg" alt="check mark" width={25} height={16} />
            <Image src="/check1.svg" alt="check mark" width={25} height={16} />
            <Image src="/check1.svg" alt="check mark" width={25} height={16} />
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

// const Join = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0;

//   h4 {
//     ${"" /* font-family: "Clash Display"; */}
//     font-style: normal;
//     font-weight: 200;
//     font-size: 32px;

//     ${"" /* letter-spacing: 1px; */}
//     line-height: 2;
//     text-align: center;
//     color: #ffffff;
//   }

//   p {
//     ${"" /* font-family: "Satoshi"; */}
//     font-style: normal;
//     font-weight: 300;
//     font-size: 17px;
//     line-height: 1.5;
//     text-align: center;
//     color: #ffffff;
//   }

//   .offers {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 40px;
//     margin: 30px 0px;

//     .offer {
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       p {
//         font-style: normal;
//         font-weight: 300;
//         font-size: 15px;
//         line-height: 25px;
//         color: #fff;
//       }
//     }
//   }

//   .email {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;

//     input {
//       padding: 10px 20px;
//       width: 390px;
//       height: 56px;
//       font-size: 15px;
//       border: none;
//       background-color: #f9f9f9;
//       color: #2a254b;
//     }

//     .signup-button {
//       padding: 10px 30px;
//       height: 56px;
//       border: none;
//       font-size: 15px;
//       font-weight: 300;
//       font-style: normal;
//       background-color: #2a254b;
//       color: #fff;
//     }
//   }
// `;

const FooterContainer = styled.div`
  background: #2a254b;
  width: 100%;

  .footer {
    display: flex;
    padding: 50px 80px;

    .footer-details {
      width: 100%;

      h5 {
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 30px;
        color: #ffffff;
      }
      p {
        font-style: normal;
        font-weight: 200;
        font-size: 13px;
        line-height: 31px;
        color: #ffffff;
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: space-between;

    padding: 20px 85px;

    p {
      font-style: normal;
      font-weight: 200;
      font-size: 14px;
      ${"" /* line-height: 19px; */}
      color: #ffffff;
    }
  }
`;
