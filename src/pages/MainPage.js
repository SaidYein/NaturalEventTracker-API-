import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { scroller } from "react-scroll";
import { RiArrowDownSLine } from "react-icons/ri";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="mainPage">
        <h2>Welcome to Natural Event Tracker!</h2>
        <div className="mainPageInfo">
          {" "}
          <p>
            This application is powered by EONET(Earth Observatory Natural Event
            Tracker). EONET is a repository of metadata about natural events.
            Development of EONET began in 2015 and has been supported by the
            following:{" "}
            <ul>
              <li>
                <a href="https://earthdata.nasa.gov">
                  Earth Science Data Systems
                </a>
              </li>
              <li>
                <a href="https://earthobservatory.nasa.gov">
                  NASA Earth Observatory
                </a>
              </li>
            </ul>
            More and more NASA imagery is being made available via web services
            (WMS, WMTS, etc.) and a significant percentage produced and
            published in near real-time (NRT = within a few hours after the
            acquisition). This ability means that NASA imagery can be used more
            routinely to examine current natural events as they happen.
          </p>
          <p>
            In this app, you will be able to track Wildfires, Severe Storms,
            Volcanic activities and Ice formations. You can select desired event
            name from the list on the Natural Events Page to monitor the event
            locations and information related.
          </p>
        </div>
        <button className="eventPageButton">
          <Link to="/events"> Click Here to See Natural Events Map </Link>
        </button>
        <button
          className="footerButton"
          onClick={() => {
            scroller.scrollTo("mainPageFooter", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
          }}
        >
          <span>About Us</span>
          <RiArrowDownSLine />
        </button>
      </div>

      <div className="mainPageFooter">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
