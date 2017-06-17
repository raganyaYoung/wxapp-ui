// pages/Search/Search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: {
      placeholer: '',
      handleCancel: 'handleCancel',
      handleSearch: 'handleSearch',
      handleInput: 'handleInput',
    },
    keywords: 'aa',
  },
  handleCancel: function() {
    wx.navigateBack();
  },
  handleSearch: function() {
    let keywords = this.data.keywords

    //do search
    console.log('do search')
  },
  handleInput: function(e) {
    this.data.keywords = e.detail.value
    this.setData({
      keywords: this.data.keywords,
    })

    //do search
    console.log('do search')
  }
})