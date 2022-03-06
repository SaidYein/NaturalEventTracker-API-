import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import EventsPage from "./components/pages/EventsPage";
import { EventProvider } from "./components/context/FetchContext";
import { SelectedProvider } from "./components/context/SelectedEventsContext";
import { HoverContextProvider } from "./components/context/HoverContext";

ReactDOM.render(
  <EventProvider>
    <SelectedProvider>
      <HoverContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </Router>
      </HoverContextProvider>
    </SelectedProvider>
  </EventProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();