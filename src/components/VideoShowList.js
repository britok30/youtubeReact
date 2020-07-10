import React from "react";
import VideoShowItem from "./VideoShowItem";

const VideoShowList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoShowItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return <div>{renderedList}</div>;
};

export default VideoShowList;
