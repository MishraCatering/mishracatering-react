import Image from "next/image";
import Link from "next/link";
import './eventcategory.css';
import marriageevent from '../../../public/images/marriage-event.png';
import corporateevent from '../../../public/images/corporate-event.png';
import birthdayevent from '../../../public/images/birthday-event.png';
import bulkfooddelivery from '../../../public/images/bulk-food-delivery.png';
import kittypartyevent from '../../../public/images/kitty-party-event.png';
import bachelorpartyevent from '../../../public/images/bachelor-party-event.png';
import { CiLocationArrow1 } from "react-icons/ci";

const EventCategory = () => {
  return (
    <>
      <div className="event-category-blk">
        <div className="event-category-cnt-blk">
          <h4>Our Catagories</h4>
          <h2>Plan your Event With Us</h2>
          <p>Catering that delights every guest!</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-height">
              <div className="event-category-img">
                <Image src={marriageevent} alt="catering image" />
              </div>
              <div className="event-category-cnt">
                <h3>MARRIAGE EVENT</h3>
                <div className="event-category-btn-blk">
                  <Link href="#" className="custom-event-category-btn">
                    BOOK NOW <CiLocationArrow1 className="event-cat-cta-icon"/>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-height">
              <div className="event-category-img">
                <Image src={corporateevent} alt="catering image" />
              </div>
              <div className="event-category-cnt">
                <h3>CORPORATE EVENT</h3>
                <div className="event-category-btn-blk">
                  <Link href="#" className="custom-event-category-btn">
                    BOOK NOW <CiLocationArrow1 className="event-cat-cta-icon"/>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-height">
              <div className="event-category-img">
                <Image src={birthdayevent} alt="catering image" />
              </div>
              <div className="event-category-cnt">
                <h3>BIRTHDAY EVENT</h3>
                <div className="event-category-btn-blk">
                  <Link href="#" className="custom-event-category-btn">
                    BOOK NOW <CiLocationArrow1 className="event-cat-cta-icon"/>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-height">
              <div className="event-category-img">
                <Image src={bulkfooddelivery} alt="catering image" />
              </div>
              <div className="event-category-cnt">
                <h3>BULK FOOD DELIVERY</h3>
                <div className="event-category-btn-blk">
                  <Link href="#" className="custom-event-category-btn">
                    BOOK NOW <CiLocationArrow1 className="event-cat-cta-icon"/>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-height">
              <div className="event-category-img">
                <Image src={kittypartyevent} alt="catering image" />
              </div>
              <div className="event-category-cnt">
                <h3>KITTY PARTY EVENT</h3>
                <div className="event-category-btn-blk">
                  <Link href="#" className="custom-event-category-btn">
                    BOOK NOW <CiLocationArrow1 className="event-cat-cta-icon"/>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-4 col-lg-4 col-sm-12 col-height">
              <div className="event-category-img">
                <Image src={bachelorpartyevent} alt="catering image" />
              </div>
              <div className="event-category-cnt">
                <h3>BACHELOR”S PARTY</h3>
                <div className="event-category-btn-blk">
                  <Link href="#" className="custom-event-category-btn">
                    BOOK NOW <CiLocationArrow1 className="event-cat-cta-icon"/>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
export default EventCategory;
