import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "../components/ui/button";
import "../styles/global.css";
import "./popup.css";

const App = () => {
  return (
    <div className="w-[300px] h-[300px] bg-background p-4">
      <div className="space-y-4">
        <img src="icon.png" alt="icon" className="w-16 h-16" />
        <Button>Click me</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
