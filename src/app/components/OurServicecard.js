'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";
import './ourservicecard.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import menucateringimg from '../../../public/images/catering-image.png';
import servcmenuicon from '../../../public/images/menu-icon.png';
import Image from "next/image";
import { baseURL } from "../lib/constants";

const OurServicecard = ({ categories }) => {
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState([]);

    async function loadPackages() {
        const res = await fetch(`${baseURL}/packages/api/packages/`);
        const jsonData = await res.json();
        setPackages(jsonData);
        setSelectedPackage(jsonData);
    }

    function filterPackages(category) {
        setSelectedPackage(packages.filter(item => item.category == category))
    }

    useEffect(() => {
        loadPackages();
    }, []);

    return (
        <>
            <div id="servc-card-block" className="servc-card-block">
                {categories.map((item, index) => (
                    <div id={`#${item.name}`} className="card-tab" key={index} onClick={()=>filterPackages(item.id)}>
                        <Link href="">{item.name}</Link>
                    </div>
                ))}
            </div>

            <div className="servc-menu-card-blk">
                {selectedPackage.map((item, index) => {
                    const modalId = `exampleModal-${index}`; // unique ID

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
                                        {item.line_1 && <li><FaLongArrowAltRight /> {item.line_1}</li>}
                                        {item.line_2 && <li><FaLongArrowAltRight /> {item.line_2}</li>}
                                        {item.line_3 && <li><FaLongArrowAltRight /> {item.line_3}</li>}
                                    </ul>
                                </div>
                            </div>

                            <div className="servc-menu-cta">
                                {/* Button with unique modal target */}
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#${modalId}`}
                                >
                                    Check Details
                                </button>

                                {/* Modal */}
                                <div
                                    className="modal fade"
                                    id={modalId}
                                    tabIndex="-1"
                                    aria-labelledby={`${modalId}-label`}
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id={`${modalId}-label`}>
                                                    {item.name}
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                {/* <p><strong>Package Size:</strong> {item.size_description}</p>
                                                <ul>
                                                    {item.line_1 && <li>{item.line_1}</li>}
                                                    {item.line_2 && <li>{item.line_2}</li>}
                                                    {item.line_3 && <li>{item.line_3}</li>}
                                                </ul> */}
                                                <h5>CALL API HERE TO SHOW PACKAGE ITEM DETAILS</h5>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancel Order
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    Book Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Image
                                className="serv-menu-img"
                                src={menucateringimg}
                                alt="catering service"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default OurServicecard;
