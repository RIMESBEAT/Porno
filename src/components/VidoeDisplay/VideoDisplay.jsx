
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
      {/* <Iframe
        url={embed_code}
        width="100%"
        height="100%"
        id={_id}
        className=""
        display="block"
        position="relative"
        allow="fullscreen"
      /> */}

      <iframe
        key={_id}
        title={title}
        src={embed_code}
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        sandbox="allow-scripts allow-modal"
        loading="eager"
      ></iframe>
    </div>
  );
};

export default VideoDisplay;
