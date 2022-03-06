import React, { useContext, useState } from "react";
import { FetchContext } from "./context/FetchContext";
import Loader from "./Loader";
import { SelectedEventsContext } from "./context/SelectedEventsContext";
import EventButtons from "./EventButtons";

const SideBar = () => {
  const { categories } = useContext(FetchContext);
  const { loading } = useContext(FetchContext);
  const [selectedEvents, setSelectedEvents] = useContext(SelectedEventsContext);

  const selectedEventsHandler = (e) => {
    if (!selectedEvents.eventArray.includes(e.target.value)) {
      setSelectedEvents((prevState) => ({
        eventArray: [...prevState.eventArray, e.target.value],
      }));
    } else {
      setSelectedEvents({
        eventArray: selectedEvents.eventArray.filter(
          (item) => item !== e.target.value
        ),
      });
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="sidebar">
      <div className="categoryTitle">
        <h2>Categories</h2>
        <span>
          (Please select a category <br /> to see locations)
        </span>
      </div>
      <ul>
        {categories &&
          categories.map((event) => {
            return (
              <li key={event}>
                <EventButtons data={{ event, selectedEventsHandler }} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SideBar;
