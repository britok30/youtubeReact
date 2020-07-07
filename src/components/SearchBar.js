import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        term: "",
    };

    onChange = (e) => {
        return this.setState({ term: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="search" style={{ marginTop: "3rem" }}>
                        Video Search
                    </label>
                    <input
                        type="text"
                        name="search"
                        style={{ display: "block", width: "100%" }}
                        onChange={this.onChange}
                        value={this.state.term}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;
