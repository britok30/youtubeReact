import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        term: "",
    };

    onChange = (e) => {
        return this.setState({ term: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="search" style={{ marginTop: "3rem" }}>
                        Video Search
                    </label>

                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            type="text"
                            name="search"
                            style={{ display: "block", width: "90%" }}
                            onChange={this.onChange}
                            value={this.state.term}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="submit"
                                onSubmit={this.onFormSubmit}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
