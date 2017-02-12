// pages/radio/radio.js
Page({
  data:{
    color: '',
    colors: ['#ea5a49', '#4a90e2', '#4cd964', '#ffbd17', '#11c1f3', '#484746'],
  },
  handleColor: function(e) {
    this.setData({
      color: e.detail.value
    })
  }
})