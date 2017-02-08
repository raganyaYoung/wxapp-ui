//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    listData: [{
      title: '视图容器',
      items: [{
        en: 'view',
        ch: '视图容器',
        noIcon: true,
      }, {
        en: 'scroll-view',
        noIcon: true,
        ch: '可滚动视图区域',
      }, {
        en: 'swiper',
        noIcon: true,
        ch: '滑块视图容器',
      }]
    }, {
      title: '基础内容',
      items: [{
        en: 'icon',
        ch: '图标',
        noIcon: true,
      }, {
        en: 'text',
        ch: '文本',
        noIcon: true,
      }, {
        en: 'progress',
        ch: '进度条',
        noIcon: true,
      }]
    }, {
      title: '表单组件',
      items: [{
        en: 'button',
        ch: '按钮',
        noIcon: true,
      }, {
        en: 'radio',
        ch: '单项选择器',
        noIcon: true,
      }, {
        en: 'checkbox',
        ch: '多项选择器',
        noIcon: true,
      }, {
        en: 'form',
        ch: '表单',
        noIcon: true,
      }, {
        en: 'input',
        ch: '输入框',
        noIcon: true,
      }, {
        en: 'label',
        ch: '标签',
        noIcon: true,
      }, {
        en: 'picker',
        ch: '日期选择器',
        noIcon: true,
      }, {
        en: 'picker-view',
        ch: '日期选择器(可滚动)',
        noIcon: true,
      }, {
        en: 'slider',
        ch: '滑动选择器',
        noIcon: true,
      }, {
        en: 'switch',
        ch: '开关选择器',
        noIcon: true,
      }, {
        en: 'textarea',
        ch: '文本框',
        noIcon: true,
      }]
    }, {
      title: '导航',
      items: [{
        en: 'navigator',
        ch: '图标',
        noIcon: true,
      }]
    }, {
      title: '媒体组件',
      items: [{
        en: 'audio',
        ch: '音频',
        noIcon: true,
      }, {
        en: 'video',
        ch: '视频',
        noIcon: true,
      }, {
        en: 'image',
        ch: '图片',
        noIcon: true,
      }]
    }, {
      title: '地图',
      items: [{
        en: 'map',
        ch: '地图',
        noIcon: true,
      }]
    }, {
      title: '画布',
      items: [{
        en: 'canvas',
        ch: '画布',
        noIcon: true,
      }]
    }, {
      title: '客服回话',
      items: [{
        en: 'contact-button',
        ch: '客服回话',
        noIcon: true,
      }]
    }]
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
  }
})