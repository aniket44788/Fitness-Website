import React from "react";
import profile from "../Images/profle.jpg";
function Content() {
  return (
    <>
      <div className="content">
        <div className="content-in">
          <div className="img">
            <img src={profile} alt="" className="img-img" />
          </div>
          <div className="content-in1">
            <div className="text-div">
              <h1> Hello </h1>
              <br />
              <br />
              <h4> Here's who I am & what I do </h4>
              <br />
              <br />
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
              <div className="text">
                <br />
                <br />
                <button class="btn-17">
                  <span class="text-container">
                    <span class="text">Button</span>
                  </span>
                </button>
                <button class="btn-17">
                  <span class="text-container">
                    <span class="text">Button</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
