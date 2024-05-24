import React from "react";
import { Card } from "react-bootstrap";

const ResponsiveContainer: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Hello, World!</h1>
          <p>
            This is a Bootstrap 5 container created using React and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
