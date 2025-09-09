'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";
import './ourservicecard.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import menucateringimg from '../../../public/images/catering-image.png';
import servcmenuicon from '../../../public/images/menu-icon.png';
import Image from "next/image";
import { TfiMenuAlt } from "react-icons/tfi";
import { baseURL } from "../lib/constants";

const OurServicecard = ({ categories }) => {
    const [packages, setpackages] = useState([]);

    async function loadPackages() {
        const res = await fetch(`${baseURL}/packages/api/packages/`)
            .then(response => response.json())
            .then((jsonData) => {
                setpackages(jsonData)
            })
    }

    useEffect(() => {
        loadPackages()
    }, [])
    return (
        <>
            <div className="servc-card-block">
                {categories.map((item, index) => {
                    return (
                        <div className="card-tab" key={index}>
                            <Link href="">{item.name}</Link>
                        </div>
                    )
                })}
            </div>
            <div className="servc-menu-card-blk">
                {packages.map((item, index) => {
                    return (
                        <div className="servc-menu-card" key={index}>
                            <div className="servc-menu">
                                <h4>{item.name}</h4>
                                <div className="servc-menu-iconwth-tlt">
                                    <Image src={servcmenuicon} alt="menu-icon" />
                                    <p>{item.size_description}</p>
                                </div>
                                <div className="servc-menu-iconwth-list">
                                    <ul>
                                        <li><FaLongArrowAltRight /> {item.line_1}</li>
                                        <li><FaLongArrowAltRight /> {item.line_2}</li>
                                        <li><FaLongArrowAltRight /> {item.line_3}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="servc-menu-cta">
                                <Link href="#">See Packages <TfiMenuAlt /> </Link>
                            </div>

                            <Image className="serv-menu-img" src={menucateringimg} alt="catering service" />

                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default OurServicecard