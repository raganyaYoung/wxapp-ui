// pages/input/input.js
Page({
  data:{
    types: [{
      label: '文本',
      placeholder: 'text-文本',
      inputType: 'text',
      noIcon: false,
    }, {
      label: '数字',
      placeholder: 'number-数字键盘',
      inputType: 'number',
    }, {
      label: '数字',
      placeholder: 'digit-带小数点的数字键盘',
      inputType: 'digit',
    }, {
      label: '身份证',
      placeholder: 'idcard-身份证输入键盘',
      inputType: 'idcard',
    }, ]
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