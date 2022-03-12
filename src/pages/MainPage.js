import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { RiArrowDownSLine } from "react-icons/ri";
import { FetchContext } from "../components/context/FetchContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainInfo from "../components/MainInfo";
import Stats from "../components/Stats";
import Loader from "../components/Loader";

const MainPage = () => {
  useEffect(() => {
    fetchEvents();
  }, []);

  const { loading } = useContext(FetchContext);
  const { fetchEvents } = useContext(FetchContext);

  return (
    <>
      <Header />
      <div className="mainPage">
        <h2>Welcome to Natural Event Tracker!</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="mainInfo">
            <Stats />
            <div className="middle"></div>
            <MainInfo />
          </div>
        )}
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
