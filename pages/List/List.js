// pages/List/List.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listConfig: [{
      title: 'normal style',
      items: [{
        itemTitle: 'normal',
      }, {
        itemTitle: 'icon left',
        leftIcon: '../../images/heart.png',
        itemNote: 'note',
      }, {
        itemTitle: 'icon right',
        rightIcon: '../../images/heart.png',
        itemNote: 'note',
      }, {
        itemTitle: 'item title',
        itemNote: 'item note',
        arrowIcon: true,
        url: '22',
      }, {
        itemTitle: '好长好长好长好长好长的标题',
        itemNote: '好长好长好长好长好长的备注',
        leftIcon: '../../images/heart.png',
        rightIcon: '../../images/heart.png',
        arrowIcon: true,
        url: '33',
      }],
      handleListItem: 'handleListItem',
    }, {
      title: 'iOS style',
      iosStyle: true,
      items: [{
        itemTitle: 'item-1',
        itemNote: 'note-1',
      }, {
        itemTitle: 'item-2',
        itemNote: 'note-1',
      }, {
        itemTitle: 'item-3',
        itemNote: 'note-1',
      }]
    }],
    listItem: [{
      items: [{
        itemTitle: '文字',
        itemNote: '备注',
        arrowIcon: true,
        url: 'wenzi'
      }],
      handleListItem: 'handleListItem',
    }]
  },
  handleListItem: function(e) {
    let url = e.currentTarget.dataset.url
    console.log('redirect url', url)
    // do sth with url
    // if(url) {
    //   wx.navigateTo({
    //     url,
    //   })
    // }
  }
})