// pages/Rate/Rate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedRate: 0,
    comment: '',
  },
  handleStar: function(e) {
    this.setData({
      checkedRate: e.target.id
    })
  },
  handleComment: function(e) {
    this.setData({
      comment: e.detail.value
    })
  },
  handleSubmit: function() {
    //do submit with checkedRate & comment
  },
})