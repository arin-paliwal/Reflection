import ArticleMain from "@/components/ArticleComponents/ArticleMain";
import ArticleSidebar from "@/components/ArticleComponents/ArticleSidebar";
import ReadersNav from "@/components/ArticleComponents/ReadersNav";
import { ReflectionContext } from "@/context/ReflectionContext";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "./../../components/Loader";
const styles = {
  wrapper: "flex",
};
const Post = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
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
          <ReadersNav />
          <ArticleMain post={post} author={author} />
          <ArticleSidebar />
        </div>
      )}
    </>
  );
};

export default Post;
