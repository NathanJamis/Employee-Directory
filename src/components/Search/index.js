import React from "react";

function Search(props) {
  return (
    <div className="container">
      <div className="mx-3">
        <form className="form-inline" onSubmit={props.handleFormSubmit}>
          <input
            value={props.value}
            onChange={props.handleInputChange}
            type="search"
            className="form-control"
            id="searchInput"
            placeholder="Find employee by name...">
          </input>
        </form>
      </div>
    </div>
  );
}

export default Search;