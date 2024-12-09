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

  const renderFile = (item) => <File key={item} title={item} />;

  const renderFileOrFolder = (item) =>
    explorerData[item] === null ? (
      <File key={item} title={item} />
    ) : (
      <Folder key={item} data={explorerData[item]} title={item} />
    );

  return (
    <div>
      {Array.isArray(explorerData)
        ? explorerData.map(renderFile)
        : typeof explorerData === "object" && explorerData !== null
        ? Object.keys(explorerData).map(renderFileOrFolder)
        : null}
    </div>
  );
}

export default Explorer;
