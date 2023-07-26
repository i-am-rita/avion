import React from "react";
import styled from "styled-components";

export const Email = ({ width, backgroundColor }) => {
  return (
    <>
      <EmailContainer>
        <input
          type="text"
          placeholder="your@email.com"
          style={{ backgroundColor, width }}
        />
        <button className="signup-button">Sign up</button>
      </EmailContainer>
    </>
  );
};

const EmailContainer = styled.div`
  display: flex;
  margin-top: 12px;
  input {
    padding: 10px 20px;
    ${"" /* width: 552px; */}
    height: 56px;
    font-size: 15px;
    border: none;
    background-color: #f9f9f9;
    color: #2a254b;
    outline: none;
  }

  .signup-button {
    padding: 10px 30px;
    width: 120px;
    height: 56px;
    border: none;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    background-color: #fff;
    color: #2a254b;
  }
`;
