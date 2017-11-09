import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';

export default class App extends Component {

  render() {
    const style = {
      container: {
        marginTop: window.outerHeight/3,
      }
    };
    return (
      <div style={style.container}>
        <SearchBar />
      </div>
    );
  }
}
