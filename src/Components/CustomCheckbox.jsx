import React, { useState } from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <label className="custom-checkbox">
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="custom-checkbox-box" />
    </label>
  );
};

export default CustomCheckbox;
