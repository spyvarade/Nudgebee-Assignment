const ChildCheckbox = ({ label, isChecked, onCheckboxChange }) => {
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    onCheckboxChange(isChecked);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </li>
  );
};
export default ChildCheckbox;
