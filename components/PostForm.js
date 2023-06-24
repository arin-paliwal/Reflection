import { ReflectionContext } from "@/context/ReflectionContext";
import { useEffect } from "react";
import { db } from "@/firebase";
import logo from "../assets/images/logo.png";
import Tab1 from "../assets/images/Tab1.gif";

import Image from "next/image";
import titleImg from "../assets/images/title.svg";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext } from "react";
import Link from "next/link";
import { useState } from "react";
import Router, { useRouter } from "next/router";
const styles = {
  headingContainer: "flex flex-col items-center justify-center gap-4",
  mainContainer: "flex flex-row items-center justify-center",
  imageContainer: "",
  image: "w-[25rem] h-[25rem]",
  heading: "flex text-5xl font-bold",
  subHeading: "flex text-3xl text-[#787878]",
  imageContainer: "flex object-contain w-1/4",
  formsContainer:
    "bg-[#f5f5f5] rounded-[50px] w-[40rem] h-[20rem] p-10 gap-5 flex flex-col",
  tabContainer: "",
  input: "flex items-center",
  boxLabel:"text-[#787878] mb-[0.6rem]"
};
const directions = [
  "Share your knowledge and experiences by writing an article.",
  "Become a published author and showcase your writing skills.",
  "Contribute to our community of writers by sharing your insights.",
  "Your voice matters! Write an article and make an impact.",
  "Inspire others with your thoughts and ideas through your writing.",
  "Start writing today and connect with like-minded individuals.",
  "Have a story to tell? Put it into words and publish it here.",
  "Expand your reach and influence through your published articles.",
  "Join our vibrant community of writers and start publishing your work.",
  "Capture your thoughts and transform them into engaging articles.",
];
const PostForm = () => {
  const router = useRouter();
  const { currentUser } = useContext(ReflectionContext);
  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [datePosted, setDatePosted] = useState("");
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
  }

  const [instructions, setInstructions] = useState(0);
  useEffect(() => {
    setInstructions(Math.floor(Math.random() * directions.length));
  }, []);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBriefChange = (event) => {
    setBrief(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleReadTimeChange = (event) => {
    setReadTime(event.target.value);
  };

  const handleDatePostedChange = (event) => {
    setDatePosted(event.target.value);
  };

  const handleBannerImageChange = (event) => {
    setBannerImage(event.target.value);
  };
  const handleArticleChange = (event) => {
    setArticle(event.target.value);
  };


  return (
    <div className="flex flex-col w-[80rem] h-[40rem] bg-[#f0f0f0] rounded-[50px] p-8 gap-5">
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Welcome to Reflection</h1>
        <h1 className={styles.subHeading}>{directions[instructions]}</h1>
      </div>
      <div className={styles.mainContainer}>
        <div>
          <Image className={styles.image} src={Tab1} alt="Tab1-Image" />
        </div>
        <div className={styles.formsContainer}>
          <div className={styles.tabContainer}>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 1
                  ? "bg-[#a4bc92] text-black font-medium"
                  : "bg-[#f5f5f5] text-[#787878]"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Tab 1
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 2
                  ? "bg-[#a4bc92] text-black font-medium"
                  : "bg-[#f5f5f5] text-[#787878]"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Tab 2
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 3
                  ? "bg-[#a4bc92] text-black font-medium"
                  : "bg-[#f5f5f5] text-[#787878]"
              }`}
              onClick={() => handleTabClick(3)}
            >
              Tab 3
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 4
                  ? "bg-[#a4bc92] text-black font-medium"
                  : "bg-[#f5f5f5] text-[#787878]"
              }`}
              onClick={() => handleTabClick(4)}
            >
              Tab 4
            </button>
          </div>
          <div className={styles.input}>
            {activeTab === 1 && (
              <div>
                <label className={styles.boxLabel} htmlFor="name">
                  Name of publisher
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />

                <label className={styles.boxLabel} htmlFor="title">
                  Title of Article
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <label className={styles.boxLabel} htmlFor="brief">
                  Overview of Article
                </label>
                <input
                  id="brief"
                  value={brief}
                  onChange={handleBriefChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />

                <label className={styles.boxLabel} htmlFor="category">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />
              </div>
            )}

            {activeTab === 3 && (
              <div className="gap-3">
                <label className={styles.boxLabel} htmlFor="readTime">
                  Read Time of Article
                </label>
                <input
                  type="text"
                  id="readTime"
                  value={readTime}
                  onChange={handleReadTimeChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />

                <label className={styles.boxLabel} htmlFor="datePosted">
                  Date Posted
                </label>
                <input
                  type="text"
                  id="datePosted"
                  value={datePosted}
                  onChange={handleDatePostedChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />
              </div>
            )}

            {activeTab === 4 && (
              <div>
                <label className={styles.boxLabel} htmlFor="bannerImage">
                  Banner Image
                </label>
                <input
                  type="text"
                  id="bannerImage"
                  value={bannerImage}
                  onChange={handleBannerImageChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />
                <label className={styles.boxLabel} htmlFor="bannerImage">
                  Write your Article
                </label>
                <input
                  type="text"
                  id="bannerImage"
                  value={article}
                  onChange={handleArticleChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 "
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
