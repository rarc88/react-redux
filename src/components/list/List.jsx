import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions/apiActions";
import { Item } from "../item/Item";
import "./List.css";

export const List = ({ list, loading, error, fetchData }) => {
  const isFirtRender = useRef(true);
  useEffect(() => {
    if (isFirtRender.current) {
      fetchData();
    }
    isFirtRender.current = false;
  }, [fetchData]);

  return (
    <div className="list">
      <h1>List</h1>
      {loading ? "Loading..." : ""}
      {error ? error : ""}
      {list && list.length
        ? list.map((item, index) => <Item data={item} key={index} />)
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.apiState.list,
    loading: state.apiState.loading,
    error: state.apiState.error,
  };
};

export default connect(mapStateToProps, { fetchData })(List);
