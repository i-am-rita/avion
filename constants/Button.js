import React from "react";

export default function Button({ name, backgroundColor, color }) {
  return (
    <>
      <button
        style={{
          padding: "17px 33px",
          outline: "none",
          fontSize: "14px",
          fontWeight: "300",
          lineHeight: "22px",
          border: 'none',
          textAlign: "center",
          alignItems:"center",
          backgroundColor,
          color,
        }}
      >
        {name}
      </button>
    </>
  );
}
