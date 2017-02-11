// pages/button/button.js
Page({
  data:{
    types: ['default', 'primary', 'warn'],
    sizes: ['default', 'mini'],
    hoverClass: 'button-hover'
  },
  handleHoverClass: function() {
    if(this.data.hoverClass === 'button-hover') {
      this.setData({
        hoverClass: 'none'
      })
    }else {
      this.setData({
        hoverClass: 'button-hover'
      })
    }
  }
})