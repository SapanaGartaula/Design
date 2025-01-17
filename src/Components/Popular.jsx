import React from "react";
import vector1 from "../assets/vector1.png";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import mans from "../assets/mans.png";
import womens from "../assets/womens.png";
import mans1 from "../assets/mans1.png";
import Slider from "react-slick";
import "./Popular.css";

function Popular() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            dots: true,
            arrows: true,
            centerMode: true,
            centerPadding: '0px'
          }
        }
    ],
  };
  const array = [
    {
      id: 1,
      title: "Various versions have evolve...",
      img: mans,
      price: "$500",
      rating: "",
      parah: "(15)",
      arrow: <FaArrowUpLong />,
      button: "HTML",
    },
    {
      id: 2,
      title: "Various versions have evolve...",
      img: womens,
      price: "$500",
      rating: "",
      parah: "(20)",
      arrow: <FaArrowUpLong />,
      button: "Design",
    },
    {
      id: 3,
      title: "Various versions have evolve...",
      img: mans1,
      price: "$500",
      rating: "",
      parah: "(120)",
      arrow: <FaArrowUpLong />,
      button: "Business",
    },
    {
      id: 3,
      title: "Various versions have evolve...",
      img: mans,
      price: "$500",
      rating: "",
      parah: "(120)",
      arrow: <FaArrowUpLong />,
      button: "HTML",
    },
    {
      id: 3,
      title: "Various versions have evolve...",
      img: womens,
      price: "$500",
      rating: "",
      parah: "(120)",
      arrow: <FaArrowUpLong />,
      button: "Design",
    },
    {
      id: 3,
      title: "Various versions have evolve...",
      img: mans1,
      price: "$500",
      rating: "",
      parah: "(120)",
      arrow: <FaArrowUpLong />,
      button: "Business",
    },
  ];
  return (
    <>
      <div className="second">
        <div className="seconds">
          <div className="second1">
            <h1 className="heading">
              Most <br></br>
              <span className="heading1">Popular</span> <br></br>
              <span className="heading2">Course</span>{" "}
            </h1>
            <img src={vector1} className="heading3" />
          </div>
          <div className="array">
            <Slider {...settings}>
              {array?.map((item, index) => (
                <div key={index} className="arraywrap">
                  <img src={item?.img} alt="" className="img1" />
                  <div className="array1">
                    <div className="arrays">{item?.title}</div>
                    <div className="lefting">
                      <div className="arrays2">
                        {item?.rating}
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                      </div>

                      <div className="arrays4">{item?.parah}</div>
                    </div>
                    <div className="arrays3">
                      <div className="floating">
                        <div className="price">{item?.price}</div>
                        <div className="arrays5">
                          <p>{item?.arrow}</p>
                        </div>
                      </div>
                      <div className="arrays6"> {item?.button}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
