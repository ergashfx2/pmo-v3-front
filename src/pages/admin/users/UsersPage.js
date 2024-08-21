import React, { useEffect, useState } from "react";
import UsersTool from "../../../components/users/UsersTool";
import Table from "../../../components/utils/table/table";
import AdminService from "../../../services/api/adminService";
import "./UsersPage.css";
import Paginator from "../../../components/utils/paginator/Paginator";
import UserActions from "../../../components/users/userActions";
import { Pagination } from "react-bootstrap";

const UsersPage = () => {
  const [users, setUsers] = useState();
  const [currentPage,setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  let records
  let npage
  let numbers
  if (users){
  records = users.slice(firstIndex,lastIndex)
   npage = Math.ceil(users.length / recordsPerPage)
  numbers = [...Array(npage + 1).keys()].slice(1)
  }
  useEffect(() => {
    const usersData = async () => {
      await AdminService.getUsers().then((res) => {
        setUsers(res);
      });
    };
    usersData();
  }, []);

  function nextPage (){
    console.log(currentPage);
    setCurrentPage(currentPage + 1)
    console.log(currentPage);
    
  }

  function prePage (){
    setCurrentPage(currentPage - 1)
    console.log(currentPage);
  }

  function setPage(e){
    setCurrentPage(parseInt(e.target.textContent))
    
  }

  if (records) {
    return (
      <div className="mx-3">
        <UsersTool />
        <Table
          thead_elements={["№", "FIO", "STATUS", "RO'LI", "RAQAMI"]}
          tbody={records.map((user, index) => (
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
        <Pagination>
          <Pagination.Item onClick={prePage}>&laquo; Oldingi</Pagination.Item>
          {numbers.map((num,index)=>(
            <Pagination.Item onClick={setPage} active={num === currentPage ? true : false}>{num}</Pagination.Item>
          ))}
          <Pagination.Item onClick={nextPage}>Keyingi  &raquo;</Pagination.Item>
        </Pagination>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UsersPage;
