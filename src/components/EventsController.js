import { useEffect, useContext } from "react";
import Map from "./Map";
import SideBar from "./SideBar";
import Loader from "./Loader";
import { FetchContext } from "./context/FetchContext";
import { SelectedEventsContext } from "./context/SelectedEventsContext";

function EventsController() {
  const { eventData } = useContext(FetchContext);
  const { loading } = useContext(FetchContext);
  const { fetchEvents } = useContext(FetchContext);
  const [selectedEvents, setSelectedEvents] = useContext(SelectedEventsContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = eventData.filter((event) => {
    return selectedEvents.eventArray.includes(event.categories[0].title);
  });

  return (
    <div className="container">
      {!loading ? <Map eventData={filteredEvents} /> : <Loader />}
      <SideBar />
    </div>
  );
}

export default EventsController;
