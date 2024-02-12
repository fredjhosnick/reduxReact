import React from "react";
import Employee from "./Employee";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeValue, deleteValue } from "../store/mySlice";

const Manager = () => {
  const listEmployees = useSelector((state) => state.myEmployees.employees);
  const dispatch = useDispatch();

  const updated = (continent, index) => {
    dispatch(
      changeValue({
        index: index,
        newContinent: continent,
      })
    );
  };

  const deleted = (value) => {
    dispatch(
      deleteValue({
        name: value.name.first,
        lastname: value.name.last,
        phone: value.cell,
      })
    );
  };
  return (
    <>
      <h1>Employees:</h1>
      <Link to="/candidates">
        <button>Candidates</button>
      </Link>
      <div className="users">
        {listEmployees.map((value, index) => (
          <Employee
            key={index}
            value={value}
            index={index}
            onUpdate={updated}
            onDelete={deleted}
          />
        ))}
      </div>
    </>
  );
};

export default Manager;
