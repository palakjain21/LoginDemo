import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [loginUserName, setloginUserName] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const updateUserName = (e) => {
    setloginUserName(e.target.value);
  };

  const updatePassword = (e) => {
    setloginPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        method: "post",
        url: "https://myphysio.digitaldarwin.in/api/login/",
        data: {
          uid: loginUserName,
          password: loginPassword,
        },
      });
      console.log(data);

      localStorage.setItem("token", data.data.jwt);
      localStorage.setItem("Role", data.data.role);
      localStorage.setItem("First_name", data.data.basic_info.first_name);
      localStorage.setItem("Middle_name", data.data.basic_info.middle_name);
      localStorage.setItem("Last_name", data.data.basic_info.last_name);
      localStorage.setItem("Mobile_no", data.data.basic_info.mobile_no);
      localStorage.setItem("Whatsapp_no", data.data.basic_info.whatsapp_no);
      localStorage.setItem("User_id", data.data.user_id);
      window.location.reload();
    } catch (e) {
      console.log(e);

      return alert("Wrong Credentials");
    }
  };
  return (
    <div className="formbg">
      <div className="form">
        <div className="title">PHYSIOAI</div>
        <p className="subtitle"> WELCOME BACK!</p>
        <form>
          <label>
            <p className="label">* Username</p>
            <input
              className="input"
              type="text"
              name="user name"
              value={loginUserName}
              placeholder="Email"
              onChange={updateUserName}
              required
            />
          </label>
          <label>
            <p className="label">* Password</p>{" "}
            <div className="wrapper">
              {" "}
              <input
                className="input"
                type={passwordShown ? "text" : "password"}
                name="password"
                value={loginPassword}
                placeholder="Password"
                onChange={updatePassword}
                required
              />
              <i onClick={togglePasswordVisiblity}>
                <FaEye />
              </i>
            </div>
          </label>
          <div className="forgot">Forgot password?</div>
          <div>
            <button className="button" type="submit" onClick={onSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
