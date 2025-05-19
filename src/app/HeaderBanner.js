"use client";
import "../../node_modules/swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../node_modules/swiper/modules/pagination.css";
import "../../node_modules/swiper/modules/navigation.css";
import Image from "next/image";
// import sliderimag1 from "../../public/images/slider-bg.png";
// import sliderimag2 from "../../public/images/catering-bg.png";
import slidertopimage from "../../public/images/Frame.png";
import menupackageimage from '../../public/images/restaurant.png';
import Link from "next/link";
const HeaderBanner = () => {
  return (
    <div className="slider-blk">
      <div className="slider-blk-bg-img">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            800: { slidesPerView: 1 },
            1000: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div className="review item slider-blk-bg-img">
              <div className="slider-cntblk container">
                <div className="slider-cnt">
                  <h3>BEST CATERING SERVICE PROVIDER</h3>
                  <p>Curated Menus & Memorable Moments.</p>
                  <div className="slider-cta-blk"><Link href="#" className="slider-btn">Check Packages<Image src={menupackageimage} alt="menu package" className="menupackagecls"/></Link></div>
                </div>
                <div className="slider-top-img">
                  <Image
                    src={slidertopimage}
                    alt="best catering service provider in bhubaneswar"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="review item slider-blk-bg-img2">
              <div className="slider-cntblk container">
                <div className="slider-cnt">
                  <h3>Divine Dishes, Delivered</h3>
                  <p>Your Friendly Neighborhood Caterer.</p>
                  <div className="slider-cta-blk"><Link href="#" className="slider-btn">Check Packages <Image src={menupackageimage} alt="menu package" className="menupackagecls"/></Link></div>
                </div>
                <div className="slider-top-img">
                  <Image src={slidertopimage} alt="best catering service provider in bhubaneswar" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default HeaderBanner;
