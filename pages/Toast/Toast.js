// pages/Toast/Toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '文字提示',
    toastShow: false,
  },
  handleToast: function() {
    setTimeout(() => {
      this.setData({
        toastShow: !this.data.toastShow
      })
    }, 2000)
    this.setData({
      toastShow: !this.data.toastShow
    })
  },
  handleWxToast: function() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
})