// pages/swiper/swiper.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/slide1.jpg',
      '../../images/slide2.jpg',
      '../../images/slide3.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 600,
  },
  bindAuto: function() {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  bindShowDots: function() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  bindInterval: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  bindDuration: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})