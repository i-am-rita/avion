import React from "react";
import Image from "next/image";

import styles from "../app/page.module.css";

export const About = () => {
  return (
    <>
      {" "}
      {/* About Us */}
      <div className={styles.aboutsection}>
        <div className={styles.about}>
          <p>What makes our brand different</p>
        </div>
        {/*  */}
        <div className={styles.aboutdetails}>
          <div className={styles.aboutitems}>
            <Image
              src="/delivery.svg"
              alt="image of a delivery vehicle"
              width={23}
              height={22}
            />
            <h6>Next day as standard</h6>
            <p>
              Order before 3pm and get <br /> your order the next day as
              standard
            </p>
          </div>
          <div className={styles.aboutitems}>
            <Image
              src="/check.svg"
              alt="image of a delivery vehicle"
              width={23}
              height={22}
            />
            <h6>Next day as standard</h6>
            <p>
              Handmade crafted goods <br /> made with real passion and
              craftmanship
            </p>
          </div>
          <div className={styles.aboutitems}>
            <Image
              src="/card.svg"
              alt="image of a delivery vehicle"
              width={23}
              height={22}
            />
            <h6>Next day as standard</h6>
            <p>
              For our materials and quality <br /> you won&apos;t find better
              prices anywhere
            </p>
          </div>
          <div className={styles.aboutitems}>
            <Image
              src="/plant.svg"
              alt="image of a delivery vehicle"
              width={23}
              height={22}
            />
            <h6>Next day as standard</h6>
            <p>
              We use 100% recycled to <br />
              ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
