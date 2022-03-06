import { useState } from "react";
import HoverMarker from "./HoverMarker";

const LocationMarker = ({ onClick, icon }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`icons ${icon.class}`}
      onClick={onClick}
    >
      {icon.icon}
      {hover ? <HoverMarker /> : ""}
    </div>
  );
};

export default LocationMarker;
