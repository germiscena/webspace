import Image from "next/image";
import styles from "./SinglePost.module.scss";
const SinglePost = () => {
  return (
    <div className={styles.singlePost}>
      <Image src='/image.png' alt='' width={200} height={200} />
    </div>
  );
};

export default SinglePost;
