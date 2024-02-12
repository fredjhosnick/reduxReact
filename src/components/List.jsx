import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Candidate from "./Candidate";
import { useDispatch, useSelector } from "react-redux";
import { addValue } from "../store/mySlice";
import { Link } from "react-router-dom";

const List = () => {
  const [candidates, setCandidates] = useState([]);
  const listEmployees = useSelector((state) => state.myEmployees.employees);
  const dispatch = useDispatch();
  const getData = async () => {
    const { data } = await axios.get(`https://randomuser.me/api/?results=6`);
    setCandidates(data.results);
  };

  useEffect(() => {
    getData(6);
  }, []);

  const searchCandidate = async (result) => {
    const { data } = await axios.get(`https://randomuser.me/api/?results=1`);
    setCandidates((prevCandidates) => {
      const updatedCandidates = [...prevCandidates];
      updatedCandidates[result] = data.results[0];
      return updatedCandidates;
    });
  };

  const saveCandidate = (value, index) => {
    const newValue = { ...value, department: "" };
    dispatch(addValue(newValue));
    searchCandidate(index);
  };
  return (
    <>
      <h1>Candidates:</h1>
      <Link to="/manager">
        <button>Employees</button>
      </Link>
      <div className="presentation">
        {candidates.map((value, index) => (
          <Candidate
            key={index}
            value={value}
            onSearchCandidate={searchCandidate}
            onSaveCandidate={saveCandidate}
            index={index}
          />
        ))}
      </div>
      <hr />
      <div className="candidates">
        {listEmployees.map((value, index) => (
          <Link key={index} to="/manager">
            {" "}
            <button>{value.name.first}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default List;
