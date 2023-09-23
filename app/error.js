"use client"; // error components must be client component

const Error = ({ error, reset }) => {
  return (
    <div>
      <h2>An error occurred: {error?.message}</h2>

      {/* attempt to recover by trying to re-render the segment */}
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
