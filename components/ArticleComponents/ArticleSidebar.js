/* eslint-disable react/jsx-key */
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../assets/images/avatar.png";
import search from "../../assets/images/search.png";
import reccthumb from "../../assets/images/reccthumb.png";
import { ReflectionContext } from "@/context/ReflectionContext";
const styles = {
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]",
  accentedButton:
    "flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full cursor-pointer",
  searchBar:
    "flex items-center h-[2.6rem] px-[1rem] gap-[0.6rem] border rounded-full",
  search: "border-none outline-none w-full bg-none",
  authorContainer: "my-[2rem]",
  authorProfileImageContainer: "w-[5rem] rounded-full overflow-hidden",
  authorName: "font-semibold mb-[.2rem] mt-[1rem]",
  authorFollowers: "text-[#787878]",
  authorActions: "flex gap-[.6rem] my-[1rem]",
  actionButton: "bg-black text-white rounded-full px-[.6rem] py-[.4rem]",
  recommendationAuthorProfileContainer:
    "rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  recommendationAuthorName: "text-sm",
  recommendationAuthorDetails: "text-sm text-[#787878]",
  recommendationAuthorContainer: "flex items-center gap-[.6rem]",
  recommendationTitle: "font-bold",
  recommendationThumbnailcontainer:
    "flex flex-1 items-center justify-center h-[4rem] w-[4rem]",
  recommendationThumbnail: "object-cover",
  articlecontentWrapper:
    "flex items-center justify-center cursor-pointer my-[1rem]",
  articleContent: "flex-4",
  title: "font-bold text-[#A4BC92]",
};
const ArticleSidebar = ({ post, author }) => {
  const { currentUser } = useContext(ReflectionContext);
  return (
    <div className={styles.wrapper}>
      <Link href="/premium/buy">
        {" "}
        <div className={styles.accentedButton}>Get Reflection Membership</div>
      </Link>
      <div className={styles.searchBar}>
        <Image src={search} alt="search-icon" width={20} height={20} />
        <input
          className={styles.search}
          placeholder="being curious ... ?"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
            alt="profileImage"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.authorName}>{author?.data?.name}</div>
        <div className={styles.authorFollowers}>
          20K Followers ● {post?.data?.category}
        </div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>All Blogs</button>
          <button className={styles.actionButton}>About Creator</button>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Reflection</div>
        <div className={styles.articlesContainer}>
          {recommendedPosts.map((post, index) => (
            <div className={styles.articlecontentWrapper} key={index}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div className={styles.recommendationAuthorProfileContainer}>
                    <Image
                      src={post.author.image}
                      alt="logo"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    <h1>{post.author.name}</h1>
                  </div>
                  <div className={styles.recommendationAuthorDetails}>
                    <h1>3 min read ● 140↑ 8↓</h1>
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>

              <div className={styles.recommendationThumbnailcontainer}>
                <Image
                  className={styles.recommendationThumbnail}
                  src={post.image}
                  alt="thumbnail"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
const recommendedPosts = [
  {
    title: "What features are new in VS Code?",
    image: reccthumb,
    author: {
      name: "Atul Paliwal",
      image: avatar,
    },
  },
  {
    title: "NextJs, New Update",
    image: reccthumb,
    author: {
      name: "Shalini Paliwal",
      image: avatar,
    },
  },
  {
    title: "How to enroll in Microsoft Insider",
    image: reccthumb,
    author: {
      name: "Arin Paliwal",
      image: avatar,
    },
  },
];
