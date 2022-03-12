import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contacts">
        <div className="contactLogo">
          <a href="https://twitter.com/saidyein">
            <FaTwitter />
          </a>
        </div>
        <div className="contactLogo">
          <a href="https://github.com/SaidYein">
            <FaGithub />
          </a>
        </div>
        <div className="contactLogo">
          <a href="">
            <FaInstagramSquare />
          </a>
        </div>
        <div className="contactLogo">
          <a href="https://www.linkedin.com/in/said-yein-263207b0/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footerLinksContainer">
        <div className="footerLinks">
          <h2> Sources </h2>
          <ul>
            <li>
              <a href="https://eonet.gsfc.nasa.gov"> EONET (NASA)</a>
            </li>
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
        </div>
        <div className="footerNews">
          <h2> Events & News </h2>
          <ul>
            <li>
              <a href="https://2016.spaceappschallenge.org/about">
                Space Apps Challenge
              </a>
            </li>
            <li>
              <a href="https://www.euronews.com/tag/natural-disaster">
                EuroNews - Natural Disasters
              </a>
            </li>
            <li>
              <a href="https://www.sciencedaily.com/news/earth_climate/natural_disasters/">
                Science Daily - Natural Events
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights">
        Created by SaidYein --- 2022 --- All rights reserved <span>&#169;</span>
      </div>
    </div>
  );
};

export default Footer;
