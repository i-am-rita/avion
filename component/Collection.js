import Image from "next/image";
import React from "react";
import styles from "../app/page.module.css";
// import Button from "../constants/Button";
import { Bigcard } from "./Bigcard";
import { Collectiongallery } from "./Collectiongallery";

export const Collection = ({}) => {
  return (
    <div>
      <Collectiongallery
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        marginTop="120px"
      />
      {/* <div className={styles.collection}>
        <div className={styles.zoom}>
          <Image
            src="/chair.svg"
            alt="collection item"
            width={301}
            height={375}
            // style={{width: "1000px", height: "100px"}}
          />
          <p>The Dandy chair</p>
          <p>$250</p>
        </div>
        <div className={styles.zoom}>
          <Image
            src="/vase.svg"
            alt="collection item"
            width={301}
            height={375}
            // style={{width: "1000px", height: "100px"}}
          />
          <p>Rustic Vase Set</p>
          <p>$250</p>
        </div>
        <div className={styles.zoom}>
          <Image
            src="/silky.svg"
            alt="collection item"
            width={301}
            height={375}
            // style={{width: "1000px", height: "100px"}}
          />
          <p>The Silky Vase</p>
          <p>$250</p>
        </div>
        <div className={styles.zoom}>
          <Image
            src="/lucylamp.svg"
            alt="collection item"
            width={301}
            height={375}
            // style={{width: "1000px", height: "100px"}}
          />
          <p>The Lucy Lamp</p>
          <p>$250</p>
        </div>
      </div> */}
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Button
          name="View collection"
          color="#2A254B"
          backgroundColor="#F9F9F9"
        />
      </div> */}

      {/* Big cards */}
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "20px",
          marginTop: "95px",
          //   border: "1px solid red",
        }}
      >
        <Bigcard
          backgroundColor="#2A254B"
          color="#FFFFFF"
          pcolor="#fff"
          padding="70px 75px 63px 55px"
          margin="18px 0px 183px 0px"
          //   marginTop="3px"
          //   marginBottom="2px"
          h6title="It started with a small idea"
          ptitle="A global brand with local beginings, our story began in a small studio in South London in early 2014"
        />

        <div>
          <Image
            src="/interior.svg"
            alt="interior image"
            width={630}
            height={478}
          />
        </div>
      </div>
    </div>
  );
};
