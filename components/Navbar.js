import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { ReflectionContext } from "@/context/ReflectionContext";
import Link from "next/link";
import Modal from "react-modal";
import { useRouter } from "next/router";
import PostForm from "./PostForm";
Modal.setAppElement("#__next"); // next config
const formStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%,-50%)",
    backgroundColor: "fff",
    padding: "0",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10,11,13,0.75)",
  },
};
const styles = {
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  wrapper: "flex justify-center gap-10 p-5 bg-[#A4BC92]",
  content: "max-w-7xl flex flex-1 justify-between gap-10",
  bannerNav: "flex cursor-pointer items-center space-x-5",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full shadow-md",
};
const Navbar = () => {
  const router = useRouter();
  const { currentUser, handleUserAuthentication,handleUserLogout } =
    useContext(ReflectionContext);
  console.log(currentUser);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src={logo}
                alt="logo"
                height={50}
                width={155}
              />
            </div>
          </Link>
          {currentUser ? (
            <div className={styles.bannerNav}>
              <Link href={`/about/me`}>
                <div>About Us</div>
              </Link>
              <div>Follow Us</div>
              <Link href={`/premium/buy`}>
                <div>Get Premium</div>
              </Link>
              <Link href={`/t&c/terms`}>
                <div className="">Terms & Conditions</div>
              </Link>
              <Link href={`/?addNew=1`}>
                <div className={styles.accentedButton}>Write Blog</div>
              </Link>
              <button class="BtnLogout" onClick={handleUserLogout}>
                <div class="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>

                <div class="textLogout">Logout</div>
              </button>
            </div>
          ) : (
            <div className={styles.bannerNav}>
              <div>About Us</div>
              <div>Follow Us</div>
              <Link href={`/premium/buy`}>
                <div>Get Premium</div>
              </Link>
              <div
                className={styles.accentedButton}
                onClick={handleUserAuthentication}
              >
                Get Started
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push("/")}
        style={formStyles}
      >
        <div>
          <PostForm />
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
