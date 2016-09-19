import styles from './Comment.scss';
import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className="container">
          <div className="row">
            <div className="col-xs-10 offset-xs-1">
              <div className={styles.border} />

              <p className={styles.hastag}>
                <a target="_blank" href="https://www.facebook.com/hashtag/quangvathanh">#QuangVaThanh</a>
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 offset-md-2">
              <div className={styles.wrap}>
                <div className="fb-comments" data-href="http://thienthanh-thienthanh.com" data-numposts="10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
