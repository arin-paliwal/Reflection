import React from "react";
import bookmark from "../../assets/images/bookmark.gif";
import edit from "../../assets/images/edit.gif";
import home from "../../assets/images/home.gif";
import notification from "../../assets/images/notification.gif";
import pencil from "../../assets/images/pencil.gif";
import avatar from "../../assets/images/avatar.png";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const styles = {
  wrapper:
    "w-[7rem] h-screen flex flex-col justify-between items-center p-[1rem]",
  icons:
    "flex flex-1 w-10 flex-col justify-center gap-[2rem] text-2xl text-[#787878]",
  logoContainer: "cursor-pointer w-[6rem]",
  divider: "border-b-2 border-black",
  profileImage: "object-cover",
  profileImageContainer: "w-[3rem] rounded-full overflow-hidden items-center",
};
const ReadersNav = ({author}) => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.icons}>
        <Image src={home} alt="homeIcon" />
        <Image src={notification} alt="homeIcon" />
        <Image src={pencil} alt="homeIcon" />
        <Image src={bookmark} alt="homeIcon" />
        <div className={styles.divider} />
        <Image src={edit} alt="homeIcon" />
      </div>
      <div className={styles.profileImageContainer}>
        <Image
          className={styles.authorImage}
          src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
          alt="profile-image"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ReadersNav;
