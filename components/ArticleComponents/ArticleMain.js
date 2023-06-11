import React from "react";
import Image from "next/image";
import bookmark from "../../assets/Social/bookmark.svg";
import avatar from "../../assets/images/avatar.png";
import menu from "../../assets/Social/menu.svg";
import play from "../../assets/images/play.gif";
import facebook from "../../assets/Social/facebook.svg";
import twitter from "../../assets/Social/twitter.svg";
import whatsapp from "../../assets/Social/whatsapp.svg";
import banner from "../../assets/images/banner.jpg";
const styles = {
  wrapper: `flex items-center justify-center flex-[3]`,
  content: `h-screen w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileContainer: `rounded-full h-[3rem] grid center w-[3rem] overflow-hidden`,
  authorImage: `object-cover`,
  column: `flex flex-1 flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#A4BC92]`,
  social: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `font-bold`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleContainer: `flex flex-col gap-[1rem]`,
  image: "object-cover",
  title: "font-bold text-3xl",
  subTitle: "text-[1.2rem] text-[#787878]",
  article: "font-medium",
};
const ArticleMain = ({ post, author }) => {
  const date = new Date(post?.data?.postedOn);
  date.setUTCHours(date.getUTCHours() + 5);
  date.setUTCMinutes(date.getUTCMinutes() + 30);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileContainer}>
              <Image
                className={styles.authorImage}
                src={avatar}
                alt="profile-image"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div className="font-bold">{author?.data?.name}</div>
              <div className={styles.postDetails}>
                <span>
                  {post?.data?.category} ● &nbsp;
                  {date.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                  })}{" "}
                  &nbsp; ● &nbsp;
                  {post?.data?.postLength} min read
                </span>
                <span className={styles.listenButton}>
                  <Image src={play} alt="play" width={20} height={20} />
                  Hear the article
                </span>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <Image src={twitter} alt="twitter" />
            <Image src={facebook} alt="facebook" />
            <Image src={whatsapp} alt="whatsapp" />
            <div className={styles.space}>|</div>
            <Image src={bookmark} alt="bookmark" />
            <Image src={menu} alt="menu" />
          </div>
        </div>
        <div className={styles.articleContainer}>
          <div className={styles.bannerContainer}>
            <Image src={banner} alt="banner-image" className={styles.image} />
          </div>
          <div className={styles.title}>{post?.data?.title}</div>
          <h4 className={styles.subTitle}>
            <div>
              {author?.data?.name} ● &nbsp;
              {new Date(post?.data?.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              &nbsp;● 698↑ 14↓
            </div>
            <div>Overview : {post?.data?.brief}</div>
          </h4>
          <div className={styles.article}>{post?.data?.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
