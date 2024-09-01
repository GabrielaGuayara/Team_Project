import React from "react";

function Card(props) {
  return (
    <div className="card bg-base-200 p-6 shadow-xl w-60">
      <figure>
        <img
          src="https://i.pinimg.com/originals/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855.png"
          alt="Shoes"
          className="h-32"
        />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title text-md">
          {props.firstName + " " + props.lastName}
        </h2>
        <p className="text-sm">Contact The Applicant At</p>
        <p className="text-sm">{props.email}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">Accept</button>
          <button className="btn btn-error btn-sm">Decline</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
