import Image from "next/image";
import styles from "./page.module.css";
import webpageimg from './images/mishra-catering.jpg';
import HeaDer from "./header";
import TopHeader from "./TopHeader";
import HeaderBanner from "./HeaderBanner";
import HomeComponent from "./components/HomeComponent";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <div className="main-blk">
      <main className="main-blk-cls">
        <TopHeader/>
        <HeaDer/>
        <HeaderBanner/>
      {/* <Image className="webpageimg" src={webpageimg} /> */}
      <HomeComponent/>
      <FooterSection/>
      </main>
      <footer className={styles.footer}>
        
          
      </footer>
    </div>
  );
}
