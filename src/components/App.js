import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import "../App.css";

const KEY = "AIzaSyDR385vzb0vgxny4atFafXRSpgXk40UCsQ";

class App extends Component {
    state = {
        videos: [],
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
        console.log(response);
        console.log(response.data.items);
        this.setState({ videos: response.data.items });
    };

    render() {
        const { videos } = this.state;

        return (
            <div>
                <div className="container">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">Videos</div>
                        <div className="col-md-4">
                            <VideoList videos={videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
