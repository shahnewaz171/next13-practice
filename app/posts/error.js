"use client"; // Error components must be Client Components

import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log("error", error);
  }, [error]);

  return (
    <div>
      <h2>An error occurred: {error?.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
