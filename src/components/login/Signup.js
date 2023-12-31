import { useDispatch } from "react-redux";
import { Login, Signup } from "../Store/Auth/Auth-thunk";
import cls from "./signup.module.css";
import React, { useState } from "react";
const initialData = {
  name: "",
  email: "",
  password: "",
  phone: "",
};
const SignupPage = () => {
  const [signup, setSignup] = useState(true);
  const [data, setData] = useState({ ...initialData });
  const Disptach = useDispatch();
  const enteredDatahandler = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === "" && data.password === "") {
      return;
    }
    if (!signup) {
      Disptach(Login({ email: data.email, password: data.password }));
      return;
    }
    if (signup) {
      Disptach(Signup(data));
      // setData(initialData);
      // console.log("signup", data);
      return;
    }
    alert("enter valid data");
  };

  return (
    <>
      <div className={cls.signup_title}>
        <h3>
          The Social Glue that Empowers Groups with Seamless Communication and
          Unites People
        </h3>
      </div>
      <div className={cls.signup_page_cont}>
        <div className={cls.img_cont}>
          <img
            src="https://i.pinimg.com/736x/6d/dd/b9/6dddb91b31c70d1a8190e71c7dbd8c6c.jpg"
            alt="loginpageimage"
          ></img>
        </div>
        <div className={cls.form_cont}>
          <form className={cls.form_elements_cont} onSubmit={handleSubmit}>
            <div className={cls.signup_header}>
              <h1>{signup ? "Sign Up" : "Log In"}</h1>
            </div>
            {signup && (
              <div className={cls.form_input}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={enteredDatahandler}
                ></input>
              </div>
            )}
            <div className={cls.form_input}>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                onChange={enteredDatahandler}
                // placeholder="enter  email address"
              ></input>
            </div>
            {signup && (
              <div className={cls.form_input}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  name="phone"
                  onChange={enteredDatahandler}
                  //   placeholder="enter phone Number "
                ></input>
              </div>
            )}
            <div className={cls.form_input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={enteredDatahandler}
                // placeholder="enter your password"
              ></input>
            </div>

            <div className={cls.button_cont}>
              <button>{signup ? "Sign up" : "Log in"}</button>
            </div>
            <div className={cls.toggle} onClick={() => setSignup(!signup)}>
              {signup ? (
                <p>
                  Already have an account ?
                  <span style={{ color: "orange", fontSize: 20 }}>Log In</span>
                </p>
              ) : (
                <p>
                  Don't have an account?
                  <span style={{ color: "orange", fontSize: 20 }}>
                    Sign up now!
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className={cls.signup_info}>
        <h5>
          Unlock the Potential of Group Chatting: Where Security, Reliability,
          and a Plethora of Features Converge to Elevate Your Communication
          Experience!
        </h5>
      </div>
    </>
  );
};

export default SignupPage;
