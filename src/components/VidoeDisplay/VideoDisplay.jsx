
import React from "react";
import Iframe from "react-iframe";

const VideoDisplay = ({
  main_thumbnail,
  title,
  embed_code,
  _id,
  categories,
}) => {
  return (
    <div>
      <Iframe
        url={embed_code}
        width="100%"
        height="100%"
        id={_id}
        className=""
        display="block"
        position="relative"
        allow="fullscreen"
      />
    </div>
  );
};

export default VideoDisplay;
