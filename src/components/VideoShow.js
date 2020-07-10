import React, { Component } from "react";
import Youtube from "../api/Youtube";
import VideoShowList from "./VideoShowList";

const KEY = "AIzaSyBVt0YG2FPT6Fy5PzFKU89iyMjbIIeO1ps";

class VideoShow extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount = async () => {
        const response = await Youtube.get("/search", {
            params: {
                q: "tech",
                part: "snippet",
                type: "video",
                maxResults: 12,
                key: KEY,
            },
        });

        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="card-columns">
                <VideoShowList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default VideoShow;
