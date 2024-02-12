import React from "react";

const Candidate = ({ value, onSearchCandidate, onSaveCandidate, index }) => {
  return (
    <>
      <div className="user">
        <div className="foto">
          <img src={value.picture.large} alt={value.name.first} />
        </div>
        <div className="datos">
          <div className="name">
            {value.name.title}. {value.name.first} {value.name.last}
          </div>
          <div>
            Location: {value.location.city}({value.location.country})
          </div>
          <div>
            <a href="#">{value.email}</a>
          </div>
          <div>
            <a href="#">{value.phone}</a>
          </div>
        </div>
        <div className="btns">
          <button onClick={() => onSearchCandidate(index)} className="red">
            Hidden
          </button>
          <button
            onClick={() => onSaveCandidate(value, index)}
            className="green"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Candidate;
