import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
const Home = () => {
  const [ListUsers, SetListUsers] = useState([]);
  const [UsersData, SetUsersData] = useState([]);
  const name = localStorage.getItem("User");
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/User/userTable/${localStorage.getItem("User")}`
    ).then((response) => {
      SetUsersData(response.data);
    });
    Axios.get("http://localhost:3001/User").then((response) => {
      SetListUsers(response.data);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navigation />
      <div>
        <Table
          className="tstyle"
          style={{ marginTop: "10px" }}
          responsive
          bordered
          striped
          hover
        >
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Due</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {UsersData.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.sumAmt}</td>
                  <td>{user.sumDue}</td>
                  <td>{name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div>
        <Table
          className="tstyle"
          style={{ marginTop: "10px" }}
          responsive
          bordered
          striped
          hover
        >
          <thead>
            <tr>
              <th>Month</th>
              <th>PaidTo</th>
              <th>Amount</th>
              <th>Due</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {ListUsers.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.Month}</td>
                  <td>{user.PaidTo}</td>
                  <td>{user.Amount}</td>
                  <td>{user.Due}</td>
                  <td>{user.Name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;

// import axios from "axios";
// import React from "react";
// import { useState, useEffect } from "react";

// function Home1() {
//   const [userList, setList] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/user/userTable/abcd")
//       .then((res) => {
//         res.data.json();
//         console.log("Hello");
//       })
//       .catch((err) => {
//         alert("Error");
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default Home1;
