import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css";
const Footer = () => {
 return (
  <div className="footer-image">
      <div className="footer-container">
        <div className="container">
          <div className="">
            <div className="right-footer-container">
              <br />
              <div className="d-flex align-items-center justify-content-center">
                <div className=" w-50 m-3 text-center footer-us">
                  <p className="m-0 footer-us">KEEP IN TOUCH</p>
                  <h1>
                    <strong>Travel with Us</strong>
                  </h1>
                </div>

                <div className="d-flex m-3 w-50 m-3">
                  <input
                    type="text"
                    className="p-2 m-2 form-control"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <button type="button" className=" m-2 btn btn-primary p-2">
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5 bg-light p-4">
            <div className="col-md-6">
              <div className="left-container text-start">
                <h1>
                  <strong style={{ color: "green" }}>Trendy Travel</strong>
                </h1>

                <p className="">
                  <small>
                    227 Marion street New York USA. Street, 4916 Pinewood Drive.
                    City, Park Ridge. State/Province abbr, IL. State/Province
                    full, Illinois. Zip Code/Postal code, 60068.
                  </small>
                </p>
                <Link className="footer-link">trendytravel.net</Link>
                <br />
                <Link className="footer-link">trendytravel@mail.com</Link>
                <div className="icons-container d-flex text-center ">
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                </div>
                <p className="mt-2">
                  <small>Colac © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu-container">
                <ul>
                  <h5 className="footer-menu">
                    <strong>PARTNERS</strong>
                    <br />
                    <br />
                  </h5>
                  <Link className="footer-link">
                    <li className="footer-menu">Booking Tours</li>
                  </Link>
                  <hr className="line" />
                  <li className="footer-menu">Rental Hotels</li>
                  <hr className="line" />
                  <li className="footer-menu">Hostel World</li>
                  <hr className="line" />
                  <li className="footer-menu">Trivago New</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu-container">
                <ul>
                  <h5 className="footer-menu">
                    <strong>World Tour</strong>
                  </h5>
                  <br />
                  <Link className="footer-link">
                    <li className="footer-menu">Machu Picchu London</li>
                  </Link>
                  <hr className="line" />
                  <li className="footer-menu"> National Park, Canada</li>
                  <hr className="line" />
                  <li className="footer-menu"> Pitons, St Lucia</li>
                  <hr className="line" />
                  <li className="footer-menu"> Pamukkale, Turkey</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 )
}

export default Footer
