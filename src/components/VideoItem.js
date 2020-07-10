import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div>
            <div
                onClick={() => onVideoSelect(video)}
                className="media m6 video-item"
            >
                <img
                    src={video.snippet.thumbnails.high.url}
                    className="mr-3 img-thumb"
                    alt="..."
                />
                <div className="media-body">
                    <h5 className="mt-0">{video.snippet.title}</h5>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
