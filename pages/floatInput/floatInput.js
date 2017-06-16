// pages/floatInput/floatInput.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    contents: [{
      label: 'Username',
      placeholder: 'Username',
      inputType: 'text',
      maxlength: 15,
      change: 'handleUser',
      value: '',
      name: 'username',
    }, {
      label: 'Email',
      placeholder: 'Email',
      inputType: 'text',
      maxlength: 25,
      change: 'handleEmail',
      value: '',
      name: 'email',
    }, {
      label: 'Phone',
      placeholder: 'Phone',
      inputType: 'number',
      maxlength: 11,
      change: 'handlePhone',
      value: '',
      name: 'phone',
    }],
  },
  // onReady: function() {
  //   this.data.contents[1].value = '000'
  //   this.setData({
  //     contents: this.data.contents
  //   })
  // },
  handleUser: function(e) {
    this.data.contents[0].value = e.detail.value
    this.setData({
      contents: this.data.contents,
    })
  },
  handleEmail: function(e) {
    this.data.contents[1].value = e.detail.value
    this.setData({
      contents: this.data.contents,
    })
  },
  handlePhone: function(e) {
    this.data.contents[2].value = e.detail.value
    this.setData({
      contents: this.data.contents,
    })
  },
})