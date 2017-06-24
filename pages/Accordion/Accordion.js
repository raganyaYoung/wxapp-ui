// pages/Accordion/Accordion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accordionConfig: ['农夫', '渔夫'],
    accordionIndex: '',
  },
  handleAccordion: function(e) {
    let accordionIndex = e.target.dataset.index;
    if(accordionIndex == this.data.accordionIndex) {
      this.setData({
        accordionIndex: ''
      })
    }else {
      this.setData({
        accordionIndex
      })
    }
  },
})