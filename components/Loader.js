import React from "react";
const Loader = () => {
  return (
    <div className="items-center flex justify-center h-screen">
      <div className="spinnerContainer">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">users</span>
            <span className="word">blogs</span>
            <span className="word">data</span>
            <span className="word">curiosity</span>
            <span className="word">articles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
