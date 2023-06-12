import React, { useContext } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { ReflectionContext } from "@/context/ReflectionContext";
import handleUserAuthentication from "../context/ReflectionContext";
const styles = {
  logoContainer: "flex items-center flex-start",
  wrapper: "flex justify-center gap-10 p-5 bg-[#A4BC92]",
  content: "max-w-7xl flex flex-1 justify-between gap-10",
  logo: "cursor-pointer object-contain",
  bannerNav: "flex cursor-pointer items-center space-x-5",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
};
const navHead = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleUserAuthentication } = useContext(ReflectionContext);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={logo}
              alt="logo"
              height={50}
              width={155}
            />
          </div>
          <div className={styles.bannerNav}>
            <div>About Us</div>
            <div>Membership</div>
            <div onClick={handleUserAuthentication}>Authentication</div>
            <div className={styles.accentedButton}>Get Started</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navHead;
