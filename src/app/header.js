import Image from "next/image";
import Link from "next/link";
import headerlogo from "../../public/images/Mishra-logo.png";
import { BsHandbag } from "react-icons/bs";

const HeaDer = () => (
  <>
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={headerlogo} alt="mishra catering" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Buffet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Meal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Corporate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="hdr-right-blk">
          <Link className="hdr-special-btn" href="#">Special Offer</Link>
          {/* Cart */}
          {/* <Image src={cartimg} /> */}
          <div className="cartbox"><BsHandbag /></div>
          </div>

        </div>
      </nav>
      
    </div>
  </>
);

export default HeaDer;
