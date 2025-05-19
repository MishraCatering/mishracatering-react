import './homecomponent.css';
import brdimg from '../../../public/images/icon.png';
import Image from 'next/image';
import OurServicecard from './OurServicecard';
import profcaterbanner from '../../../public/images/catering-image-2.png'
import CustomCardslider from './CustomCardslider';
import EventCategory from './EventCategory';
import WhyUs from './WhyUs';
import MandapExp from './MandapExp';
import RefferOffer from './RefferOffer';
// import ServiceCategory from './ServiceCategory';
const HomeComponent = () =>{
    return (
        <>
        <div className='home-services'>
            <div className='container'>
                <div className='home-service-cnt'>
                    <h4>Our Services</h4>
                    <h2>Delicious food menu for Satisfaction</h2>
                    <p>Welcome to Mishra Catering. We serve Breakfast, Lunch, Brunch and Dinner with our  different types of customised services. Reservations are accepted for all size parties.</p>
                </div>
                <div className='hm-serv-btm-brd'>
                    <div className='brd'></div>
                    <div className='brd-img-blk'><Image className="brd-icon" src={brdimg} alt="border image" /></div>
                    <div className='brd'></div>
                </div>
                <OurServicecard/>
            </div>
        </div>
        <div className='prof-catering-banner-blk'>
         <div className='container'>
            <Image className="profcateringimg" src={profcaterbanner} alt="professional catering service in bbsr" />
         </div>
        </div>

        <div className='custo-pkg-blk'>
            <div className='container'>
                <div className='custom-pkg-heading-blk'>
                    <h2>Customise Your Package</h2>
                    <h3>Crafted with Care, Styled by You</h3>
                    <p>Events That Reflect You – Unique, Elegant, and Yours</p>
                </div>
                <div className='hm-serv-btm-brd'>
                    <div className='brd'></div>
                    <div className='brd-img-blk'><Image className="brd-icon" src={brdimg} alt="border image" /></div>
                    <div className='brd'></div>
                </div>
            </div>
            <div className='container'>
                <CustomCardslider/>
            </div>
        </div>

        <div className='Service-category-main'> 
            <EventCategory/>
        </div>
        <div className='why-us-main'>
            <WhyUs/>
        </div>

        <div className='mandap-exp-blk'>
            <MandapExp/>
        </div>

        <div className='reference-blk'>
            <RefferOffer/>
        </div>
        </>
    )
}
export default HomeComponent;

