// pages/radioGroup/radioGroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      id: 1,
      value: '北京',
    }, {
      id: 2,
      value: '上海'
    }, {
      id: 3,
      value: '深圳'
    }],
    checkedId: 3,
  },
  handleCheck: function(e) {
    this.setData({
      checkedId: e.currentTarget.id
    })

    //do sth
  }
})