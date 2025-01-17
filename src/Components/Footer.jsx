import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import eDex from "../assets/eDex.png";


function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer1">
          <img src={eDex} className="nulls" />
          <h1 className="fone">Contact Us</h1>
          <p className="call">Call : +123 400 123</p>
          <p className="null">
            Praesent nulla massa, hendrerit<br></br>
            vestibulum gravida in, feugiat auctor felis.
          </p>
          <p className="email">Email: example@mail.com</p>
          <div className='social'>
          <FaFacebookF className="face" />
          <FaDribbble className="drib" />
          <FaLinkedinIn className="link" />
          <FaInstagram className="insta" />
          <FaBehance className="behance" />
        </div>
        </div>
       
        <div className="footer2">
          <h1 className="explores">Explore</h1>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>

        <div className="footer3">
          <h1 className="categories">Category</h1>
          <li>Design</li>
          <li>Development</li>
          <li>Marketing</li>
          <li>Business</li>
          <li>Lifestyle</li>
          <li>Photography</li>
          <li>Music</li>
        </div>
       
       
        <div className="footer4">
          <h1 className="here">Subscribe</h1>
          <p className="heres">
            Lorem Ipsum has been them an industry <br></br>
            printer took a galley make book.
          </p>

          <input type="text" placeholder="Email here" />
          <button className="heres1">Subscribe Now</button>
        </div>
      </div>
    </>
  )
}

export default Footer