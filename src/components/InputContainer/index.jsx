import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./inputcontainer.css";

export default function InputContainer({ placeholder, secureText, value, onChange }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="input-container-root">
      <input
        type={!visible && secureText ? "password" : "text"}
        placeholder={placeholder}
        className="input-box"
        value={value}
        onChange={onChange}
      />
      {secureText ? (
        visible ? (
          <AiOutlineEye
            className="pass-icon"
            onClick={() => setVisible(false)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="pass-icon"
            onClick={() => setVisible(true)}
          />
        )
      ) : (
        <AiOutlineEyeInvisible
          className="pass-icon"
          style={{ color: "transparent" }}
        />
      )}
    </div>
  );
}
