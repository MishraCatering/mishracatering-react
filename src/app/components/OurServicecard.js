'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";
import './ourservicecard.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import menucateringimg from '../../../public/images/catering-image.png';
import servcmenuicon from '../../../public/images/menu-icon.png';
import Image from "next/image";
import vegIconImage from "../../../public/images/veg.png";
import nonVedIconImage from "../../../public/images/non_veg.png";
import { baseURL } from "../lib/constants";
import OrderFormModal from './OrderFormModal';
import ToastNotification from './ToastNotification';

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurServicecard = ({ categories }) => {
    const [packages, setPackages] = useState([]);
    const [packageFoods, setPackageFoods] = useState([]);
    const [filteredPackages, setFilteredPackages] = useState([]);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [activePackage, setActivePackage] = useState(null);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [detailItem, setDetailItem] = useState(null);

    async function loadPackages() {
        const res = await fetch(`${baseURL}/packages/api/packages/`);
        const jsonData = await res.json();
        setPackages(jsonData);
        setFilteredPackages(jsonData);
    }

    async function loadPackageFoods(packageId) {
        setPackageFoods([]);
        setSelectedAddons([]); // Reset selected addons when loading new package
        const res = await fetch(`${baseURL}/packages/api/${packageId}/grouped-items/`);
        const jsonData = await res.json();
        setPackageFoods(jsonData);
    }

    const toggleAddon = (item) => {
        setSelectedAddons((prev) => {
            const isSelected = prev.find(addon => addon.id === item.id);
            if (isSelected) {
                return prev.filter(addon => addon.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    const calculateTotal = (basePrice) => {
        const addonsTotal = selectedAddons.reduce((sum, addon) => sum + parseFloat(addon.price || 0), 0);
        return parseFloat(basePrice || 0) + addonsTotal;
    };

    function filterPackages(category) {
        setFilteredPackages(packages.filter(item => item.category == category))
    }

    const handleBookOrderClick = (item) => {
        setActivePackage(item);
        setShowOrderModal(true);
    };

    const handleCheckDetailsClick = (item) => {
        setDetailItem(item);
        setShowDetailsModal(true);
        loadPackageFoods(item.id);
    };

    useEffect(() => {
        loadPackages();
    }, []);

    return (
        <>
            <div id="servc-card-block" className="servc-card-block">
                {categories.map((item, index) => (
                    <div id={`#${item.name}`} className="card-tab" key={index} onClick={() => filterPackages(item.id)}>
                        <Link href="">{item.name}</Link>
                    </div>
                ))}
            </div>

            <div className="servc-menu-card-blk position-relative">
                {/* Custom Navigation Buttons */}
                <div className="custom-swiper-nav-blk">
                    <button className="custom-swiper-prev btn btn-light rounded-circle shadow-sm">
                        <span>&lsaquo;</span>
                    </button>
                    <button className="custom-swiper-next btn btn-light rounded-circle shadow-sm">
                        <span>&rsaquo;</span>
                    </button>
                </div>

                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: '.custom-swiper-prev',
                        nextEl: '.custom-swiper-next',
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                    style={{ paddingBottom: '50px' }}
                >
                    {filteredPackages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="servc-menu-card">
                                <Image
                                    className="serv-menu-img"
                                    src={menucateringimg}
                                    alt="catering service"
                                />
                                <div className="servc-menu">
                                    <span className='fs-5 fw-semibold'>{item.name}</span>
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
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        onClick={() => handleCheckDetailsClick(item)}
                                    >
                                        Check Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Check Details Modal */}
            {showDetailsModal && detailItem && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{detailItem.name}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowDetailsModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                                {packageFoods.length === 0 && <p>Loading...</p>}

                                {packageFoods.map((category, idx) => {
                                    const regularItems = category.food_items.filter(food => !food.is_addon);
                                    if (regularItems.length === 0) return null;

                                    return (
                                        <div key={idx} className="mb-3">
                                            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{category.food_category_name}</p>
                                            {regularItems.map((food, i) => (
                                                <div key={i} className='d-flex align-items-center mb-1'>
                                                    <Image
                                                        src={food.food_type === 'veg' ? vegIconImage : nonVedIconImage}
                                                        alt={food.food_type}
                                                        height={20}
                                                        width={20}
                                                        className="me-2"
                                                    />
                                                    <span>{food.name} {food.quantity ? `(${food.quantity})` : ''}</span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}

                                {(() => {
                                    const allAddons = packageFoods.flatMap(cat => cat.food_items.filter(food => food.is_addon));
                                    if (allAddons.length === 0) return null;

                                    return (
                                        <div className="mt-4 pt-3 border-top">
                                            <h6 className="fw-bold mb-3">Customizations / Add-ons</h6>
                                            {allAddons.map((addon, i) => (
                                                <div key={i} className="form-check d-flex align-items-center mb-2">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        id={`addon-${addon.id}`}
                                                        checked={selectedAddons.some(a => a.id === addon.id)}
                                                        onChange={() => toggleAddon(addon)}
                                                    />
                                                    <label className="form-check-label d-flex justify-content-between w-100" htmlFor={`addon-${addon.id}`}>
                                                        <span>
                                                            <Image
                                                                src={addon.food_type === 'veg' ? vegIconImage : nonVedIconImage}
                                                                alt={addon.food_type}
                                                                height={18}
                                                                width={18}
                                                                className="me-2"
                                                            />
                                                            {addon.name}
                                                        </span>
                                                        <span className="text-muted small">+ ₹{addon.price}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setShowDetailsModal(false);
                                        handleBookOrderClick(detailItem);
                                    }}
                                >
                                    Book Order ₹{calculateTotal(detailItem.price)}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showOrderModal && activePackage && (
                <OrderFormModal
                    selectedPackage={activePackage}
                    selectedAddons={selectedAddons}
                    totalPrice={calculateTotal(activePackage.price)}
                    onClose={() => setShowOrderModal(false)}
                    onSuccess={() => setShowToast(true)}
                />
            )}

            <ToastNotification
                show={showToast}
                message="Order has been placed"
                onClose={() => setShowToast(false)}
            />
        </>
    );
};

export default OurServicecard;
