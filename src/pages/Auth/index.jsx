import { useState } from "react";
import InputContainer from "../../components/InputContainer";

import "./auth.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tab, setTab] = useState("login");

  const switchTab = () => {
    if(tab === "login")
        setTab("register")
    if(tab === "register")
        setTab("login")
  };

  return (
    <div className="auth-root-container">
      <div className="auth-box-container">
        <div className="login-text-container">
          {tab === "login" ? (
            <p className="login-text">Login</p>
          ) : (
            <p className="login-text">Register</p>
          )}
        </div>
        <div>
          {tab === "login" ? (
            <>
              <InputContainer
                placeholder="Email Address"
                secureText={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputContainer
                placeholder="Password"
                secureText={true}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </>
          ) : (
            <>
              <InputContainer
                placeholder="Email Address"
                secureText={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputContainer
                placeholder="Password"
                secureText={true}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <InputContainer
                placeholder="First Name"
                secureText={false}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputContainer
                placeholder="Last Name"
                secureText={false}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
        </div>
        <div className="login-button-container">
          <div className="create-account-text-container">
            <p className="create-account-text" onClick={() =>  switchTab()}>
              {tab === "login" ? "New User? Create an account" : "Already Registered? Login"}
            </p>
          </div>
          <div className="login-button-container">
            <button className="login-button">{tab === "login" ? "Login" : "Register"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
