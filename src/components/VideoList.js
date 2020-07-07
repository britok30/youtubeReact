import React from "react";

const VideoList = (props) => {
    const { videos } = props;
    return <div>{videos.length}</div>;
};

export default VideoList;
