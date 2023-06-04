import React from "react";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
const styles = {};
const navHead = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={logo}
              alt="logo"
              height={40}
              width={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navHead;
