
import React from "react";
import "./Best.css";
import vector1 from "../assets/vector1.png";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import rec from "../assets/rec.png";
import recs from "../assets/recs.png";
import recs1 from "../assets/recs1.png";
import recs2 from "../assets/recs2.png";

function Best() {
  const arrays = [
    {
      id: 1,
      title: "Jacob Jones",
      img: rec,
      parah: "UI-UX Design Expert",
    },
    {
      id: 2,
      title: "Nacob Jones",
      img: recs,
      parah: "Social Media Expert",
    },
    {
      id: 3,
      title: "Kelvin Jones",
      img: recs1,
      parah: "Business Idea Expert",
    },
    {
      id: 4,
      title: "Jonas Jones",
      img: recs2,
      parah: "Photography Expert",
    },
  ];

  return (
    <div className="fourth">
      <div className="four">
        <h1>
          Our Best <span className="version">Instructor</span>
        </h1>
        <img src={vector1} className="yellow" alt="vector decoration" />
        <p>
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>

      <div className="expert">
        {arrays?.map((item) => (
          <div key={item.id} className="experts">
            <img src={item.img} className="expert1" alt={item.title} />
            <div className="expert2">
              <div className="expert3">{item.title}</div>
              <div className="expert4">{item.parah}</div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="navigation-controls">
        <div className="ellips">
          <div className="ellips1"></div>
          <div className="ellips2"></div>
          <div className="ellips3"></div>
          <div className="ellips4"></div>
          <div className="ellips5"></div>
        </div>

        <div className="rights">
          <GoChevronLeft className="rights1" />
          <GoChevronRight className="rights2" />
        </div>
      </div>
    </div>
  );
}

export default Best;
