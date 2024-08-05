import React, { useState } from "react";
import CustomCheckbox from "./Components/CustomCheckbox";
import CustomButton from "./Components/Button/CustomButton";
import "./App.css";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    console.log("Checkbox is now", checked ? "checked" : "unchecked");
  };

  return (
    <div className="container">
      <CustomCheckbox
        label="All Pages"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <hr />
      <div className="checkbox-container">
        <CustomCheckbox
          label="Page 1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CustomCheckbox
          label="Page 2"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CustomCheckbox
          label="Page 3"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CustomCheckbox
          label="Page 4"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CustomCheckbox
          label="Page 5"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CustomCheckbox
          label="Page 6"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>

      <hr />
      <CustomButton>Done</CustomButton>
    </div>
  );
};

export default App;
