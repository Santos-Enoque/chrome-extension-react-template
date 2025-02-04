import React from "react";
import { createRoot } from "react-dom/client";
import "../styles/global.css";
import "./popup.css";

const App = () => {
  return (
    <div className="w-[300px] h-[300px] bg-blue-500">
      <div className="p-4">
        <img src="icon.png" alt="icon" className="w-16 h-16" />
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
