import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsController from "../components/EventsController";

const EventsPage = () => {
  return (
    <>
      <Header />
      <EventsController />
      <Footer />
    </>
  );
};

export default EventsPage;
