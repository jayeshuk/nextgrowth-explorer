import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import File from "../File";
import Explorer from "../Explorer";
import "./styles.css";

function Folder({ data, title }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div className="title-container" onClick={handleShow}>
        <FaFolder /> <span className="title">{title}</span>
      </div>

      {show ? (
        <div className="content-container">
          {Array.isArray(data) ? (
            data.map((item) => <File title={item} />)
          ) : (
            <Explorer data={data} />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Folder;
