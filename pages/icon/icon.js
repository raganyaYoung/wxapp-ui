// pages/icon/icon.js
Page({
  data:{
    iconType: [
      'success', 'success_circle', 'success_no_circle', 'safe_success',
      'info', 'info_circle',
      'waiting', 'waiting_circle',
      'warn', 'safe_warn',
      'cancel',
      'download',
      'search',
      'clear',
      'circle'
    ],
    targetColor: 'green',
    targetSize: '30',
    sizeTemplate: {
      items: [20,25,30,35,40],
      label: '可控制大小',
      event: 'handleSize',
    },
    colorTemplate: {
      items: ['#ea5a49', '#4a90e2', '#4cd964', '#ffbd17', '#11c1f3', '#484746' ],
      label: '可控制颜色',
      event: 'handleColor',
    }
  },
  handleColor: function(e) {
    this.setData({
      targetColor: e.detail.value
    })
  },
  handleSize: function(e) {
    this.setData({
      targetSize: e.detail.value
    })
  }
})