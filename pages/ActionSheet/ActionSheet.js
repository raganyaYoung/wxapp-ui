// pages/ActionSheet/ActionSheet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleWxActionSheet: function() {
    wx.showActionSheet({
    itemList: ['好看', '好好看', '一般'],
    success: function(res) {
      wx.showToast({
        title: '选中'+res.tapIndex
      })
    },
    fail: function(res) {
      console.log(res.errMsg)
    }
  })
  }
})