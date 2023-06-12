import Image from "next/image";
import logo from "../assets/images/logo.png";
import React, { useContext } from "react";
import bookmark from "../assets/images/bookmark.gif";
import Link from "next/link";
import { db } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ReflectionContext } from "@/context/ReflectionContext";
import Standard from "./Standard";
const styles = {
  authorContainer: "flex gap-5 ",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w=[1.4rem]",
  authorImage: "object-cover",
  postDetails: "flex-[2.5] flex flex-col",
  wrapper: "flex max-width-[46rem] h-[10rem] items-center gap-1rem",
  briefing: "text-[#787878]",
  title: "font-bold text-2xl",
  authorName: "font-semibold",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#000] p-2 text-white rounded-full",
  bookmark: "cursor-pointer",
  thumbnail: "flex-1 object-contain",
};
const Cards = ({ post }) => {
  const { currentUser } = useContext(ReflectionContext);
  const [authorData, setAuthorData] = useState(null);
  useEffect(() => {
    const getAuthorData = async () => {
      console;
      // console.log(((await getDoc(doc(db, "Users", post.data.author))).data()))
      setAuthorData((await getDoc(doc(db, "Users", post.data.author))).data());
    };
    getAuthorData();
  }, [post.data.author]);
  // console.log(post.data.author);
  return (
    <>
      {currentUser ? (
        <Link href={`/post/${post.id}`}>
          <div className={styles.wrapper}>
            <div className={styles.postDetails}>
              <div className={styles.authorContainer}>
                <div className={styles.authorImageContainer}>
                  <Image
                    src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                    alt="logo"
                    className={styles.authorImage}
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.authorName}>{authorData?.name}</div>
              </div>
              <h1 className={styles.title}>{post.data.title}</h1>
              <div className={styles.briefing}>{post.data.brief}</div>
              <div className={styles.detailsContainer}>
                <div className={styles.articleDetails}>
                  {/* 20 September  */}
                  {new Date(post.data.postedOn).toLocaleString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  &nbsp;●&nbsp;
                  {/* 5 min  */}
                  {post.data.postLength} min &nbsp;●{" "}
                  <span className={styles.category}>{post.data.category}</span>
                </div>
                <span className={styles.bookmark}>
                  <Image src={bookmark} alt="bookmark" width={50} height={50} />
                </span>
              </div>
            </div>
            <div className={styles.thumbnail}>
              <Image
                alt="thumbnail"
                src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
                height={100}
                width={100}
              />
            </div>
          </div>
        </Link>
      ) : (
        <Standard />
      )}
    </>
  );
};

export default Cards;
