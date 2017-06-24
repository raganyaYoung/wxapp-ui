// pages/Scroll/Scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    config: [],
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.autoAddItems()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.autoAddItems()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //this.autoAddItems()
  },

  autoAddItems: function() {
    let array = this.data.config;
    if(array.length > 140) return;
    let len = array.length+10;
    for(let i=array.length; i<len; i++) {
      array[i] = i
    }
    this.setData({
      config: array
    })
    wx.stopPullDownRefresh();
  }
})