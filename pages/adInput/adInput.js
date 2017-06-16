// pages/adInput/adInput.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
      title: '',
      items: [{
        left: 'Default',
        right: '默认',
        noIcon: true,
        url: '../defaultInput/defaultInput'
      }, {
        left: 'Floating Label',
        right: '悬浮标签效果',
        noIcon: true,
        url: '../floatInput/floatInput'
      }]
    }]
  },
  getComponentDetail: function(e) {
    let url = e.currentTarget.dataset.url
    if(url) {
      wx.navigateTo({
        url,
      })
    }
  },
})