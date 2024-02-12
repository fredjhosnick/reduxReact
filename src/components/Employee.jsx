import React from "react";
import { useSelector } from "react-redux";

const Employee = ({ value, index, onUpdate, onDelete }) => {
  const departments = useSelector((state) => state.mydepartments.departments);
  return (
    <>
      <div className="colums">
        <div className="fotoUser">
          <img src={value.picture.large} />
        </div>
        <div className="nameUser">
          <strong>
            {value.name.last}, {value.name.first}
          </strong>
        </div>
        <div>{value.location.city}</div>
        <div>({value.location.country})</div>
        <div>
          <select onChange={(e) => onUpdate(e.target.value, index)}>
            <option>Select:</option>
            {departments.map((thisValue, i) =>
              value.department === thisValue ? (
                <option selected key={i}>
                  {thisValue}
                </option>
              ) : (
                <option key={i}>{thisValue}</option>
              )
            )}
          </select>
        </div>
        <div>
          <button onClick={() => onDelete(value)} className="red">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Employee;
