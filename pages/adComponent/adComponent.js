Page({
  data:{
    listData: [{
      title: '基础',
      items: [{
        left: 'Input',
        right: '输入框',
        noIcon: true,
        url: '../adInput/adInput'
      }, {
        left: 'Search',
        right: '搜索框',
        noIcon: true,
        url: '../Search/Search'
      }, {
        left: 'Radio',
        right: '单选框',
        noIcon: true,
        url: '../radioGroup/radioGroup'
      }, {
        left: 'Checkbox',
        right: '多选框',
        noIcon: true,
        url: '../checkGroup/checkGroup'
      }, {
        left: 'Badge',
        right: '徽章',
        noIcon: true,
        url: '../Badge/Badge'
      }, {
        left: 'Dialog',
        right: '对话框',
        noIcon: true,
        url: '../Dialog/Dialog'
      }, {
        left: 'Toast',
        right: '文字提示',
        noIcon: true,
        url: '../Toast/Toast'
      }, {
        left: 'Loading',
        right: '加载提示',
        noIcon: true,
        url: '../Loading/Loading'
      }]
    }, {
      title: '布局',
      items: [{
        left: 'List',
        right: '列表',
        noIcon: true,
        url: '../List/List'
      }, {
        left: 'Tabs',
        right: '选项卡',
        noIcon: true,
        url: '../Tabs/Tabs'
      }, {
        left: 'ActionSheet',
        right: '操作列表',
        noIcon: true,
        url: '../ActionSheet/ActionSheet'
      }]
    }, {
      title: '高级',
      items: [{
        left: 'Rate',
        right: '星级评分',
        noIcon: true,
        url: '../Rate/Rate'
      }, {
        left: 'Scroll',
        right: '下拉刷新',
        noIcon: true,
        url: '../Scroll/Scroll'
      }, {
        left: 'Accordion',
        right: '手风琴组件',
        noIcon: true,
        url: '../Accordion/Accordion'
      }, {
        left: 'Modal',
        right: '模态窗',
        noIcon: true,
        url: '../Modal/Modal'
      }]
    }],

  },
  getComponentDetail: function(e) {
    let url = e.currentTarget.dataset.url
    if(url) {
      wx.navigateTo({
        url,
      })
    }
  },
})