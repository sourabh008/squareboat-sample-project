import React, { useEffect, useRef } from "react";
import "./textField.css";

const TextField = ({
  placeholder,
  label,
  inputType,
  error,
  onChange,
  name,
}) => {
  const errorRef = useRef();
  useEffect(() => {
    if (error) {
      errorRef.current.style = "border:1px solid red";
    } else {
      errorRef.current.style = "border:1px solid #43AFFF";
    }
  }, [error]);
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <div className="input-div">
        <input
          ref={errorRef}
          name={name}
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          className="input-text"
        />
        {error ? <p className="error">{error}</p> : ""}
      </div>
    </div>
  );
};

export default TextField;
