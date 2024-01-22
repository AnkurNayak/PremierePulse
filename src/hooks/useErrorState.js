import { useState } from "react";

const useErrorState = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  // Get the error message from response
  const errorSet = (err) => {
    let errorMessage;
    if (err.response !== undefined) {
      errorMessage = err.response.data.message;
    } else {
      errorMessage = err;
    }
    setErrorMessage(errorMessage);
  };

  return { errorMessage, errorSet };
};

export default useErrorState;
