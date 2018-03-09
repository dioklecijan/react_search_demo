import React from "react";
import { render } from "react-dom";
import Titlebar from "./Titlebar";
import SearchResults from "./SearchResults";
import someData from "./someData.js";

class App extends React.Component {
  state = {
    searchText: "",
    location: "",
    someData: []
  };

  onInputChange = event =>
    this.setState({ searchText: event.currentTarget.value });

  doSearch = value => {
    let data = [];
    for (let i = 0; i < 10; i++)
      data.push(someData[Math.floor(Math.random() * 100)]);

    this.setState({
      location: `/search?q=${value}`,
      someData: data
    });
  };

  render() {
    return [
      <Titlebar
        key="c1"
        title="Code Sandbox"
        value={this.state.searchText}
        onChange={this.onInputChange}
        onEnter={this.doSearch}
        placeholder="Type anything"
      />,
      this.renderResults()
    ];
  }

  renderResults() {
    return this.state.location ? (
      <SearchResults key="c2" data={this.state.someData} />
    ) : null;
  }
}

render(<App />, document.getElementById("root"));
