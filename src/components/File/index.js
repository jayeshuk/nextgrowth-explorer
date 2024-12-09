import React from "react";
import { FcFile } from "react-icons/fc";
import "./styles.css";

function File({ title }) {
  return (
    <div className="file-container">
      <FcFile /> <span className="file-title">{title}</span>
    </div>
  );
}

export default File;
