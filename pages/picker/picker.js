// pages/picker/picker.js
Page({
  data:{
    disabled: false,
    cities: ['北京', '深圳', '广州', '上海'],
    selectedCity: 0,
    selectedDate: '',
    selectedTime: '',
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    let time = today.getHours() + ':' + (today.getMinutes() < 10 ? (0+''+today.getMinutes()) : today.getMinutes());
    this.setData({
      selectedDate: date,
      selectedTime: time
    })
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
  bindSwitchChange: function() {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  bindCityChange: function(e) {
    this.setData({
      selectedCity: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      selectedDate: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      selectedTime: e.detail.value
    })
  }
})