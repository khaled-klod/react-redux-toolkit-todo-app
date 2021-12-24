import React from "react";
import "./FilterButton.css";

export enum Filter {
  Active = "Active",
  Completed = "Completed",
  All = "All",
}

function FilterButton({ filter, onFilter }) {
  return (
    <button className="FilterButton" onClick={() => onFilter(filter)}>
      {filter}
    </button>
  );
}

export default FilterButton;
