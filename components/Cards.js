import Image from "next/image";
import logo from "../assets/images/logo.png";
import React, { useContext } from "react";
import bookmark from "../assets/images/bookmark.gif";
import Link from "next/link";
import { db } from "@/firebase";
import { getDoc, doc, deleteDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ReflectionContext } from "@/context/ReflectionContext";
import Standard from "./Standard";
import { Router, useRouter } from "next/router";
const styles = {
  authorContainer: "flex gap-5 ",
  authorImageContainer: "grid place-items-center overflow-hidden h-10 w-10",
  authorImage: "object-cover",
  postDetails: "flex-[2.5] flex flex-col",
  wrapper: "flex justify-between gap-5 items-center",
  briefing: "text-[#787878] line-clamp-2 max-w-3xl",
  title: "font-bold text-2xl",
  authorName: "font-semibold",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#000] p-2 text-white rounded-full",
  bookmark: "cursor-pointer",
  thumbnailContainer: "object-cover",
  thumbnail: "rounded-[14px]",
};
const Cards = ({ post }) => {
  const router = useRouter();
  const { currentUser } = useContext(ReflectionContext);
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      const authorDoc = doc(db, "Users", post.data.author);
      const authorSnapshot = await getDoc(authorDoc);
      setAuthorData(authorSnapshot.data());
    };

    getAuthorData();
  }, [post.data.author]);

  const deletePost = async () => {
    if (currentUser.email === post.data.author) {
      const postDoc = doc(db, "Articles", post.id);
      await deleteDoc(postDoc);
    }
    router.reload();
  };

  return (
    <>
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
          <Link href={`/post/${post.id}`}>
            <h1 className={styles.title}>{post.data.title}</h1>
          </Link>
          <div className={styles.briefing}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <div className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              &nbsp;●&nbsp;
              {post.data.postLength} min &nbsp;●{" "}
              <span className={styles.category}>{post.data.category}</span>
            </div>
            <span className={styles.bookmark}>
              <Image src={bookmark} alt="bookmark" width={50} height={50} />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            alt="thumbnail"
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            height={100}
            width={100}
            className={styles.thumbnail}
          />
        </div>
        {currentUser.email === post.data.author && (
          <button className="buttonDelete" onClick={deletePost}>
            <svg viewBox="0 0 448 512" className="svgIconDelete">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        )}
      </div>
      {/* </Link> */}
    </>
  );
};

export default Cards;
