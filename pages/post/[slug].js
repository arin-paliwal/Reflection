import ArticleMain from "@/components/ArticleComponents/ArticleMain";
import ArticleSidebar from "@/components/ArticleComponents/ArticleSidebar";
import ReadersNav from "@/components/ArticleComponents/ReadersNav";
import { ReflectionContext } from "@/context/ReflectionContext";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader2";
const styles = {
  wrapper: "flex sm:flex-row flex-col",
  navbarLeft:"w-1/9 sm:flex hidden",
  mainArt:"w-[55rem]",
  sideBar:"w-2/6 sm:flex hidden"
};
const Post = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  const { Posts, Users } = useContext(ReflectionContext);
  const [post, setPost] = useState([]);
  const router = useRouter();
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    if (Posts.length === 0) {
      return;
    }
    setPost(Posts.find((post) => post.id === router.query.slug));

    setAuthor(Users.find((user) => user.id === post?.data?.author));
  }, [Posts, Users, post?.data?.author, router.query.slug]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.navbarLeft}>
            <ReadersNav author={author} />
          </div>
          <div className={styles.mainArt}>
            <ArticleMain post={post} author={author} />
          </div>
          <div className={styles.sideBar}>
            <ArticleSidebar post={post} author={author} />
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
