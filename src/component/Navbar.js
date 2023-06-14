"use client";
import React from "react";
import styled from "styled-components";

// import {IoCartOutline} from ""

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <>
      <Container>
        <NavbarContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
          <Heading>Avion</Heading>
          <CartProfile>
            {/* <IoCartOutline/> */}
            <FontAwesomeIcon icon={faCartShopping} size="sm" />
            <FontAwesomeIcon icon={faCircleUser} size="sm" />
          </CartProfile>
        </NavbarContainer>

        <hr
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#0000001A",
            border: "none",
            marginTop: "18px",
          }}
        />

        <Navlinks>
          <Navitems>
            <p>Plant pots</p>
            <p>Ceramics</p>
            <p>Tables</p>
            <p>Chairs</p>
            <p>Crockery</p>
            <p>Tableware</p>
            <p>Cutlery</p>
          </Navitems>
        </Navlinks>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 17px 25px 0px 25px;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */
  color: #22202e;
`;

const CartProfile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

const Navlinks = styled.div`
  justify-content: center;
  padding: 20px 330px;
`;

const Navitems = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;

  p {
    ${"" /* font-family: "Satoshi"; */}
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height */
    color: #726e8d;
  }
`;
