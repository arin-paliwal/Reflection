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
  headingContainer: "flex flex-col items-center justify-center gap-2",
  heading: "flex text-5xl font-bold",
  subHeading: "flex text-3xl text-[#787878]",
  imageContainer: "flex object-contain w-1/4",
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
  // const router = useRouter();
  // const { currentUser } = useContext(ReflectionContext);
  // const [title, setTitle] = useState("");
  // const [brief, setBrief] = useState("");
  // const [category, setCategory] = useState("");
  // const [article, setArticle] = useState("");
  // const [readTime, setReadTime] = useState("");
  // const [bannerImage, setBannerImage] = useState("");

  // const addPostToFirebase = async (event) => {
  //   event.preventDefault();

  //   await addDoc(collection(db, "Articles"), {
  //     author: currentUser.email,
  //     bannerImage: bannerImage,
  //     body: article,
  //     brief: brief,
  //     category: category,
  //     postLength: Number(readTime),
  //     postedOn: serverTimestamp(),
  //     title: title,
  //   });

  //   // Close the modal, route to home page, and refresh the page
  //   router.push("/", undefined, { shallow: true });
  // }

  const [instructions, setInstructions] = useState(0);
  useEffect(() => {
    setInstructions(Math.floor(Math.random() * directions.length));
  }, []);
  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [bannerImage, setBannerImage] = useState("");

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

  return (
    <div className="flex flex-col w-[80rem] h-[40rem] bg-[#f2f2f2] rounded-[35px] p-8">
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Welcome to Reflection</h1>
        <h1 className={styles.subHeading}>{directions[instructions]}</h1>
      </div>
      {/* <div className={styles.formsContainer}>
        <div className={styles.tabContainer}>
          <button
            className={`px-4 py-2 rounded-tl rounded-bl ${
              activeTab === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Tab 1
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Tab 2
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Tab 3
          </button>
          <button
            className={`px-4 py-2 rounded-tr rounded-br ${
              activeTab === 4
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() => handleTabClick(4)}
          >
            Tab 4
          </button>
        </div>

        {activeTab === 1 && (
          <div>
            <label className="block mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />

            <label className="block mb-2" htmlFor="title">
              Title of Article:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <label className="block mb-2" htmlFor="brief">
              Article Brief:
            </label>
            <textarea
              id="brief"
              value={brief}
              onChange={handleBriefChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />

            <label className="block mb-2" htmlFor="category">
              Article Category:
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />
          </div>
        )}

        {activeTab === 3 && (
          <div>
            <label className="block mb-2" htmlFor="readTime">
              Read Time of Article:
            </label>
            <input
              type="text"
              id="readTime"
              value={readTime}
              onChange={handleReadTimeChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />

            <label className="block mb-2" htmlFor="datePosted">
              Date Posted:
            </label>
            <input
              type="text"
              id="datePosted"
              value={datePosted}
              onChange={handleDatePostedChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />
          </div>
        )}

        {activeTab === 4 && (
          <div>
            <label className="block mb-2" htmlFor="bannerImage">
              Banner Image:
            </label>
            <input
              type="text"
              id="bannerImage"
              value={bannerImage}
              onChange={handleBannerImageChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default PostForm;
