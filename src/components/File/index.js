import React from "react";
import { FaFile } from "react-icons/fa";

function File({ title }) {
  return (
    <div>
      <FaFile /> <span>{title}</span>
    </div>
  );
}

export default File;
