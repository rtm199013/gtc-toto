import React from "react";

export default function Counter({ totalCounter }) {
  return (
    <footer>
      <div>
        {/* shorthand true and false statement */}
        Counter: {totalCounter} {totalCounter <= 1 ? "item" : "items"}
      </div>
    </footer>
  );
}
