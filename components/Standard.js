/* eslint-disable react/no-unescaped-entities */
import React, {useContext} from "react";
import Link from "next/link";
import {ReflectionContext} from "@/context/ReflectionContext";
import {useRouter} from "next/router";
const styles = {
  wrapper: "p-9 sm:flex items-center justify-between mr-[2rem]",
  leftSide: "max-w-2xl",
  heading: "text-4xl text-[#a4bc92]",
  leftContent: "text-[#787878] mt-[2.5rem] max-w-xl",
  instructions: "text-[#787878] text-xl flex items-center justify-center",
  rightSide: "flex flex-col gap-5 items-center justify-center",
  accentedButton:
    "w-[15rem] shadow-md bg-black text-white py-4 px-4 rounded-full flex items-center justify-center cursor-pointer",
  actionButton: "flex flex-col ",
};
const Standard = () => {
  const { handleUserAuthentication } = useContext(ReflectionContext);
  const router = useRouter();
  const handleAcceptAndSignIn = () => {
    handleUserAuthentication();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.heading}>
          <h1>Please Login or SignUp to Continue</h1>
        </div>
        <div className={styles.leftContent}>
          <h1>
            Sign up now and join our platform in just a few easy steps. Enter
            your basic information, create a secure password, and start
            exploring our features. We can't wait to have you on board!
          </h1>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.instructions}>
          <h1>
            By clicking on the below button, you will accept<br></br>{" "}
            <Link href="/t&c/terms">
            <span className="cursor-pointer text-[#a4bc92] duration-500 hover:underline transition-transform">
              Terms & Conditions
            </span>
            </Link>{" "}
            and authenticate yourself
          </h1>
        </div>
        <div className={styles.actionButton} onClick={handleAcceptAndSignIn}>
          {/*<Link href={`/t&c/terms?redirect=auth`}>*/}
            <div className={styles.accentedButton}>Dive in </div>
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Standard;
