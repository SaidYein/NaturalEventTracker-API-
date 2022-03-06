import React from "react";

const Error = ({ error }) => {
  return (
    <div className="errorInfo">
      <h2>{error}</h2>
    </div>
  );
};

export default Error;
