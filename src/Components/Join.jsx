import React from 'react';
import './Join.css';
import template from "../assets/template.png";
function Join() {
  return (
    <>
      <div className="guide">
        <div className="guide1">
          <img src={template} className="hour" />
        </div>
        <div className="guide2">
          <h1>
            Join <span className="follow">World's largest</span> learning
            <br></br>
            platform today
          </h1>
          <p>Start learning by registering for free</p>
          <button className="guides">Signup for Free</button>
        </div>
      </div>
    </>
  )
}

export default Join;
