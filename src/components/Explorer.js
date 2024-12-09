import React, { useState } from "react";
import File from "./File";
import Folder from "./Folder";

const globalData = {
  Documents: ["Document1.jpg", "Document2.jpg", "Document3.jpg"],
  Desktop: ["Screenshot1.jpg", "videopal.mp4"],
  Downloads: {
    Drivers: ["Printerdriver.dmg", "cameradriver.dmg"],
    Applications: ["Webstorm.dmg", "Pycharm.dmg", "FileZila.dmg", "Mattermost.dmg"],
    "chromedriver.dmg": null,
  },
};

function Explorer({ data }) {
  const [explorerData] = useState(data || globalData);
  return (
    <div>
      {Array.isArray(explorerData)
        ? explorerData.map((item, index) => <File key={index} title={item} />)
        : typeof explorerData === "object"
        ? Object.keys(explorerData).map((item) => (
            <Folder key={item} data={explorerData[item]} title={item} />
          ))
        : null}
    </div>
  );
}

export default Explorer;
