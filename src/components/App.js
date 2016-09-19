import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/js/jquery.backstretch.min.js';
import styles from './App.scss';
import React, { Component } from 'react';
import Welcome from './Welcome';
import Countdown from './Countdown';
import Party from './Party';
import Gallery from './Gallery';
import Comment from './Comment';

import Welcome1 from '../assets/images/welcome_min.jpg';
import Welcome2 from '../assets/images/welcome2_min.jpg';

export default class App extends Component {

  componentDidMount() {
    $.backstretch([ Welcome1, Welcome2 ], {
      duration: 5000,
      fade: 750,
    });
  }

  render() {
    return (
      <div id="wrapper">
        <Welcome />
        <Countdown />
        <Party />
        <Gallery />
        <Comment />
      </div>
    )
  }
}
