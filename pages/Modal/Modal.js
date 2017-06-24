// pages/Modal/Modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleWxModal: function() {
    wx.showModal({
      title: '标题',
      content: '我有一只小毛驴我从来也不骑',
      cancelText: '是吗？',
      confirmText: '哦',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '用户确定',
            icon: 'success',
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '用户取消',
            image: '../../images/delete.png'
          })
        }
      }
    })
  }
})