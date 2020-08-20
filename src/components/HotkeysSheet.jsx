import React from "react";
import rightrock from "../images/rightrock.png";
import rightpaper from "../images/rightpaper.png";
import rightscissors from "../images/rightscissors.png";
import leftrock from "../images/leftrock.png";
import leftpaper from "../images/leftpaper.png";
import leftscissors from "../images/leftscissors.png";

const HotkeysSheet = () => {
  return (
    <div className="hotkeys-container">
      <div className="l-hotkeys" data-cy="l-hotkeys">
        <h3 className="secondary-text">Hotkeys</h3>
        <div>
          <img className="icon" src={leftrock} alt="rock icon" />
          <p className="key">1</p>
        </div>
        <div>
          <img className="icon" src={leftpaper} alt="paper icon" />
          <p className="key">2</p>
        </div>
        <div>
          <img className="icon" src={leftscissors} alt="scissors icon" />
          <p className="key">3</p>
        </div>
      </div>
      <div className="r-hotkeys" data-cy="r-hotkeys">
        <h3 className="secondary-text">Hotkeys</h3>
        <div>
          <p className="key">🡐</p>
          <img className="icon" src={rightrock} alt="rock icon" />
        </div>
        <div>
          <p className="key">🡑</p>
          <img className="icon" src={rightpaper} alt="paper icon" />
        </div>
        <div>
          <p className="key">🡒</p>
          <img className="icon" src={rightscissors} alt="scissors icon" />
        </div>
      </div>
    </div>
  );
};

export default HotkeysSheet;
