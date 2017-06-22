// pages/Loading/Loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingShow: false,
    duration: 4000
  },
  handleLoading: function() {
    /**
     * [description]
     * @param  {[type]} ( [description]
     * @return {[type]}   [description]
     * 这里使用定时器展示
     * 在实际项目中应该是通过加载判断显示
     */
    setTimeout(() => {
      this.setData({
        loadingShow: !this.data.loadingShow
      })
    }, this.data.duration)
    this.setData({
      loadingShow: !this.data.loadingShow
    })
  },
})