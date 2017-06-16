// pages/defaultInput/defaultInput.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    contents: [{
      label: '用户名',
      placeholder: '用户名',
      inputType: 'text',
      maxlength: 15,
      change: 'handleUser',
      value: 'huahua',
      name: 'user'
    }, {
      label: '密码',
      placeholder: '密码',
      inputType: 'text',
      password: true,
      maxlength: 6,
      change: 'handlePassword',
      value: '',
      name: 'pwd'
    }],
    phone: {
      placeholder: '手机',
      inputType: 'number',
      maxlength: 11,
      change: 'handlePhone',
      value: '',
      name: 'pwd'
    },
  },
  handleUser: function(e) {
    console.log('user', e.detail.value)
  },
  handlePassword: function(e) {
    console.log('password', e.detail.value)
  },
  formSubmit: function(e) {
    console.log('form', e.detail.value)
  },
  handlePhone: function(e) {
    console.log('phone', e.detail.value)
  },
})