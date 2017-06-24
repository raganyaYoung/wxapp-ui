// pages/Tabs/Tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabConfig: ['全部', '待付款', '待发货', '待收货'],
    tabIndex: 0,
  },
  handleTab: function(e) {
    let tabIndex = e.target.dataset.tab
    this.setData({
      tabIndex
    })
  }
})