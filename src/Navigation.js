import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const name = localStorage.getItem("User");
  const Logout = () => {
    setTimeout(() => {
      alert("You have successfully Logged out");
      localStorage.clear();
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">Team 4</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/addExpense">Add Expense</Nav.Link>
              {name === "Neher" && (
                <>
                  <Nav.Link href="/approveExpenses">Approve Expenses</Nav.Link>
                  <Nav.Link href="/dueList">Defaulter list</Nav.Link>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              <Button
                style={{ marginLeft: "20px" }}
                variant="light"
                onClick={(e) => {
                  Logout(e);
                }}
              >
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
