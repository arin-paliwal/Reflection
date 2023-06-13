import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { ReflectionContext } from "@/context/ReflectionContext";
import handleUserAuthentication from "../context/ReflectionContext";
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
  wrapper: "flex justify-center gap-10 p-5 bg-[#A4BC92]",
  content: "max-w-7xl flex flex-1 justify-between gap-10",
  logo: "cursor-pointer object-contain",
  bannerNav: "flex cursor-pointer items-center space-x-5",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
};
const Navbar = () => {
  const router = useRouter();
  const { currentUser, handleUserAuthentication } =
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
              <div>About Us</div>
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
            </div>
          ) : (
            <div className={styles.bannerNav}>
              <div>About Us</div>
              <div>Follow Us</div>
              <div onClick={handleUserAuthentication}>Get Premium</div>
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
