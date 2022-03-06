import { RiTornadoLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {window.location.href.indexOf("events") !== -1 ? (
        <button className="backButton">
          <Link to="/NaturalEventTracker-API-"> Back </Link>{" "}
        </button>
      ) : (
        ""
      )}
      <h1>
        <RiTornadoLine className="headerIcon" />
        Natural Event Tracker <span>(Powered by NASA)</span>
      </h1>
    </header>
  );
};

export default Header;
