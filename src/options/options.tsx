import React from "react";
import { createRoot } from "react-dom/client";
import "./options.css";
const Options = () => {
  return (
    <div>
      <p>Options</p>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Options />);
