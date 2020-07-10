import React from "react";

const VideoShowItem = ({ video, onVideoSelect }) => {
    return (
        <div>
            <div
                onClick={() => onVideoSelect(video)}
                className="card video-card"
            >
                <img
                    src={video.snippet.thumbnails.high.url}
                    className="mr-3 card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="mt-0 card-title">{video.snippet.title}</h5>
                    <p className="card-text">{video.snippet.description}</p>
                </div>
            </div>
            {/* <div
                onClick={() => onVideoSelect(video)}
                classNameName="media m6 video-item"
            >
                <img
                    src={video.snippet.thumbnails.high.url}
                    classNameName="mr-3 img-thumb"
                    alt="..."
                />
                <div classNameName="media-body">
                    <h5 classNameName="mt-0">{video.snippet.title}</h5>
                    <p>{video.snippet.description}</p>
                </div>
            </div> */}
        </div>
    );
};

export default VideoShowItem;
