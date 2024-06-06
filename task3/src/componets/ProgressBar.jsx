import React, { useState, useEffect } from "react";

const ProgressBar = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (isLoading) {
      // Simulate progress increment every second
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 10 : prevProgress
        );
      }, 1000);
    } else {
      // Reset progress when loading is complete
      setProgress(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="api-progress-bar">
      {isLoading && (
        <div className="progress" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
