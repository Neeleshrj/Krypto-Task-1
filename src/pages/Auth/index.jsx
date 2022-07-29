import { useState } from "react";
import InputContainer from "../../components/InputContainer";

import "./auth.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="auth-root-container">
      <div className="auth-box-container">
        <div className="login-text-container">
          <p className="login-text">Login</p>
        </div>
        <div>
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
        </div>
        <div className="login-button-container">
          <div className="create-account-text-container">
            <p className="create-account-text">New User? Create an account</p>
          </div>
          <div className="login-button-container">
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
