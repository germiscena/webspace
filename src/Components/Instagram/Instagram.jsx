import React from "react";
import styles from "./Instagram.module.scss";
import SinglePost from "../SinglePost/SinglePost";

const Instagram = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Instagram</h2>
      <div className={styles.posts}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};

export default Instagram;
