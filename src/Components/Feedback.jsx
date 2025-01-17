import React from "react";
import "./Feedback.css";
import { SiComma } from "react-icons/si";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import handsome from "../assets/handsome.png";
import beautiful from "../assets/beautiful.png";
import vector1 from "../assets/vector1.png";

function Feedback() {
  return (
    <div className="sixth">
      <div className="secondary">
        <div className="secondary1">
          <h1>
            Student <span className="spans">Feedback</span>{" "}
          </h1>
          <img src={vector1} className="feed" />
          <p>
            Various versions have evolved over the years, sometimes by accident,
          </p>
        </div>

        <div className="secondarys">
          <div className="secondary2">
            <div className="head">
              <img src={beautiful} className="head1" />
              <div className="event">
                <p>
                  Jenny Wilson <br></br>
                  <span className="event1"> UI-UX Designer</span>
                </p>
              </div>
            </div>
            <div className="comma">
              <SiComma />
              <SiComma />
            </div>
            <div className="context">
              <h2 className="designer">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. <br></br>
                Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                Praesent
                <br></br>
                nulla massa, hendrerit vestibulum gravida in, feugiat auctor
                felis.
              </h2>
            </div>
          </div>

          <div className="secondary3">
            <div className="heads">
              <img src={handsome} className="heads1" />
              <div className="risk">
                <p>
                  Guy Hawkins<br></br>
                  <span className="risk1">UI-UX Designer</span>
                </p>
              </div>
            </div>
            <div className="comma">
              <SiComma />
              <SiComma />
            </div>
            <div className="context1">
              <h2 className="designers">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. <br></br>
                Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                Praesent
                <br></br>
                nulla massa hendrerit vestibulum gravida in, feugiat auctor
                felis.
              </h2>

              
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body1"> </div>
        <div className="body2"> </div>
        <div className="body3"> </div>
        <div className="body4"> </div>
        <div className="body5"> </div>
      </div>
      <div className="writes">
        <GoChevronLeft className="writes1" />
        <GoChevronRight className="writes2" />
      </div>
    </div>
  );
}

export default Feedback;
