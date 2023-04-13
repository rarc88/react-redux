import React from "react";
import { connect } from "react-redux";
import "./New.css";

export const New = () => {
  return <div className="new">New</div>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(New);
