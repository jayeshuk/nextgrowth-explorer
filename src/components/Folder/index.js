import React, { useState } from "react";
import { FcFolder, FcFile } from "react-icons/fc";
import { PiFilePlusLight, PiFolderPlusLight } from "react-icons/pi";
import File from "../File";
import Explorer from "../Explorer";
import "./styles.css";

function Folder({ data, title }) {
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  const [newIcon, setNewIcon] = useState("");

  const toggleShow = () => setShow(!show);

  const handleAdd = (e) => {
    setNewIcon(e.target.id);
    if (!show) toggleShow();
    if (!showInput) toggleInput();
  };

  const toggleInput = () => setShowInput(!showInput);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputBlur = () => {
    toggleInput();
    setValue("");
  };

  return (
    <div className="folder-container">
      <div className="title-container">
        <div className="title-sub-container" onClick={toggleShow}>
          <FcFolder /> <span className="folder-title">{title}</span>
        </div>
        <div>
          <PiFilePlusLight id="file" onClick={handleAdd} />
          <PiFolderPlusLight id="folder" onClick={handleAdd} />
        </div>
      </div>

      {show ? (
        <div className="content-container">
          {Array.isArray(data) ? (
            data.map((item) => <File title={item} />)
          ) : (
            <Explorer data={data} />
          )}
          {showInput ? (
            <div className="input-container">
              {newIcon === "file" ? <FcFile /> : <FcFolder />}
              <input
                autoFocus
                value={value}
                className={`${newIcon}-title input`}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Folder;
