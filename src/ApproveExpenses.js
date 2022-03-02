import React from "react";
import Navigation from "./Navigation";
import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";

function ApproveExpenses() {
  const [ApproversData, SetApproversData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/addExp/getExpenses").then((response) => {
      SetApproversData(response.data);
    });
  }, []);

  const onApproval = (id) => {
    for (var i = 0; i < ApproversData.length; i++) {
      if (ApproversData[i]._id === id) {
        //Axios to approve an Expense from Approve Expense Table
        Axios.post(
          "http://localhost:3001/user/approveExpense",
          ApproversData[i],
          {
            headers: { "content-type": "application/json" },
          }
        )
          .then((response) => {
            alert("Approved");
          })
          .catch((err) => {
            console.log("Err:" + err);
          });

        //Axios to remove the approved Expense from Expense Table
        Axios.delete(`http://localhost:3001/addExp/${id}`, {
          headers: { "content-type": "application/json" },
        })
          .then((response) => {
            alert("Deleted");
          })
          .catch((err) => {
            console.log("Err:" + err);
          });
        break;
      }
    }
  };
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
              <th>Paid For</th>
              <th>Amount</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            {ApproversData.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.Name}</td>
                  <td>{user.Month}</td>
                  <td>{user.PaidTo}</td>
                  <td>{user.Amount}</td>
                  <td>{user.Due}</td>
                  <td>
                    <Button
                      onClick={(e) => {
                        onApproval(user._id);
                      }}
                    >
                      Approve
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ApproveExpenses;
