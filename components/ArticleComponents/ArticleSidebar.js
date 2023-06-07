import React from "react";
import Image from "next/image";
import avatar from "../../assets/images/avatar.png";
import search from "../../assets/images/search.png";
const styles = {
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]",
  accentedButton:
    "flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full",
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
  recommendationAuthorContainer: "flex items-center gap-[.6rem]",
};
const ArticleSidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited Access</div>
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
          <Image src={avatar} alt="profileImage" width={100} height={100} />
        </div>
        <div className={styles.authorName}>Arin Paliwal</div>
        <div className={styles.authorFollowers}>20K Followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>All Blogs</button>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Reflection</div>
        <div className={styles.articlesContainer}>
          <div className={styles.recommendationAuthorContainer}>
            <div className={styles.recommendationAuthorProfileContainer}>
              <Image src={avatar} alt="logo" height={100} width={100} />
            </div>
            <div className={styles.recommendationAuthorName}>Arin Paliwal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
