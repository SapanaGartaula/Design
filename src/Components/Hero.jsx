import React from "react";
import "./Hero.css";
import Sparkle from "../assets/Sparkle.png";
import Frame12 from "../assets/Frame12.png";
import Frame18 from "../assets/Frame18.png";
import { FaRegStar } from "react-icons/fa";
import vector from "../assets/vector.png";
import vector1 from "../assets/vector1.png";
import { PiStarFourFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
function Hero() {
  return (
    <>
      <div className="wrapper">
        <div className="home">
          <img src={Sparkle} className="img10" />
          <PiStarFourFill className="stars" />
          <h2>START TO SUCCESS</h2>
          <p>
            Access To <span className="span1">5000+ </span> <img src={vector1} className="access"/>Courses<br></br>
            from <span className="span2">300</span> <img src={vector1} className="access1"/> Instructors<br></br>&
            Institutions
          </p>
          <p className="name2">
            Various versions hae evolved over the years, sometimes by accident,
          </p>
          <input type="text" placeholder="What do want to learn?"></input>{" "}
          <CiSearch className="place" />
          <div className="ellipse1"></div>
        </div>

        <div className="next">
          <img src={Frame12} className="frame1" />
          <img src={Frame18} className="frame2" />
           <button className="course">
            <FaRegStar className="star" /> 5.0 Rating
          </button>
          <img src={vector} className="vec" /> 
         
          <div className="ellipse"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
