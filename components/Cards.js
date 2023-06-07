import Image from "next/image";
import logo from "../assets/images/logo.png";
import React from "react";
import bookmark from "../assets/images/bookmark.gif";
import Link from "next/link";
const styles = {
  authorContainer: "flex gap-5 ",
  authorImageContainer: "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w=[1.4rem]",
  authorImage: "object-cover",
  postDetails: "flex-[2.5] flex flex-col",
  wrapper: "flex max-width-[46rem] h-[10rem] items-center gap-1rem",
  briefing: "text-[#787878]",
  title: "font-bold text-2xl",
  authorName: "font-semibold",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#d5d5d5] p-2 rounded-full",
  bookmark: "cursor-pointer",
};
const Cards = () => {
  return (
    <Link href={`/post/123`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={logo}
                alt="logo"
                className={styles.authorImage}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>Arin Paliwal</div>
          </div>
          <h1 className={styles.title}>
            The technologies that will lead you to a good package.
          </h1>
          <div className={styles.briefing}>
            The leading market consists of WEB3 and Machine Learning.
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.articleDetails}>
              20 September ● 5 min ●{" "}
              <span className={styles.category}>skills enhancement</span>
            </div>
            <span className={styles.bookmark}>
              <Image src={bookmark} alt="bookmark" width={50} height={50} />
            </span>
          </div>
        </div>
        <div className={styles.thumbnail}>
          <Image alt="thumbnail" src={logo} height={100} width={100} />
        </div>
      </div>
    </Link>
  );
};

export default Cards;
