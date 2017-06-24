//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    listConfig: [{
      items: [{
        leftIcon: '../../images/demo.png',
        itemNote: '基础组件',
        arrowIcon: true,
        url: '/pages/component/component',
      }, {
        leftIcon: '../../images/heart.png',
        itemNote: '封装组件',
        arrowIcon: true,
        url: '/pages/adComponent/adComponent',
      }],
      handleListItem: 'handleListItem'
    }],
  },
  handleListItem: function(e) {
    let url = e.currentTarget.dataset.url
    if(url) {
      wx.switchTab({
        url,
      })
    }
  },
})