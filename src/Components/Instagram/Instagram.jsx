import React from "react";
import styles from "./Instagram.module.scss";
import SinglePost from "../SinglePost/SinglePost";
import axios from "axios";

const Instagram = () => {
  const [data, setData] = React.useState();
  const token =
    "IGQWRQSFhyMmRjTU9DOHZAmTm1fb2FNMXFJVldWY0R3Qld4dDNEOGx0UjNLbHRac2lXMlVraXB2UHByelVlb0pyc2lQNlJXRklGVUc2S3RCOUE4MDFERElyQ24yOXZAFUUN4bDQ1aUlIMmFkSVN4eGFvYlhXck5MS0kZD";
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const fakeData = { media_url: "/image.png", caption: "Fake data", timestamp: "Fake time 3:00" };
  React.useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`,
      )
      .then((res) => setData(res.data.data[0]));
  }, []);
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Instagram</h2>
      <div className={styles.posts}>
        {data &&
          arr.map((item) => {
            return <SinglePost key={item} props={data ? data : fakeData} />;
          })}
      </div>
    </div>
  );
};

export default Instagram;
