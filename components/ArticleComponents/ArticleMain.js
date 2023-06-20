import React from "react";
import { useState } from "react";
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
  listenButton: `flex items-center bg-black px-4 py-2 rounded-full text-white`,
  actionButton: "bg-black text-white rounded-full px-[.6rem] py-[.4rem]",
  social: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `font-bold`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleContainer: `flex flex-col gap-[1rem]`,
  image: "h-full w-full",
  title: "font-bold text-3xl",
  subTitle: "text-[1rem] text-[#000]",
  article: "text-[1.4rem] text-[#787878]",
  overViewContainer: "bg-[#f5f5f5] p-6 rounded-[40px] text-[1.1rem]",
  ListenButtons: "flex flex-row gap-[.3rem]",
};
const ArticleMain = ({ post, author }) => {
  const [hearing, setHearing] = useState(false);
  const date = new Date(post?.data?.postedOn);
  // date.setUTCHours(date.getUTCHours() + 5);
  // date.setUTCMinutes(date.getUTCMinutes() + 30);
  console.log(author);
  const toSpeak = post?.data?.body;
  let utterance; // Declare a variable to store the current utterance

  function speak() {
    // Stop any ongoing speech synthesis
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    utterance = new SpeechSynthesisUtterance(toSpeak);
    let voicesArray = speechSynthesis.getVoices();
    utterance.voice = voicesArray[2];
    speechSynthesis.speak(utterance);
    setHearing(true);
  }

  function stopSpeaking() {
    // Check if there's an ongoing speech synthesis
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel(); // Stop the speech synthesis
    }
    setHearing(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileContainer}>
              <Image
                className={styles.authorImage}
                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                alt="profile-image"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div className="font-bold">
                {author?.data?.name} ● &nbsp;
                {post?.data?.postLength} min read
              </div>
              <div className={styles.postDetails}>
                <span>
                  {post?.data?.category} ● &nbsp;
                  {date.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                    // timeZone: "Asia/Kolkata",
                  })}{" "}
                  UTC &nbsp;
                </span>
              </div>
            </div>
          </div>
          <span className={styles.ListenButtons}>
            {hearing === false ? (
              <button
                className={`heading ${styles.actionButton}`}
                onClick={speak}
              >
                <p class="text">Hear Article</p>
              </button>
            ) : (
              <button className="button" onClick={stopSpeaking}>
                <p class="text">Stop Hearing</p>
              </button>
            )}
          </span>
          <div className={styles.social}>
            <Image src={twitter} alt="twitter" onClick={stopSpeaking} />
            <Image src={facebook} alt="facebook" />
            <Image src={whatsapp} alt="whatsapp" />
            <div className={styles.space}>|</div>
            <Image src={bookmark} alt="bookmark" />
            <Image src={menu} alt="menu" />
          </div>
        </div>
        <div className={styles.articleContainer}>
          <div className={styles.bannerContainer}>
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
              width={100}
              height={100}
              alt="banner-image"
              className={styles.image}
            />
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
          </h4>
          <div className={styles.overViewContainer}>
            <div>
              <div className="text-[#A4BC92] text-xl font-bold">
                Overview :{" "}
              </div>
              {post?.data?.brief}
            </div>
          </div>
          <div className={styles.article}>{post?.data?.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
