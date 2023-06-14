import Image from "next/image";
import React from "react";
import styles from "../app/page.module.css";
import Button from "@/constants/Button";

export const Collection = () => {
  return (
    <div>
      <div className={styles.collection}>
        <div>
          <Image
            src="/chair.svg"
            alt="collection item"
            width={305}
            height={375}
            // style={{width: "1000px", height: "100px"}}
          />
          <p>The Dandy chair</p>
          <p>$250</p>
        </div>
        <div>
          <Image
            src="/vase.svg"
            alt="collection item"
            width={305}
            height={375}
            // style={{width: "1000px", height: "100px"}}
          />
          <p>Rustic Vase Set</p>
          <p>$250</p>
        </div>
        <div>
          <Image
            src="/silky.svg"
            alt="collection item"
            width={305}
            height={375}
            // style={{width: "1000px", height: "100px"}}
          />
          <p>The Silky Vase</p>
          <p>$250</p>
        </div>
        <div>
          <Image
            src="/lucylamp.svg"
            alt="collection item"
            width={305}
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

      <div style={{ border: "1px solid red", display: "flex" }}>
        <div>
          <p>kjdhsfgshdbn</p>
        </div>
        <div>
          <p>kjdhsfgshdbn</p>
        </div>
      </div>
    </div>
  );
};
