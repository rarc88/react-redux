import React, { useEffect } from "react";
import "./Keypad.css";

import { navClick } from "../../redux/actions/navActions";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Home from "../home/Home";
import List from "../list/List";
import New from "../new/New";

const Keypad = ({ title, navClick }) => {
  const location = useLocation();

  useEffect(() => {
    let _title = "Home";
    switch (location.pathname) {
      case "/list":
        _title = "List";
        break;
      case "/new":
        _title = "New";
        break;
      default:
        break;
    }
    navClick({ title: _title });
  }, [location.pathname, navClick]);

  const Sections = () => {
    switch (location.pathname) {
      case "/home":
        return <Home />;
      case "/list":
        return <List />;
      case "/new":
        return <New />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="keypad">
      <header className="App-header">
        <div>
          <h1>{title}</h1>
          <Link to="/home">Home</Link>
          <Link to="/list">List</Link>
          <Link to="/new">New</Link>
        </div>
      </header>
      <Sections />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.navState.title,
    section: ownProps.section,
  };
};

export default connect(mapStateToProps, { navClick })(Keypad);
