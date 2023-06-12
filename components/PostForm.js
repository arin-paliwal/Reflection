import { ReflectionContext } from "@/context/ReflectionContext";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
const styles = {
  wrapper:
    "w-[70rem] h-screen flex flex-col justify-start items-center gap-[1rem] p-[1rem] overflow-scroll",
  title: "my-[2rem] font-bold text-3xl",
  field: "w-full flex justify-between gap-[1rem]",
  fieldTitle: "flex-1",
  inputContainer: "flex-5 h-min border-1 border-[#787878]",
  input: "w-full border-0 outline-none bg-transparent",
};

const PostForm = () => {
  const { currentUser } = useContext(ReflectionContext);
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [article, setArticle] = useState("");
  const [readTime, setReadTime] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const addPostToFirebase = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "Articles"), {
      author: currentUser.email,
      bannerImage: bannerImage,
      body: article,
      brief: brief,
      category: category,
      postLength: Number(readTime),
      postedOn: serverTimestamp(),
      title: title,
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Write a new Article</div>
      <div className={styles.field}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.input}
            placeholder="arin"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.field}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.field}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={bannerImage}
            onChange={(event) => setBannerImage(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.field}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.field}>
        <span className={styles.fieldTitle}>Estimated Read Length</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={readTime}
            onChange={(event) => setReadTime(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.field}>
        <span className={styles.fieldTitle}>Article</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            rows={12}
            value={article}
            onChange={(event) => setArticle(event.target.value)}
          />
        </span>
      </div>
      <button onClick={addPostToFirebase}>Submit</button>
    </div>
  );
};

export default PostForm;
