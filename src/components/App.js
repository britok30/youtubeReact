import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import "../App.css";

const KEY = "AIzaSyDR385vzb0vgxny4atFafXRSpgXk40UCsQ";

class App extends Component {
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
    };

    render() {
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;
