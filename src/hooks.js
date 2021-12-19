import React, { useState } from "react";

const useFlip = () => {
  const [flip, setFlip] = useState(true);
  const toggleFlip = () => {
    setFlip((up) => !up);
  };
    return [flip, toggleFlip]
};

export default useFlip;
