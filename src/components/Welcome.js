import styles from './Welcome.scss';
import React, { Component } from 'react';
import SaveDateIMG from '../assets/images/save-date-white.svg';

export default class Welcome extends Component {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.center}>
          <img src={SaveDateIMG} />
        </div>
      </section>
    )
  }
}
