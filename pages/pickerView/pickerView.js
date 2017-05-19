// pages/component/pickerView.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    years,
    months,
    days,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    time: [years.indexOf(date.getFullYear()), months.indexOf(date.getMonth() + 1), days.indexOf(date.getDate())],
    visible: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  bindChange: function(e) {
    let value = e.detail.value
    let year = this.data.years[value[0]]
    let month = this.data.months[value[1]]
    let day = this.data.days[value[2]]
    this.setData({
      year,
      month,
      day,
      time: value,
    })
  },
  bindClick: function() {
    this.setData({
      visible: !this.data.visible,
    })
  }
})