import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

import Button from "../constants/Button";
export const Collectiongallery = ({gridTemplateColumns, marginTop}) => {
  return (
    <div>
      <div className={styles.collection} style={{display: "grid", gridTemplateColumns, marginTop}}>
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
      </div>

      <div
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
      </div>
    </div>
  );
};
