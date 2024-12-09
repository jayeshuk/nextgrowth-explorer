import React, { useState } from "react";
import { FcFolder } from "react-icons/fc";
import { PiFilePlusLight, PiFolderPlusLight } from "react-icons/pi";
import File from "../File";
import Explorer from "../Explorer";
import "./styles.css";

function Folder({ data, title }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="folder-container">
      <div className="title-container">
        <div className="title-sub-container" onClick={handleShow}>
          <FcFolder /> <span className="title">{title}</span>
        </div>
        <div>
          <PiFilePlusLight />
          <PiFolderPlusLight />
        </div>
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
