import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  let buttonClass=""
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setInputValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setInputValid(event.target.value !== ""); // Validate based on trimmed value
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
    setInputValid(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          required
          value={enteredValue}
        />
      </div>
      <Button
        type="submit"
        Disabled={isInputValid}
      >
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
