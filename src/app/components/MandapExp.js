import Image from "next/image";
import mandapexpimg from "../../../public/images/mandap.png";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";

const MandapExp = () => {
  return (
    <>
      <div className="container">
        <div className="mandapexp-sub-blk">
          <div className="mandapexp-img-blk">
            <Image
              src={mandapexpimg}
              className="mandapexp"
              alt="book mandap in bbsr"
            />
          </div>
          <div className="mandpexp-cnt-blk">
            <div className="mandapexpcntbox">
              <h4>Elegance and Tradition:</h4>
              <h2>THE PERFECT MARRIAGE MANDAP EXPERIENCE</h2>
              <p>
                Let Mishra Catering Create a Sacred and Beautiful Space for Your
                Most Special Day. Exquisite Mandap Designs, Tailored to Your
                Vision, Crafted with Love and Perfection.
              </p>
              <div className="madpexp-btnblk">
                <Link href="#">Book Now <CiLocationArrow1 className="mandpexp-btn-icn"/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MandapExp;
