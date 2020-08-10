import React from 'react'
import rightrock from "../images/rightrock.png";
import rightpaper from "../images/rightpaper.png";
import rightscissors from "../images/rightscissors.png";
import leftrock from "../images/leftrock.png";
import leftpaper from "../images/leftpaper.png";
import leftscissors from "../images/leftscissors.png";

const HotkeysSheet = () => {
  return (
    <div className="hotkeysContainer">
      <div className="leftHotkeys">
        <h5 className="secondaryText">
          Hotkeys
        </h5>
        <div>
        <img className="icon" src={leftrock} alt="icon"/>
          <p className="key">1</p>
        </div>
        <div>
          <img className="icon" src={leftpaper} alt="icon"/>
          <p className="key">2</p>
        </div>
        <div>
          <img className="icon" src={leftscissors} alt="icon"/>
          <p className="key">3</p>
        </div>
      </div>
      <div className="rightHotkeys">
        <h5 className="secondaryText">
          Hotkeys
        </h5>
        <div>
          <p className="key">🡐</p>
          <img className="icon" src={rightrock} alt="icon" />
        </div>
        <div>
          <p className="key">🡑</p>
          <img className="icon" src={rightpaper} alt="icon"/>
        </div>
        <div>
          <p className="key">🡒</p>
          <img className="icon" src={rightscissors} alt="icon"/>
        </div>
      </div>
    </div>
  )
}

export default HotkeysSheet