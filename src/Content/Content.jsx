import React from "react";
import profile from "../Images/profle.jpg"
function Content() {
  return (
    <>
      <div className="content">
          <div className="content-in">
            <div className="img">
              <img src={profile} alt=""className="img-img"/>
            </div>
            <div className="content-in1"></div>
          </div>
      </div>
    </>
  );
}

export default Content;
