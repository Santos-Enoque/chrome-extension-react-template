import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const App = () => {
  return (
    <div>
      <img src="icon.png" alt="icon" />
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
