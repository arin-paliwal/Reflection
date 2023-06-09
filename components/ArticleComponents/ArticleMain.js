import React from "react";
import Image from "next/image";
import avatar from "../../assets/images/avatar.png";
import play from "../../assets/images/play.gif";
const styles = {
  wrapper: "flex items-center justify-center flex-[3]",
  content: "h-screen p-[2rem]",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem]",
  authorProfileContainer:
    "rounded-full h-[3rem] grid center w-[3rem] overflow-hidden",
  authorImage: "object-cover",
  column: "flex flex-1 flex-col justify-center",
  postDetails: "flex gap-[.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[.2rem] text-[#A4BC92]",
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
                <span>
                  September 20, 2023 ● 19:45
                  <span className={styles.listenButton}>
                    <Image src={play} alt="play" width={40} height={40} />
                    Listen
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
