// pages/progress/progress.js
Page({
  data:{
    showInfo: false,
    percent: 0,
    width: 0,
    animation: true,
    colors: ['#ea5a49', '#4a90e2', '#4cd964', '#ffbd17', '#11c1f3', '#484746' ],
    color: '#ea5a49'
  },
  handleShowInfo: function() {
    this.setData({
      showInfo: !this.data.showInfo,
    })
  },
  handlePercent: function(e) {
    this.setData({
      percent: e.detail.value
    })
  },
  handleWidth: function(e) {
    this.setData({
      width: e.detail.value
    })
  },
  handleAnimation: function() {
    this.setData({
      animation: !this.data.animation
    })
  },
  handleColor: function(e) {
    this.setData({
      color: e.detail.value
    })
  },
})