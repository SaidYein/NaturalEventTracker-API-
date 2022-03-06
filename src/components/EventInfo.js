const EventInfo = ({ data }) => {
  const { locationInfo, isVisible, setIsVisible } = data;
  return (
    isVisible && (
      <div
        className="infoContainer"
        style={{
          position: "absolute",
          left: locationInfo.x + "px",
          top: locationInfo.y + "px",
        }}
      >
        <h2> {locationInfo.title} </h2>
        <div className="eventInfo">
          <p>{locationInfo.date.replace("T", " - ").replace("Z", "")}</p>
          <p>Longitude: {locationInfo.coordinates[0]}</p>
          <p>Latitude:{locationInfo.coordinates[1]}</p>
          <a href={locationInfo.link}> Click here to learn more! </a>
        </div>
        <button className="closeButton" onClick={() => setIsVisible(false)}>
          X
        </button>
      </div>
    )
  );
};

export default EventInfo;
