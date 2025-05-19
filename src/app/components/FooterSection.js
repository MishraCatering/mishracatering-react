import './footer.css';
import Image from 'next/image';
import footerlogo from '../../../public/images/mishra-logo-blue.png';
import Link from 'next/link';
import footerfacebbok from '../../../public/images/facebook.png';
import footerinstagram from '../../../public/images/insta.png';
import footeryoutube from '../../../public/images/youtube.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { SiWebmoney } from "react-icons/si";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import scaner from '../../../public/images/mishra-scanner.png';


const FooterSection = () =>{
    return(
        <>
        <div className='footer-main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-xl-3 col-lg-3 col-sm-12'>
                        <div className='footer-widget-one'>
                            <div className='footer-logo'>
                                <Image src={footerlogo} alt="mishra catering in bhubaneswar" />
                            </div>
                            <p className='footer-cnt'>We are providing all types of events services like Marriage Events, Corporate Events, birthday parties, kitty parties, Swastik events, etc</p>
                            <div className='footer-social-blk'>
                                <Link href="#"><Image src={footerfacebbok} alt="mishra catering facebbok"/></Link>
                                <Link href="#"><Image src={footerinstagram} alt="mishra catering instagram"/></Link>
                                <Link href="#"><Image src={footeryoutube} alt="mishra catering youtube"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-xl-3 col-lg-3 col-sm-12'>
                        <div className='footer-widget-two'>
                            <h4>SERVICES</h4>
                            <div className='footer-menu-blk'>
                                <ul>
                                    <li><Link href="#"><FaRegArrowAltCircleRight className='footer-menu-icn'/> Buffet Plan</Link></li>
                                    <li><Link href="#"><FaRegArrowAltCircleRight className='footer-menu-icn'/> Meal Plan</Link></li>
                                    <li><Link href="#"><FaRegArrowAltCircleRight className='footer-menu-icn'/> Corporate  plan</Link></li>
                                    <li><Link href="#"><FaRegArrowAltCircleRight className='footer-menu-icn'/> About Us</Link></li>
                                    <li><Link href="#"><FaRegArrowAltCircleRight className='footer-menu-icn'/> Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-xl-3 col-lg-3 col-sm-12'>
                        <div className='footer-widget-three'>
                            <h4>REACH US</h4>
                            <div className='footer-menu-blk'>
                                <ul>
                                    <li><Link href="tel:09337636010"><SlPhone className='footer-menu-icn'/> +91 9337636010</Link></li>
                                    <li><Link href="mailto:info@mishracatering.in"><TfiEmail  className='footer-menu-icn'/> info@mishracatering.in</Link></li>
                                    <li><Link href="mishracatering.in"><SiWebmoney className='footer-menu-icn'/> mishracatering.in</Link></li>
                                    <li><Link href="#"><FaMagnifyingGlassLocation className='footer-menu-icn ftr-location'/> Acharya vihar, Sainik School Rd, Bhubaneswar, Odisha 751013</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-xl-3 col-lg-3 col-sm-12'>
                        <div className='footer-widget-three'>
                            <h4>BOOK Now</h4>
                            <div className='footer-menu-blk'>
                                <h5 className='scan-book-cnt'>Scan to Book Your Event</h5>
                                <Image className="footerscan" src={scaner} alt="Mishra catering in Bhubaneswar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='ftr-btm-blk'>
                    <div className='ftr-btm-left'>
                        <Link href="#">Terms and Conditions</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Refund and cancellations</Link>
                    </div>
                    <div className='ftr-btm-right'>
                        <p>© 2025 Mishra Catering. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default FooterSection;