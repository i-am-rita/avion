// import Navbar from "../../../component/Navbar";
import Image from "next/image";
import React from "react";
import { Sidebar } from "../../component/Sidebar";
import { Collectiongallery } from "../../component/Collectiongallery";

export default function Page() {
  return (
    <div>
      <Image
        src="/pageheaders.svg"
        alt="page header"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "50%",
          margin: "0",
          backgroundColor: "green",
          // border: "1px solid red",
        }}
      />

      <div
        style={{
          // border: "2px solid red",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "20px 70px",
        }}
      >
        <Sidebar />
        <div
          style={{
            display: "flex",
            padding: "0 0 0 180px",
            // border: "1px solid blue",
          }}
        >
          <Collectiongallery gridTemplateColumns="1fr 1fr 1fr" />
        </div>
      </div>
    </div>
  );
}
