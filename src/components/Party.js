import styles from './Party.scss';
import React, { Component } from 'react';

export default class Party extends Component {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.overlay}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1 className={styles.title}>Our Party</h1>
                <h4 className={styles.name}>MELISA CENTER</h4>
                <p>
                  85 Thoại Ngọc Hầu, P. Hòa Thạnh, Q. Tân Phú, HCM<br/>
                  Vào lúc <strong>18:00</strong> ngày <strong>02</strong> tháng <strong>10</strong> năm <strong>2016</strong><br/>
                  <a className={styles.map} target="_blank" href="https://goo.gl/maps/NwCP95hKVTR2">(xem bản đồ)</a>
                </p>
              </div>
              <div className="col-xs-12">
                <div className={styles.rsvp}>
                  <a target="_blank" href="https://www.facebook.com/events/1073751489369672/" className="btn btn-outline-secondary">
                    RSVP ON FACEBOOK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

