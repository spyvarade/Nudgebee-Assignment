import "./App.css";
import NestedCheckbox from "./components/NestedCheckbox";
import ChildCheckbox from "./components/ChildCheckbox";
function App() {
  return (
    <NestedCheckbox label="Parent Checkbox">
      <ChildCheckbox label="Child 1" />
      <ChildCheckbox label="Child 2" />
      <ChildCheckbox label="Child 3" />
    </NestedCheckbox>
  );
}

export default App;
