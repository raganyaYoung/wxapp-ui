// pages/component/component.js
//获取应用实例
var app = getApp()
Page({
  data:{
    listData: [{
      title: '视图容器',
      items: [{
        left: 'view',
        right: '视图容器',
      }, {
        left: 'scroll-view',
        right: '可滚动视图区域',
        noIcon: true,
        url: '../scrollView/scrollView'
      }, {
        left: 'swiper',
        right: '滑块视图容器',
        noIcon: true,
      }]
    }, {
      title: '基础内容',
      items: [{
        left: 'icon',
        right: '图标',
        noIcon: true,
        url: '../icon/icon'
      }, {
        left: 'text',
        right: '文本',
      }, {
        left: 'progress',
        right: '进度条',
        noIcon: true,
        url: '../progress/progress'
      }]
    }, {
      title: '表单组件',
      items: [{
        left: 'button',
        right: '按钮',
        noIcon: true,
        url: '../button/button'
      }, {
        left: 'radio',
        right: '单项选择器',
        noIcon: true,
        url: '../radio/radio'
      }, {
        left: 'checkbox',
        right: '多项选择器',
        noIcon: true,
        url: '../checkbox/checkbox'
      }, {
        left: 'input',
        right: '输入框',
        noIcon: true,
        url: '../input/input'
      }, {
        left: 'textarea',
        right: '文本框',
        noIcon: true,
      }, {
        left: 'picker',
        right: '选择器',
        noIcon: true,
        url: '../picker/picker'
      }, {
        left: 'picker-view',
        right: '可滚动选择器',
        noIcon: true,
      }, {
        left: 'slider',
        right: '滑动选择器',
        noIcon: true,
      }, {
        left: 'switch',
        right: '开关选择器',
        noIcon: true,
      }, {
        left: 'form',
        right: '表单',
        noIcon: true,
        url: '../form/form'
      }]
    }, {
      title: '导航',
      items: [{
        left: 'navigator',
        right: '图标',
        noIcon: true,
      }]
    }, {
      title: '媒体组件',
      items: [{
        left: 'audio',
        right: '音频',
        noIcon: true,
      }, {
        left: 'video',
        right: '视频',
        noIcon: true,
      }, {
        left: 'image',
        right: '图片',
        noIcon: true,
      }]
    }, {
      title: '地图',
      items: [{
        left: 'map',
        right: '地图',
        noIcon: true,
      }]
    }, {
      title: '画布',
      items: [{
        left: 'canvas',
        right: '画布',
        noIcon: true,
      }]
    }, {
      title: '客服回话',
      items: [{
        left: 'contact-button',
        right: '客服回话',
        noIcon: true,
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
      wx.navigateTo({
        url,
      })
    }
  },
})