import { useState, createContext } from "react";
export const FetchContext = createContext();

export const EventProvider = (props) => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(false);
  const [error, setError] = useState();

  const fetchEvents = async () => {
    try {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      setLoading(false);
      const categories = new Set(
        events.map((event) => event.categories[0].title)
      );

      setEventData(events);
      setCategories([...categories]);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return (
    <FetchContext.Provider
      value={{ eventData, loading, fetchEvents, categories, error }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};
