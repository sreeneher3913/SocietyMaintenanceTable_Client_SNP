import "./App.css";
import Login from "./Login";
//import {useState, useEffect, useMemo} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddExpense from "./AddExpense";
import ApproveExpenses from "./ApproveExpenses";
import DefaultList from "./DefaultList";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addExpense" element={<AddExpense />} />
          <Route path="/approveExpenses" element={<ApproveExpenses />} />
          <Route path="/dueList" element={<DefaultList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
