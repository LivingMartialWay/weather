import React, { Component } from 'react';
import './style.css';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import logo from './db.png';

export default class App extends Component {
  render() {
    return (
      <div>
        <logo />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
