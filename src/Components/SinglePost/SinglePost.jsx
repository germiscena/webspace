import Image from "next/image";
import React from "react";
import styles from "./SinglePost.module.scss";
const SinglePost = ({ props }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className={styles.singlePost}>
      <Image
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        src={props.media_url}
        alt=''
        width={200}
        height={200}
        style={isHovered ? { opacity: 0.5 } : ""}
      />
      {isHovered && (
        <div className={styles.hover}>
          <p className={styles.description}>{props.caption}</p>
          <p className={styles.description}>{props.timestamp}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
