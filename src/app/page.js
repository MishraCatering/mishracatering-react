import Image from "next/image";
import styles from "./page.module.css";
import webpageimg from './images/mishra-catering.jpg';

export default function Home() {
  return (
    <div className="main-blk">
      <main className="main-blk-cls">
        
      <Image className="webpageimg" src={webpageimg} />
      </main>
      <footer className={styles.footer}>
        
          
      </footer>
    </div>
  );
}
