import React, { useState } from "react";
import adminService from "../../services/api/adminService";
import { useNavigate } from "react-router-dom";

const UserActions = ({ user }) => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(
    user.status === "Active" ? true : false
  );
  const handleAction = async (e) => {
    const action = e.target.attributes.getNamedItem("action").value;
    const user_id = e.target.attributes.getNamedItem("user_id").value;
    await adminService.performAction(action, user_id).then((res) => {
      res.status === 200 ? navigate("/users/") : <div></div>;
    });
  };
  return (
    <>
      <i
        style={{ color: "orange" }}
        user_id={user.id}
        action={isActive ? "block" : "unblock"}
        role="button"
        className={
          isActive ? "fa-solid fa-lock mr-3" : "fa-solid fa-unlock mr-3"
        }
        onClick={handleAction}
      ></i>
      <i
        style={{ color: "gray" }}
        user_id={user.id}
        action="delete"
        role="button"
        className="fa-solid fa-trash"
        onClick={handleAction}
      ></i>
    </>
  );
};

export default UserActions;
