import React from "react";
import "./Achievement.css";
import graduate from "../assets/graduate.png";
import cap from "../assets/cap.png";
import Videos from "../assets/Videos.png";
import users from "../assets/users.png";
import { PiStarFourBold } from "react-icons/pi";
import vector1 from "../assets/vector1.png";
import girl from "../assets/girl.png";

function Achievement() {
  const achieve = [
    {
      id: 1,
      title: "300",
      parah: "Instructor",
      img: graduate,
    },
    {
      id: 2,
      title: "10,000+",
      parah: "Student",
      img: Videos,
    },

    {
      id: 3,
      title: "20,000+",
      parah: "Student",
      img: cap,
    },

    {
      id: 4,
      title: "1,00,000+",
      parah: "User's",
      img: users,
    },
  ];
  return (
    <>
      <div className="fifth">
          <h1>
            {" "}
            Our <span className="five1">Achievement</span>
          </h1>
          <img src={vector1} className="five2" />
          <p>
          Various versions have evolved over the years, sometimes by accident,
          </p>
        <div className="primary">
          <div className="desks">
            {achieve?.map((item, index) => (
              <div key={index} className="desk">
                <img src={item?.img} className="fifth1" />
                <div className="five3">
                  <div className="para">{item.title}</div>
                  <div className="para1">{item.parah}</div>
                </div>
              </div>
            ))}
          </div>
         
          
          <div className="desks1">
              <img src={girl} className="girls" />
            <div className="comment">
              <div className="comment1"></div>
              <div className="comment2"></div>
              <div className="comment3"></div>
              <PiStarFourBold className="comment4" />
            </div>
          </div>
          </div>
          
          
        
      </div>

    </>
  );
}

export default Achievement;
