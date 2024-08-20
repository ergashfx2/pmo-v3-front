import React, { useEffect, useState } from "react";
import UsersTool from "../../../components/users/UsersTool";
import { Container } from "react-bootstrap";
import Table from "../../../components/utils/table/table";
import AdminService from "../../../services/api/adminService";
import "./UsersPage.css";
import Paginator from "../../../components/utils/paginator/Paginator";
const UsersPage = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const usersData = async () => {
      await AdminService.getUsers().then((res) => {
        setUsers(res.results);
        console.log(res.results);
      });
    };
    usersData();
  }, []);

  if (users) {
    return (
      <div className="mx-3">
        <UsersTool />
        <Table
          thead_elements={["№", "FIO", "STATUS", "RO'LI", "RAQAMI"]}
          tbody={users.map((user, index) => (
            <tr key={index} className="p-4">
              <td scope="col" className="col-0">
                {index + 1}
              </td>
              <td scope="col" className="col-4">
                <p className="d-inline mr-3">{user.first_name}</p>
                <p className="d-inline">{user.last_name}</p>
              </td>
              <td scope="col" className="col-0 text-center">
                <i class="fa-solid fa-circle" style={{ color: "#008000" }}></i>
              </td>
              <td scope="col" className="col-3">
                {user.role}
              </td>
              <td scope="col" className="col-3">
                {user.phone}
              </td>
              <td scope="col" className="col-2 text-center">
                <i
                  user_id={user.id}
                  role="button"
                  class="fa-solid fa-lock mr-3"
                ></i>
                <i
                  user_id={user.id}
                  role="button"
                  class="fa-solid fa-trash"
                ></i>
              </td>
            </tr>
          ))}
        />
        <Paginator />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UsersPage;
