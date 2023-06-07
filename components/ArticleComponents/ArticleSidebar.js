import React from "react";
import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";
import search from "../../assets/images/search.png";
const styles = {
  wrapper: "",
  accentedButton: "bg-black text-white py-2 px-8 rounded-full",
  searchBar:
    "flex items-center h-[2.6rem] px-[1rem] gap-[0.6rem] border rounded-full",
  search: "border-none outline-none w-full bg-none",
  authorContainer: "my-[2rem]",
  authorProfileImageContainer: "w-[5rem] rounded-full overflow-hidden",
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
      </div>
    </div>
  );
};

export default ArticleSidebar;
