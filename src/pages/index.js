import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Slider from "@/Components/Slider/Slider";
import Instagram from "@/Components/Instagram/Instagram";
import Map from "@/Components/Map/Map";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web-Space</title>
        <meta name='description' content='Frontend test app for Web-Space' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' />
      </Head>
      <Header />
      <main className={styles.main}>
        <Slider />
        <Instagram />
        <Map />
      </main>
      <Footer />
    </>
  );
}
