import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Card } from "antd";
import style from "../styles/login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <Card className='Card'>
        <form>
          <h1 className='loginheading' style={{ "text-align": "center" }}>
            LOGIN
          </h1>
          <input
            type='text'
            className='form-control'
            placeholder='username'
          ></input>{" "}
          <br></br>
          <input
            type='password'
            className='form-control'
            placeholder='password'
          ></input>
          <br></br>
          <Link to=''>
            <button class='btn btn-secondary btn-block'>LOGIN</button>
          </Link>
        </form>
      </Card>
    );
  }
}

export default Login;
