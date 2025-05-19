import Link from "next/link";
import './ourservicecard.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import menucateringimg from '../../../public/images/catering-image.png';
import servcmenuicon from '../../../public/images/menu-icon.png';
import Image from "next/image";
import { TfiMenuAlt } from "react-icons/tfi";

const OurServicecard = () =>{
    return(
        <>
        <div className="servc-card-block">
            <div className="card-tab"><Link href="">All</Link></div>
            <div className="card-tab"><Link href="">Delivery Only</Link></div>
            <div className="card-tab"><Link href="">Delivery+Setup</Link></div>
            <div className="card-tab"><Link href="">Live Services</Link></div>
            <div className="card-tab"><Link href="">Others</Link></div>
        </div>
        <div className="servc-menu-card-blk">
            <div className="servc-menu-card">
                <div className="servc-menu">
                    <h4>Mishra Box Plan</h4>
                    <div className="servc-menu-iconwth-tlt">
                        <Image src={servcmenuicon} alt="menu-icon" />
                        <p>Ideal for 10-25 Guest</p>
                    </div>
                    <div className="servc-menu-iconwth-list">
                        <ul>
                            <li><FaLongArrowAltRight /> No Mess in Kitchen</li>
                            <li><FaLongArrowAltRight /> No Cleaning Required</li>
                            <li><FaLongArrowAltRight /> Includes Displosals</li>
                        </ul>
                    </div>
                </div>
                
                <div className="servc-menu-cta">
                    <Link href="#">See Packages <TfiMenuAlt /> </Link>
                </div>
                
                    <Image className="serv-menu-img" src={menucateringimg} alt="catering service" />
                
            </div>
            <div className="servc-menu-card">
            <div className="servc-menu">
                    <h4>Mishra Box Plan</h4>
                    <div className="servc-menu-iconwth-tlt">
                        <Image src={servcmenuicon} alt="menu-icon" />
                        <p>Ideal for 10-25 Guest</p>
                    </div>
                    <div className="servc-menu-iconwth-list">
                        <ul>
                            <li><FaLongArrowAltRight /> No Mess in Kitchen</li>
                            <li><FaLongArrowAltRight /> No Cleaning Required</li>
                            <li><FaLongArrowAltRight /> Includes Displosals</li>
                        </ul>
                    </div>
                </div>
                
                <div className="servc-menu-cta">
                    <Link href="#">See Packages <TfiMenuAlt /> </Link>
                </div>
                <div className="servc-menu-img">
                    <Image className="serv-menu-img" src={menucateringimg} alt="catering service" />
                </div>
            </div>
            <div className="servc-menu-card">
            <div className="servc-menu">
                    <h4>Mishra Box Plan</h4>
                    <div className="servc-menu-iconwth-tlt">
                        <Image src={servcmenuicon} alt="menu-icon" />
                        <p>Ideal for 10-25 Guest</p>
                    </div>
                    <div className="servc-menu-iconwth-list">
                        <ul>
                            <li><FaLongArrowAltRight /> No Mess in Kitchen</li>
                            <li><FaLongArrowAltRight /> No Cleaning Required</li>
                            <li><FaLongArrowAltRight /> Includes Displosals</li>
                        </ul>
                    </div>
                </div>
                
                <div className="servc-menu-cta">
                    <Link href="#">See Packages <TfiMenuAlt /> </Link>
                </div>
                <div className="servc-menu-img">
                    <Image className="serv-menu-img" src={menucateringimg} alt="catering service" />
                </div>
            </div>
        </div>
        </>
    )
}
export default OurServicecard