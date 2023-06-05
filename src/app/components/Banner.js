import Image from "next/image";
import "../styles/spin.css";
import banner from "../../../assets/images/banner.png";
import React from "react";
const styles = {
  wrapper: "h-[350px] rounded-br-[20px] rounded-bl-[20px] flex items-center justify-center bg-[#A4BC92]",
  content: "max-w-7xl flex flex-1 items-center justify-between",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
};
const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif">Be Curious.</h1>
          <h3 className="text-2xl">Curated Blogs for Curious Minds.</h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>
        <div className="flex-1"></div>
        <Image className="h-[200px] object-contain flex-1 md:inline-flex animate-spin-slow"
          src={banner}
          alt="banner"
        />
      </div>
    </div>
  );
};
export default Banner;
