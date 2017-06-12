// pages/video/video.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    danmuList: [{
      text: 'first danmu',
      color: '#ff0000',
      time: 1
    }, {
      text: 'second danmu',
      color: '#ffff00',
      time: 6
    }],
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  getSource: function() {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: (res) => {
        this.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  getDanmuValue: function(e) {
    this.inputValue = e.detail.value
  },
  sendDanmu: function() {
    this.videoCtx.sendDanmu({
      text: this.inputValue,
      color: util.getRandomColor()
    })
  },
})