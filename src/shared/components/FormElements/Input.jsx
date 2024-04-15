import React, { useReducer, useState, useEffect } from "react";
import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || "",
    touched: false, // New state to track whether input has been touched
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const inputClasses = `block w-full text-base border ${
    props.invalid ? "border-red-500 bg-red-100" : "border-gray-300 bg-gray-200"
  } p-1`;

  const labelClasses = `block font-bold mb-2 ${
    props.invalid ? "text-red-500" : ""
  }`;

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={inputClasses}
        onFocus={(e) =>
          e.target.classList.replace("bg-gray-200", "bg-gray-300")
        }
        onBlur={(e) => {
          e.target.classList.replace("bg-gray-300", "bg-gray-200");
          touchHandler(); // Mark input as touched when blurred
        }}
        value={inputState.value}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        className={inputClasses}
        onFocus={(e) =>
          e.target.classList.replace("bg-gray-200", "bg-gray-300")
        }
        onBlur={(e) => {
          e.target.classList.replace("bg-gray-300", "bg-gray-200");
          touchHandler(); // Mark input as touched when blurred
        }}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`mb-4 ${
        !inputState.isValid && inputState.touched && "border-red-500"
      }`}
    >
      <label htmlFor={props.id} className={labelClasses}>
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.touched && (
        <p className="text-red-500">
          Please enter a valid {props.label.toLowerCase()}.
        </p>
      )}
    </div>
  );
};

export default Input;
