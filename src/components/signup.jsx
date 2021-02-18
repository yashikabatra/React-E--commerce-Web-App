import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../styles/signup.css'

class Signup extends Component {
    state = {  }
    render() { 
        return (
            <Card className="Card">
             <form>
        <h1 className="signup" style={{'text-align' : 'center'}}>SIGNUP</h1>
        <input type='text'  className="form-control" placeholder='username'></input> <br></br>
        <input type='password' className="form-control" placeholder='password'></input>
        <br></br>
        <button  class="btn btn-secondary btn-block" >Signup</button>
      </form>
          </Card>
         );
    }
}
 
export default Signup;