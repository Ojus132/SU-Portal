/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import path1 from "../../assets/home/hero/path1.svg";
import heroImg from "../../assets/home/hero/heroImg.svg";
<<<<<<< HEAD
import Campus_Events from "../../components/Home/Campus_Events";
import WelcomeOnBoard from "../../components/Home/WelcomeOnBoard";
import SU_Initiatives from "../../components/Home/SU_Initiatives";
=======
import CampusEvents from "../../components/Home/CampusEvents";
import SUInitiatives from "../../components/Home/SUInitiatives";
>>>>>>> d3e3d7be781d65bc69cb3379fc4015e45418e435
import "./Home.css";

function Home() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={path1} alt="path1" style={{ width: "100%" }} />
        <img
          src={heroImg}
          alt=" heroimg"
          style={{ position: "absolute", top: 4, right: 60, width: "50vw" }}
        />

        <div style={{ position: "absolute" }}>
          <img src="" alt="" />
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Campus News */}

      <h5 style={{ marginTop: "8vh", marginBottom: "-1vh", textAlign: "center" }}><b>Campus News :</b> Lorem ipsum dolor sit | Lorem ipsum dolor sit | Lorem ipsum dolor sit | Lorem ipsum dolor sit</h5>

      {/* Welcome On Board */}

      <div>
          <WelcomeOnBoard />
      </div>

      {/* Campus Events */}

      <div>
        <p className="header">Campus Events</p>
        <div className="container">
<<<<<<< HEAD
          <Campus_Events title="Campus Event Headline" width="25vw" date="21" month="Dec" />
          <Campus_Events title="Campus Event Headline" width="30vw" date="18" month="Sept" />
          <Campus_Events title="Campus Event Headline" width="30vw" date="25" month="August" />
          <Campus_Events title="Campus Event Headline" width="25vw" date="01" month="Sept" />
=======
          <CampusEvents title="Campus Event Headline" width="350px" date="21" month="Dec"/>
          <CampusEvents title="Campus Event Headline" width="400px" date="18" month="Sept"/>
          <CampusEvents title="Campus Event Headline" width="400px" date="25" month="August"/>
          <CampusEvents title="Campus Event Headline" width="350px" date="01" month="Sept"/>
>>>>>>> d3e3d7be781d65bc69cb3379fc4015e45418e435
          <a href="#" className="more">
            <i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Welcome Freshers */}

      <div>
        <p className="header">Welcome Freshers</p>
        <div className="container">

        </div>
      </div>

      {/* SU Initiaves */}

      <div>
        <p className="header">SU Initiatives</p>
        <div className="container" style={{width: "100vw"}}>
          <SUInitiatives />
          <SUInitiatives />
          <SUInitiatives />
          <a href="#" className="more" style={{right: "5vw"}}>
            <i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Know Your SUC */}

      <div>
        <p className="header">Know Your SUC</p>
        <div className="container">
        </div>
      </div>

      {/* Built By */}

      <div>
        <p className="header">Built By</p>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p>SUC LOGO</p>
          <button className="contri-btn">Contributors</button>
        </div>
      </div>
    </div>
  );
}

export default Home;