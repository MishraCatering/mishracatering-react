"use client";
import "../../../node_modules/swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../../node_modules/swiper/modules/pagination.css";
import "../../../node_modules/swiper/modules/navigation.css";
import Image from "next/image";
import customimg1 from "../../../public/images/catering-image-3.png";
import "./customcardslider.css";
import Link from "next/link";
const CustomCardslider = () => {
  return (
    <>
      <div className="custom-card-slider-blk">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="custom-cardslider-img">
              <Image src={customimg1} alt="catering image" />
            </div>
            <div className="custom-cardslider-cnt">
              <h3>MISHRA BOX PLAN</h3>
              <p>(Self Services + Small Buffet)</p>
              <p>Delivery Only</p>
              <div className="custom-menu-btn-blk"><Link href="#" className="custom-menu-btn">Customise Your Package</Link></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="custom-cardslider-img">
              <Image src={customimg1} alt="catering image" />
            </div>
            <div className="custom-cardslider-cnt">
            <h3>MISHRA MEAL PLAN</h3>
              <p>(Self Services + Small Buffet)</p>
              <p>Delivery Only</p>
              <div className="custom-menu-btn-blk"><Link href="#" className="custom-menu-btn">Customise Your Package</Link></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="custom-cardslider-img">
              <Image src={customimg1} alt="catering image" />
            </div>
            <div className="custom-cardslider-cnt">
            <h3>MISHRA BUFFET PLAN</h3>
              <p>(Self Services + Small Buffet)</p>
              <p>Delivery Only</p>
              <div className="custom-menu-btn-blk"><Link href="#" className="custom-menu-btn">Customise Your Package</Link></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="custom-cardslider-img">
              <Image src={customimg1} alt="catering image" />
            </div>
            <div className="custom-cardslider-cnt">
            <h3>MISHRA BOX PLAN</h3>
              <p>(Self Services + Small Buffet)</p>
              <p>Delivery Only</p>
              <div className="custom-menu-btn-blk"><Link href="#" className="custom-menu-btn">Customise Your Package</Link></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="custom-cardslider-img">
              <Image src={customimg1} alt="catering image" />
            </div>
            <div className="custom-cardslider-cnt">
            <h3>MISHRA MEAL PLAN</h3>
              <p>(Self Services + Small Buffet)</p>
              <p>Delivery Only</p>
              <div className="custom-menu-btn-blk"><Link href="#" className="custom-menu-btn">Customise Your Package</Link></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default CustomCardslider;
