import styles from "./page.module.css";
import HeaDer from "./header";
import TopHeader from "./TopHeader";
import HeaderBanner from "./HeaderBanner";
import HomeComponent from "./components/HomeComponent";
import FooterSection from "./components/FooterSection";
import { baseURL } from "./lib/constants";

export default async function Home() {
  const res = await fetch(`${baseURL}/category/api/categories/`, {
    cache: "no-store",
  });
  const categories = await res.json();

  return (
    <div className="main-blk">
      <main className="main-blk-cls">
        <TopHeader />
        <HeaDer categories={categories} />
        <HeaderBanner />
        {/* <Image className="webpageimg" src={webpageimg} alt="Webpage" /> */}
        <HomeComponent categories={categories} />
        <FooterSection />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
