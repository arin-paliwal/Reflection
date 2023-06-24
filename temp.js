import { ReflectionContext } from "@/context/ReflectionContext";
import { db } from "@/firebase";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import titleImg from "../assets/images/title.svg";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext } from "react";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
const styles = {
  wrapper:
    "flex flex-row items-center justify-center h-screen w-[1200px] p-10 overflow-y",
  logoContainer: "object-contain w-[200px] mr-10",
  formContainer:
    "p-5 ml-[5rem] h-screen scrollabe-y w-[800px] rounded-[50px] flex gap-[180px] flex-col",
  formHeading: "flex flex-start top-0 text-3xl text-[#a4bc92] justify-center",
  inputContainer: "flex flex-col",
  inputBoxes: "flex flex-start space-between gap-10 text-xl  w-full",
  accentedButton: "w-[200px] bg-black text-white py-4 px-4 rounded-full",
  actionButton: "flex items-center justify-center mb-2rem",
};

const PostForm = () => {
  const router = useRouter();
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

    // Close the modal, route to home page, and refresh the page
    router.push("/", undefined, { shallow: true });
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {/* <div className={styles.formHeading}>
            <h1>Enter Article Details</h1>
          </div> */}
          <div className={styles.logoContainer}>
            <Link href={"/"}>
              <Image className={styles.logo} src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className="flex flex-col gap-4">
            <div className={styles.inputContainer}>
              <label
                htmlFor="title"
                className="text-xl text-[#787878] mb-[1rem]"
              >
                Blog Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="flex p-2  rounded-[50px] bg-[#f2f2f2] focus:outline-none focus:border-black-100"
                placeholder="article should make people curious"
              />
            </div>
            <div className={styles.inputContainer}>
              <label
                htmlFor="brief"
                className="text-xl text-[#787878] mb-[1rem]"
              >
                Briefing
              </label>
              <input
                type="text"
                id="title"
                value={brief}
                onChange={(event) => setBrief(event.target.value)}
                className="flex p-2  rounded-[50px] bg-[#f2f2f2] focus:outline-none focus:border-black-100"
                placeholder="brief should be designed in curious way"
              />
            </div>
            <div className={styles.inputContainer}>
              <label
                htmlFor="imageUrl"
                className="text-xl text-[#787878] mb-[1rem]"
              >
                Banner Image
              </label>
              <input
                type="text"
                value={bannerImage}
                onChange={(event) => setBannerImage(event.target.value)}
                className="flex p-2  rounded-[50px] bg-[#f2f2f2] focus:outline-none focus:border-black-100"
                placeholder="your image url (sorry we don't support drag n drop)"
              />
            </div>
            <div className={styles.inputContainer}>
              <label
                htmlFor="category"
                className="text-xl text-[#787878] mb-[1rem]"
              >
                Category of the Article
              </label>
              <input
                type="text"
                id="title"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="flex p-2  rounded-[50px] bg-[#f2f2f2] focus:outline-none focus:border-black-100"
                placeholder="the category to which article belongs"
              />
            </div>
            <div className={styles.inputContainer}>
              <label
                htmlFor="title"
                className="text-xl text-[#787878] mb-[1rem]"
              >
                Read Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(event) => setReadTime(event.target.value)}
                className="flex p-2  rounded-[50px] bg-[#f2f2f2] focus:outline-none focus:border-black-100"
                placeholder="average read time to read your article"
              />
            </div>
            <div className={styles.inputContainer}>
              <label
                htmlFor="mainArticle"
                className="text-xl text-[#787878] mb-[1rem]"
              >
                Write down your article
              </label>
              <input
                type="text"
                value={article}
                onChange={(event) => setArticle(event.target.value)}
                className="flex p-2  rounded-[50px] bg-[#f2f2f2] focus:outline-none focus:border-black-100"
                placeholder="finally...your article"
              />
            </div>
            <div className={styles.actionButton}>
              <button
                onClick={addPostToFirebase}
                className={styles.accentedButton}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
