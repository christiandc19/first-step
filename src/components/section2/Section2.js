import React from "react";
import "./Section2.css";

import wrapper1 from "../../assets/wrapper1-min.webp";

const Section2 = () => {
  return (
    <>
      <div className="section2  ">
        <div className="section2-content container">

          <div className="section2-flex">

          <div className="section2-content-left">
            <img src={wrapper1} alt="Smiling man" loading="lazy" />
          </div>

          <div className="section2-content-right">
            
            <h1>WHAT WE DO</h1> <br />
            <p>
            Recovery isn't just about changing the way you see yourself - It's also about changing the way you see the world. Our team is here to help you realize your full potential with a unique combination of programs and services designed to create a deep impact and long-lasting recovery.  <br />
              <br /> Come work towards long-lasting change in your life that far outlasts the time you spend healing at our facilities and eventually, you will find that the work you put in extends beyond just yourself to your family, your loved ones, and your community.
            </p>
          </div>
        </div>
        </div>


      </div>
    </>
  );
};

export default Section2;
