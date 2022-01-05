import React from "react";
import { useState } from "react";
import image from "./images/clubimage.png";
import "./clubname.css";
import { dota } from "./data";
export default function Clubname() {
  const [subscribe, setSubscribe] = useState(false);
  {
    var display2 = subscribe ? "block" : "none";
  }
  {
    var display1 = subscribe ? "none" : "block";
  }
  const subscribefun = () => {
    setSubscribe(true);
  };
  const notsubscribefun = () => {
    setSubscribe(false);
  };
  return (
    <>
      <div>
        <img src={image} alt="" srcset="" className="image" />
      </div>
      <div>
        <img src={dota.Name.logo} alt="" srcset="" className="clublogo" />
      </div>
      <div className="clubname" style={{ display: "flex" }}>
        <div>{dota.Name.name}</div>
        <i
          class="fa fa-bell-o"
          aria-hidden="true"
          style={{
            fontSize: "3vw",
            marginLeft: "30px",
            display: `${display1}`,
            cursor: "pointer",
          }}
          onClick={subscribefun}
        ></i>
        <i
          class="fa fa-bell"
          aria-hidden="true"
          style={{
            fontSize: "3vw",
            marginLeft: "30px",
            display: `${display2}`,

            cursor: "pointer",
          }}
          onClick={notsubscribefun}
        ></i>
      </div>

      <div className="club_aboutus">
        <h5>{dota.Name.aboutHeading}</h5>
        <p>{dota.Name.aboutPara}</p>
      </div>
    </>
  );
}
