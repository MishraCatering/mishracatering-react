'use client';
import Image from "next/image";
import styles from "./page.module.css";
import webpageimg from './images/mishra-catering.jpg';
import HeaDer from "./header";
import TopHeader from "./TopHeader";
import HeaderBanner from "./HeaderBanner";
import HomeComponent from "./components/HomeComponent";
import FooterSection from "./components/FooterSection";
import { useEffect, useState } from "react";
import { baseURL } from "./lib/constants";


export default function Home() {
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    const res = await fetch(`${baseURL}/category/api/categories/`)
    .then(response=>response.json())
    .then((jsonData)=>{ 
      setCategories(jsonData)
    })
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return (
    <div className="main-blk">
      <main className="main-blk-cls">
        <TopHeader/>
        <HeaDer categories={categories}/>
        <HeaderBanner/>
      {/* <Image className="webpageimg" src={webpageimg} /> */}
      <HomeComponent categories={categories}/>
      <FooterSection/>
      </main>
      <footer className={styles.footer}>
        
          
      </footer>
    </div>
  );
}
