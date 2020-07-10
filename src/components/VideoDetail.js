import React from "react";
import VideoShow from "./VideoShow";

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div>
                <VideoShow />
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="card video-details">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={videoSrc} title="video player" autoplay />
                </div>

                <div className="card-body">
                    <h4>{video.snippet.title}</h4>
                    <p style={{ color: "red" }}>{video.snippet.description}</p>
                    <p style={{ fontWeight: "bold" }}>
                        {video.snippet.channelTitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
