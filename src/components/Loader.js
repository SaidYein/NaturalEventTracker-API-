import { RevolvingDot } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <RevolvingDot color="#00BFFF" height={200} width={200} />
    </div>
  );
};

export default Loader;
