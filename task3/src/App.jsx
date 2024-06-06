import { useState } from "react";
import ProgressBar from "./componets/ProgressBar";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Your API request here
      await fetch("https://fakestoreapi.com/products");
    } catch (error) {
      console.error("Error:", error);
      // Handle error and update progress accordingly
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <ProgressBar isLoading={isLoading} />
    </div>
  );
}

export default App;
