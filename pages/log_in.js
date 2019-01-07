import Link from 'next/link'
import React, { Component } from 'react';

class Login extends Component {
  render(){
    return (
      <div>
        <div className="background"></div>
        <form id="form_id" method="post" name="myform">
          <div className="input-groups">
            <div className="input-group">
              <label>Email/Username</label>
              <input type="text" name="username" id="username" ></input>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" id="password" ></input>
            </div>

            <Link href="/sign_up">
              <button className="btn">Log in</button>
            </Link>

            <p>
              Not yet a member? <Link href="/sign_up">Sign up</Link>
            </p>
            <p>
              Forgot your password? <Link href="/reset_password">Reset Password</Link>
            </p>
          </div>
        </form>
        <style jsx>{`
          .background {
            background-color: rgb(48, 48, 48, 0.8);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
          }

          form {
            border: 1px solid #B0C4DE;
            background: white;
            border-radius: 10px;
            text-align: center;
            margin: 10% 35%;
          }

          .input-groups {
            padding: 70px 70px 20px 70px;
          }

          .input-group {
            padding-bottom: 3em;
          }

          .input-group label {
            font-size: 20px;
            font-weight: 700;
            display: block;
            text-align: left;
            padding-bottom: 0.6em;
          }

          .input-group input {
            width: 100%;
            padding: 5px 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid gray;
          }

          .btn {
            color: white;
            background: #4C5356;
            border: rgb(0, 0, 0, 0);
            border-radius: 4px;
            font-size: 16px;
            padding: 0.5em;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

export default Login;
