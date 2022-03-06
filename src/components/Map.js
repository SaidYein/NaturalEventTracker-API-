import { useState, useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import EventInfo from "./EventInfo";
import icons from "./EventIcons";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const markers = eventData.map((event) => {
    return (
      <LocationMarker
        key={event.id}
        lat={event.geometries[0].coordinates[1]}
        lng={event.geometries[0].coordinates[0]}
        icon={icons[event.categories[0].id]}
        onClick={(e) => {
          setIsVisible(true);
          setLocationInfo({
            id: event.id,
            title: event.title,
            date: event.geometries[0].date,
            coordinates: event.geometries[0].coordinates,
            link: event.link,
            x: e.pageX,
            y: e.pageY,
          });
        }}
      />
    );
  });
  return (
    <>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDuCmgW7oFKXWj2JjYeh7RvxA_0uFFuL34" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
        </GoogleMapReact>
        {locationInfo && (
          <EventInfo data={{ locationInfo, isVisible, setIsVisible }} />
        )}
      </div>
    </>
  );
};

Map.defaultProps = {
  center: {
    lat: 35.35,
    lng: 35.35,
  },
  zoom: 5,
};

export default Map;
