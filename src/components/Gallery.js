import styles from './Gallery.scss';
import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: false,
      speed: 500,
    };

    return (
      <section className={styles.root}>
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </section>
    )
  }
}

