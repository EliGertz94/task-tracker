import React from "react";
import { useState } from "react";

const DateSelector = ({setDate,selectedYear}) => {
  

  const addYear=(e)=> {

        setDate(e.target.value)
  }

  return (
    <div className="header">
      <form value="date">
        <div className="form-control">
          <label>Search By Date :</label>
          <input type="date" value={selectedYear} onChange={addYear} />
        </div>
      </form>
    </div>
  );
};

export default DateSelector;
