import React from "react";
import "./Category.css";
import Lightbulb from "../assets/Lightbulb.png";
import Heartbeat from "../assets/Heartbeat.png";
import FileHtml from "../assets/FileHtml.png";
import Camera from "../assets/Camera.png";
import Graph from "../assets/Graph.png";
import Briefcase from "../assets/Briefcase.png";
import Database from "../assets/Database.png";
import Detective from "../assets/Detective.png";
import MicrophoneStage from "../assets/MicrophoneStage.png";
import SunHorizon from "../assets/SunHorizon.png";
import MusicNote from "../assets/MusicNote.png";
import PenNib from "../assets/PenNib.png";
import { GoArrowUpRight } from "react-icons/go";
import vector1 from "../assets/vector1.png";

function Category() {
  const icons = [
    { img: PenNib, title: "Design" },
    { img: FileHtml, title: "Development" },
    { img: MicrophoneStage, title: "Marketing" },
    { img: Briefcase, title: "Business" },
    { img: SunHorizon, title: "Lifestyles" },
    { img: Camera, title: "Photography" },
    { img: MusicNote, title: "Music" },
    { img: Database, title: "Data science" },
    { img: Lightbulb, title: "Personal develop" },
    { img: Heartbeat, title: "Health and fitness" },
    { img: Graph, title: "Finance" },
    { img: Detective, title: "Teaching" },
  ];
  return (
    <>
      <div className="third">
        <div className="third1">
          <img src={vector1} className="photo" />
          <h1>
            Most <span className="over">Popular Categorys</span>
          </h1>

          <p>
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>

        <div className="flexWrap">
          {icons?.map((item, index) => (
            <div key={index} className="flex">
              <div className="flexw">
                <img src={item?.img} alt="" className="images" />
                <p className="title">{item?.title}</p>
              </div>
              <GoArrowUpRight className="button2" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
