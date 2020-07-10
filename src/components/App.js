import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Nav from "./Nav";
import "../App.css";

const KEY = "AIzaSyDR385vzb0vgxny4atFafXRSpgXk40UCsQ";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
    };

    onTermSubmit = async (term) => {
        const response = await Youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                type: "video",
                maxResults: 15,
                key: KEY,
            },
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        const { videos } = this.state;

        return (
            <div>
                <div className="container">
                    <Nav />
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="col-md-4">
                            <VideoList
                                videos={videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
