import React from "react";
import { connect } from "react-redux";
import "./Home.css";

export const Home = () => {
  return <div className="home">Home</div>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Home);
