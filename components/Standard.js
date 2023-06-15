/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
const styles = {
  wrapper: "p-5 flex justify-between mr-[2rem]",
  leftSide: "max-w-2xl",
  heading: "text-4xl text-[#a4bc92]",
  leftContent: "text-[#787878] mt-[2.5rem] max-w-xl",
  instructions: "text-[#787878] text-xl flex items-center justify-center",
  rightSide:"flex flex-col gap-5 items-center justify-center",
  accentedButton: "w-[15rem] bg-black text-white py-4 px-4 rounded-full flex items-center justify-center",
  actionButton:"flex flex-col "
};
const Standard = () => {
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
            Click on the below button<br></br>Accept the{" "}
            <span className="cursor-pointer text-[#a4bc92]">
              Terms & Conditions
            </span>{" "}
            and create the account
          </h1>
        </div>
        <div className={styles.actionButton}>
          <Link href={`/t&c/terms`}>
            <div className={styles.accentedButton}>Dive in </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Standard;
