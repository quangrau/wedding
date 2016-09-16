import styles from './Countdown.scss';
import React, { Component } from 'react';
import KnotIMG from '../assets/images/knot.png';

export default class Countdown extends Component {
  render() {
    return (
      <section className={styles.root}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className={styles.title}>We're Getting Married!</h1>
              <p>On the 2nd of October, 2016</p>
              <img src={KnotIMG} width={100} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

