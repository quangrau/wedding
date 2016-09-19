import styles from './Gallery.scss';
import React, { Component } from 'react';
import Slider from 'react-slick';

const images = [];
for (let i = 1; i <= 65; i++) {
  images.push(
    <div key={`s_${i}`}><img src={`./gallery/${i}.jpg`} /></div>
  );
};

const customStyles = {
  next: {
    display: 'block',
    right: 50,
    width: 50,
    height: 70,
    zIndex: 5,
  },
  prev: {
    display: 'block',
    left: 50,
    width: 50,
    height: 70,
    zIndex: 5,
  },
};

const NextArrow = (props) => (
  <div {...props} style={customStyles.next} />
);

const PrevArrow = (props) => (
  <div {...props} style={customStyles.prev} />
);

export default class Gallery extends Component {
  render() {

    const settings = {
      className: 'center',
      lazyLoad: true,
      infinite: true,
      // centerMode: !0,
      // centerPadding: '100px',
      // variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [{
        breakpoint: 1200,
        settings: {
          centerMode: !0,
          centerPadding: "60px",
          slidesToShow: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          centerMode: !0,
          centerPadding: "60px",
          slidesToShow: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          centerMode: !0,
          centerPadding: "0",
          slidesToShow: 1
        }
      }]
    };

    return (
      <section className={styles.root}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className={styles.title}>Our Gallery</h1>
              <p>Hãy giúp chúng tôi lưu giữ những khoảnh khắc đáng nhớ trong ngày cưới, bằng cách sử dụng hashtag <a target="_blank" href="https://www.facebook.com/hashtag/quangvathanh">#QuangVaThanh</a>.</p>
            </div>
          </div>
        </div>
        <div className={styles.slider}>
          <Slider {...settings}>
            {images}
          </Slider>
        </div>
      </section>
    )
  }
}

