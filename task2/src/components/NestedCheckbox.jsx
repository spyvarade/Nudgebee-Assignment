import React, { useState } from "react";

const NestedCheckbox = ({ label, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    setSelectedCount(isChecked ? React.Children.count(children) : 0);
  };

  const handleChildCheckboxChange = (childIsChecked) => {
    const newSelectedCount = childIsChecked
      ? selectedCount + 1
      : selectedCount - 1;
    setSelectedCount(newSelectedCount);
    setIsChecked(newSelectedCount === React.Children.count(children));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
        {selectedCount > 0 && ` (${selectedCount})`}
      </label>
      <ul>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isChecked,
            onCheckboxChange: handleChildCheckboxChange,
          });
        })}
      </ul>
    </div>
  );
};

export default NestedCheckbox;
