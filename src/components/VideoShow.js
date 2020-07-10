import React, { Component } from "react";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";

const KEY = "AIzaSyDR385vzb0vgxny4atFafXRSpgXk40UCsQ";

class VideoShow extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount = async () => {
        const response = await Youtube.get("/search", {
            params: {
                q: "trending",
                part: "snippet",
                type: "video",
                maxResults: 10,
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
            <div>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default VideoShow;
