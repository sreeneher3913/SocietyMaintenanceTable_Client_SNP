import Axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Navigation from "./Navigation";
function AddExpense() {
  const [Month, setMonth] = useState("");
  const [PaidTo, setPaidTo] = useState("");
  const [Amount, setAmount] = useState("");
  const [Due, setDue] = useState("");
  const Name = localStorage.getItem("User");

  function reset(params) {
    document.getElementById("chooseMonth").selectedIndex = 0; //1 = option 2
    document.getElementById("payingTo").selectedIndex = 0;
    setMonth("");
    setPaidTo("");
    setAmount("");
    setDue("");
  }

  const onAdding = (e) => {
    e.preventDefault();
    const Expense = JSON.stringify({
      Month: Month,
      PaidTo: PaidTo,
      Amount: Amount,
      Due: Due,
      Name: Name,
    });
    Axios.post("http://localhost:3001/addExp/addExpense", Expense, {
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        alert("Msg sent");
      })
      .catch((err) => {
        console.log("Err:" + err);
      });
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
      <div
        style={{
          height: "100vh",
          width: "100vw",
          //backgroundImage: `url(${back})`,
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "60px",
          paddingBottom: "60px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container
          fluid
          style={{
            backgroundColor: "whitesmoke",
            height: "100%",
            borderRadius: "10px",
            boxShadow:
              "0 20px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <form
            onSubmit={(e) => {
              onAdding(e);
              reset(e);
            }}
          >
            <h2>Hi {Name}</h2>
            <br />
            <select
              id="chooseMonth"
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(e) => setMonth(e.target.value)}
            >
              <option defaultValue="Choose Month">Choose Month</option>
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sep">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
            <br />
            <select
              id="payingTo"
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(e) => setPaidTo(e.target.value)}
            >
              <option defaultValue="Paying to">Paying to</option>
              <option value="GC">Garbage Collector</option>
              <option value="WC">Water Charges</option>
              <option value="EC">Electricity Charges</option>
            </select>
            <br />
            <input
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
              type="text"
              placeholder="Amount"
              style={{ maxWidth: "250px", marginBottom: "15px" }}
            />
            <br />
            <input
              value={Due}
              onChange={(e) => setDue(e.target.value)}
              type="text"
              placeholder="Due"
              style={{ maxWidth: "250px", marginBottom: "15px" }}
            />
            <br />
            <Button type="submit" value="Login">
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default AddExpense;
