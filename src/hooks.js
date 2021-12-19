import React, { useState } from "react";

const useFlip = (initialState = true) => {
  const [flip, setFlip] = useState(initialState);
  const toggleFlip = () => {
    setFlip((up) => !up);
  };
    return [flip, toggleFlip]
};

export default useFlip;
