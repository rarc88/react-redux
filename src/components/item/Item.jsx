import React from "react";

export const Item = ({ data }) => {
  return (
    <div className="item">
      <h3>{data.name}</h3>
      <p>{data.url}</p>
    </div>
  );
};
