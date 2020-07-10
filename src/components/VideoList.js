import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video, i) => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return <div>{renderedList}</div>;
};

export default VideoList;
