import "./whyus.css";
import Image from "next/image";
import whyusbrdimg from "../../../public/images/why-us-brd.png";
import easyordericon from "../../../public/images/order.png";
import deliveryicon from '../../../public/images/delivery.png';
import qualityicon from '../../../public/images/quality.png';
const WhyUs = () => {
  return (
    <>
      <div className="container">
        <div className="why-us-cnt-blk">
          <h4>Why Us</h4>
          <h2>A Legacy of Culinary Excellence</h2>
          <p>
            With years of experience, Mishra Catering is a trusted name,
            delivering memorable dining experiences for all kinds of events.
          </p>
        </div>
        <div className="hm-serv-btm-brd">
          <div className="brd"></div>
          <div className="brd-img-blk">
            <Image className="brd-icon" src={whyusbrdimg} alt="border image" />
          </div>
          <div className="brd"></div>
        </div>

        <div className="why-us-main-blk">
          <div className="why-us-box">
            <div className="why-us-icon">
              <Image src={easyordericon} alt="catering image" />
            </div>
            <div className="why-us-box-cnt">
              <h3>Easy To Order</h3>
              <p>Follow some few steps to place order</p>
            </div>
          </div>

          <div className="why-us-box">
            <div className="why-us-icon">
              <Image src={deliveryicon} alt="catering image" />
            </div>
            <div className="why-us-box-cnt">
              <h3>On Time Delivery</h3>
              <p>hassle free delivery on time</p>
            </div>
          </div>

          <div className="why-us-box">
            <div className="why-us-icon">
              <Image src={qualityicon} alt="catering image" />
            </div>
            <div className="why-us-box-cnt">
              <h3>Best Quality</h3>
              <p>Not Compromise in quality</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyUs;
