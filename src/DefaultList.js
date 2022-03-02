import React from "react";
import Navigation from "./Navigation";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";

function DefaultList() {
  const [DefaultersData, SetDefaultersData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/user/defaulterList/", {
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        SetDefaultersData(response.data);
      })
      .catch((err) => {
        console.log("Err:" + err);
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
              <th>Name</th>
              <th>Month</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            {DefaultersData.map((user) => {
              return (
                <tr>
                  <td>{user._id.Month}</td>
                  <td>{user._id.Name}</td>
                  <td>{user.sumDue}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DefaultList;
