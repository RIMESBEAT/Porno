
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
    <div style={{ position: "reletive" }}>
      {/* <Iframe
        url={embed_code}
        width="100%"
        height="100%"
        id={_id}
        className=""


        allow="fullscreen"
        styles={{position: "absolute", top: 0}}
      /> */}

      <iframe
        title={title}
        key={_id}
        style={{
          display: "block",
          border: "none",
          height: "100vh",
          width: "100vw",
          float: "left",
          marginLeft: 0,
        }}
        src={embed_code}
        border="0"
        width="620"
        height="465"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        frameborder="0"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default VideoDisplay;
