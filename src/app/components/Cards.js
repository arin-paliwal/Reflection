import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import React from "react";
const styles = {
  authorContainer: "flex gap-5 ",
  authorImageContainer: "",
  authorImage: "object-cover",
  postDetails: "",
  briefing: "text-[#787878]",
  title: "font-bold text-2xl",
  authorName: "font-semibold",
};
const Cards = () => {
  return (
    <div className={styles.postDetails}>
      <div className={styles.authorContainer}>
        <div className={styles.authorImageContainer}>
          <Image
            src={logo}
            alt="logo"
            className={styles.authorImage}
            width={40}
            height={40}
          />
        </div>
        <div className={styles.authorName}>Arin Paliwal</div>
      </div>
      <h1 className={styles.title}>
        The technologies that will lead you to a good package.
      </h1>
      <div className={styles.briefing}>
        The leading market consists of WEB3 and Machine Learning.
      </div>
    </div>
  );
};

export default Cards;
