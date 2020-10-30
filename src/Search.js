import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <div className="row search-bar-row">
        <div className="col-11 search-bar">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a town or city"
              autoComplete="off"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary search"
                type="submit"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-1 current-location">
          <div className="input-group-prepend">
            <button type="button" className="btn btn-light location">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
