import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

import Button from "@/constants/Button";
export default function Homepage() {
  return (
    <>
      <div className={styles.imgContainer}>
        <Image
          src="/home.svg"
          alt="homeimage"
          width={200}
          height={100}
          style={{ width: "100%", height: "150%" }}
        />

        <div className={styles.imagecard}>
          <div>
            <h6>
              Luxury homeware for people <br /> who love timeless design quality
            </h6>
            <p>Shop the new Spring 2022 collection today</p>
          </div>
          <Button
            name="View Collection"
            backgroundColor="#F9F9F9"
            color="#2A254B"
          />
        </div>
      </div>
    </>
  );
}
