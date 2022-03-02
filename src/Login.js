import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import login from "./assets/images/loginImg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const params = JSON.stringify({
      Email: Email,
      Password: Password,
    });
    console.log(Email);
    alert(Password);
    Axios.post("http://localhost:3001/Cred/validate", params, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.data.length === 2) {
          console.log(res.data[1].status);
          console.log(res.data[0].Name);
          localStorage.setItem("User", res.data[0].Name);
          navigate("/home");
        } else {
          console.log(res.data.status);
          alert("Entered incorrect credentials");
        }
      })
      .catch((err) => {
        alert("Err:" + err);
      });
  };

  return (
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
        style={{
          backgroundColor: "whitesmoke",
          height: "100%",
          borderRadius: "10px",
          boxShadow:
            "0 20px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Row style={{ height: "100%" }}>
          <Col
            xl={7}
            sm={12}
            md={7}
            style={{
              backgroundImage: `url(${login})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          ></Col>
          <Col
            xl={5}
            sm={12}
            md={5}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "40px",
              justifyContent: "center",
            }}
          >
            <h1>Login</h1>
            <form onSubmit={(e) => onLogin(e)}>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                style={{ maxWidth: "250px", marginBottom: "15px" }}
              />
              <br />
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                style={{ maxWidth: "250px", marginBottom: "15px" }}
              />
              <br />
              <Button type="submit" value="Login">
                Login
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
