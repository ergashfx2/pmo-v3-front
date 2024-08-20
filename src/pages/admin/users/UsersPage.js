import React, { useEffect, useState } from "react";
import UsersTool from "../../../components/users/UsersTool";
import Table from "../../../components/utils/table/table";
import AdminService from "../../../services/api/adminService";
import "./UsersPage.css";
import Paginator from "../../../components/utils/paginator/Paginator";
import UserActions from "../../../components/users/userActions";

const UsersPage = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const usersData = async () => {
      await AdminService.getUsers().then((res) => {
        setUsers(res.results);
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
                <i
                  className={
                    user.status === "Active"
                      ? "fa-solid fa-circle text-green"
                      : "fa-solid fa-circle text-red"
                  }
                ></i>
              </td>
              <td scope="col" className="col-3">
                {user.role}
              </td>
              <td scope="col" className="col-3">
                {user.phone}
              </td>
              <td scope="col" className="col-2 text-center">
                <UserActions user={user} />
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
