import ArticleMain from "@/components/ArticleComponents/ArticleMain";
import ArticleSidebar from "@/components/ArticleComponents/ArticleSidebar";
import ReadersNav from "@/components/ArticleComponents/ReadersNav";
import React from "react";
const styles = {
  wrapper: "flex",
};
const Post = () => {
  return (
    <div className={styles.wrapper}>
      <ReadersNav />
      <ArticleMain />
      <ArticleSidebar />
    </div>
  );
};

export default Post;
