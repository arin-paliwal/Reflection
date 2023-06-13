import { ReflectionContext } from "@/context/ReflectionContext";
import { db } from "@/firebase";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import titleImg from "../assets/images/title.svg";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
const styles = {
  wrapper: "h-screen w-screen p-10",
  logoContainer: "object-contain w-[200px] mr-10",
  iconContainer: "object-cover w-[70px] items-center justify-center flex",
  header: "flex flex-row",
  firstPart: "flex flex-col px-1 py-2 rounded-[50px]",
  numering: "text-[#787878] text-xl",
  logo: "mr-20",
  titleImg: "text-[#787878]",
  input: "w-full border-0 outline-none bg-transparent",
  formContainer:"flex"
};

const PostForm = () => {
  const { currentUser } = useContext(ReflectionContext);
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [article, setArticle] = useState("");
  const [readTime, setReadTime] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const addPostToFirebase = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "Articles"), {
      author: currentUser.email,
      bannerImage: bannerImage,
      body: article,
      brief: brief,
      category: category,
      postLength: Number(readTime),
      postedOn: serverTimestamp(),
      title: title,
    });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logo} alt="logo" />
          </div>
          </div>
      </div>
    </>
  );
};

export default PostForm;
