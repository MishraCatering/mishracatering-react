import { BiPhoneCall } from "react-icons/bi";
import facebook from '../../public/images/facebook.png';
import instagram from '../../public/images/insta.png';
import youtube from '../../public/images/youtube.png';
import Image from "next/image";
const TopHeader =() =>(
    <>
    <div className="topheader-blk">
        <div className="container">
            <div className="top-header-mainblk">
                <div className="top-social">
                    <span>Follow us on : - </span>
                    <a href=""><Image src={facebook} /></a>
                    <a href=""><Image src={instagram} /></a>
                    <a href=""><Image src={youtube} /></a>
                </div>
                <div className="top-call">
                    <a href="tel:9337636010"><BiPhoneCall />
                    9337636010</a>
                </div>
            </div>
        </div>
    </div>
    </>
);
export default TopHeader