// pages/checkGroup/checkGroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      id: 1,
      value: '减肥'
    }, {
      id: 2,
      value: '游戏'
    }, {
      id: 3,
      value: '搞笑'
    }, {
      id: 4,
      value: '攀岩'
    }, {
      id: 5,
      value: '科技'
    }],
    checkedIds: [],
  },
  handleCheck: function(e) {
    let value = e.currentTarget.id;
    let index = this.data.checkedIds.indexOf(value)
    if(value && index === -1) {
      this.data.checkedIds.push(value)
      this.setData({
        checkedIds: this.data.checkedIds
      })
    }else if(value && index !== -1) {
      this.data.checkedIds.splice(index, 1)
      this.setData({
        checkedIds: this.data.checkedIds
      })
    }

    //do sth with this.data.checkedIds
  },
})