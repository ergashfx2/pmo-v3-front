import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const UsersTool = () => {
  return (
    <div className="mt-3 w-100">
      <div className="input-group mb-3">
        <input
          id="search-users"
          type="text"
          placeholder="Qidirish..."
          className="form-control"
        />
        <div className="input-group-append">
          <button className="btn btn-default">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <Link className={"btn btn-default bg-primary ml-2"} to={"/create-user"}>
          Yaratish
        </Link>
      </div>
    </div>
  );
};

export default UsersTool;
