// pages/Dialog/Dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      left: 'Alert',
      right: '提示框',
      noIcon: true,
      url: 'Alert'
    }, {
      left: 'Confirm',
      right: '确认框',
      noIcon: true,
      url: 'Confirm'
    }, {
      left: 'iOS Alert',
      right: 'iOS 风格提示框',
      noIcon: true,
      url: 'iOSAlert'
    }, {
      left: 'iOS Confirm',
      right: 'iOS 风格确认框',
      noIcon: true,
      url: 'iOSConfirm'
    }],
    maskHidden: true,

    alertMsg: {
      content: 'ddd',
    },
    alertHidden: true,

    confirmMsg: {
      content: '在微信中打开连接吗',
      bindConfirmClear: 'bindConfirmClear'
    },
    confirmHidden: true,
  },
  getComponentDetail: function(e) {
    let url = e.currentTarget.dataset.url

    this.setData({
      maskHidden: false,
    })

    switch(url) {
      case 'Alert':
        this.setData({
          alertHidden: false
        })
        break;
      case 'Confirm':
        this.setData({
          confirmHidden: false
        })
        break;
    }
  },
  bindAlertClear: function() {
    this.setData({
      maskHidden: true,
      alertHidden: true,
    })
  },
  bindConfirmClear: function() {
    this.setData({
      maskHidden: true,
      confirmHidden: true,
    })
  },
  bindConfirm: function() {
    this.setData({
      maskHidden: true,
      confirmHidden: true,
    })
    //do sth confirmed
  },
})