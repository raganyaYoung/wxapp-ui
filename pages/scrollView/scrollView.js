// pages/scrollView/scrollView.js
Page({
  data:{
    scrollY: false,
    demoLine: Array.apply(0,Array(100)).map((item,index) => index+1),
    scrollIntoView: null,
    showToast: false,
  },
  //纵向滚动
  scrollY: function() {
    this.setData({
      scrollY: !this.data.scrollY,
    })
  },
  //滚动事件
  handleScroll: function(e) {
    console.log('我在滚', e)
  },
  //快速滚动到第几行
  handleInput: function(e) {
    let val = e.detail.value
    this.setData({
      scrollIntoView: val
    })
  },
  //到底提示
  handleScrollToLower: function(e) {
    if(this.data.showToast) {
      wx.showModal({
        title: '提示',
        content: '没了 别拉啦！',
        icon: 'success'
      })
    }
  },
  //控制是否显示到底提示
  handleToast: function() {
    this.setData({
      showToast: !this.data.showToast
    })
  }
})