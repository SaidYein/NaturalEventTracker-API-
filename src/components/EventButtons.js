import React from "react";

const EventButtons = ({ data }) => {
  const { event, selectedEventsHandler } = data;
  return (
    <button
      className="eventButton"
      value={event}
      onClick={selectedEventsHandler}
    >
      {event}
    </button>
  );
};

export default EventButtons;
