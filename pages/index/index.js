//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    listData: [{
      items: [{
        leftIcon: '../../images/heart.png',
        right: 'demo',
        noIcon: true,
        url: '/pages/component/component'
      }, {
        leftIcon: '../../images/github.png',
        right: 'github',
        noIcon: true,
        url: ''
      }]
    }],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getComponentDetail: function(e) {
    let url = e.currentTarget.dataset.url
    if(url) {
      wx.switchTab({
        url,
      })
    }
  },
})