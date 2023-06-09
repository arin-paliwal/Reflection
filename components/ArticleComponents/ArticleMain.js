import React from "react";
import Image from "next/image";
import bookmark from "../../assets/Social/bookmark.svg";
import avatar from "../../assets/images/avatar.png";
import menu from "../../assets/Social/menu.svg";
import play from "../../assets/images/play.gif";
import facebook from "../../assets/Social/facebook.svg";
import github from "../../assets/Social/github.svg";
import instagram from "../../assets/Social/instagram.svg";
import linkedin from "../../assets/Social/linkedin.svg";
import twitter from "../../assets/Social/twitter.svg";
import whatsapp from "../../assets/Social/whatsapp.svg";
import banner from "../../assets/images/banner.jpg";
const styles = {
  wrapper: `flex items-center justify-center flex-[3]`,
  content: `h-screen p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileContainer: `rounded-full h-[3rem] grid center w-[3rem] overflow-hidden`,
  authorImage: `object-cover`,
  column: `flex flex-1 flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#A4BC92]`,
  social: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `width-[.5rem]`,
  bannerContainer: "h-[18rem] w-full grid center overflow-hidden mb-[2rem]",
};
const ArticleMain = () => {
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
              <div>Arin Paliwal</div>
              <div className={styles.postDetails}>
                <span>September 20, 2023 ● 19:45</span>
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
            <div className={styles.space} />
            <Image src={bookmark} alt="bookmark" />
            <Image src={menu} alt="menu" />
          </div>
        </div>
        <div className={styles.articleContainer}>
          <div className={styles.bannerContainer}>
            <Image src={banner} alt="banner-image" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
