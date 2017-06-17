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
        url: '../checkbox/checkbox'
      }, {
        left: 'Toast',
        right: '文字提示',
        noIcon: true,
        url: '../checkbox/checkbox'
      }, {
        left: 'Loading',
        right: '加载提示',
        noIcon: true,
        url: '../checkbox/checkbox'
      }]
    }, {
      title: '布局',
      items: [{
        left: 'Header',
        right: '页头',
        noIcon: true,
        url: '../icon/icon'
      }, {
        left: 'List',
        right: '列表',
        noIcon: true,
        url: ''
      }, {
        left: 'Cells',
        right: '宫格',
        noIcon: true,
        url: '../progress/progress'
      }, {
        left: 'Tabs',
        right: '选项卡',
        noIcon: true,
        url: '../progress/progress'
      }, {
        left: 'ButtonBar',
        right: 'IOS选项卡',
        noIcon: true,
        url: '../progress/progress'
      }, {
        left: 'Scalable',
        right: '缩放',
        noIcon: true,
        url: '../progress/progress'
      }]
    }, {
      title: '高级',
      items: [{
        left: 'Scroll',
        right: '下拉刷新，无限加载',
        noIcon: true,
        url: '../button/button'
      }, {
        left: 'Cascade',
        right: '级联',
        noIcon: true,
        url: '../radio/radio'
      }, {
        left: 'Accordion',
        right: '手风琴组件',
        noIcon: true,
        url: '../input/input'
      }, {
        left: 'Popup',
        right: '自定义弹层',
        noIcon: true,
        url: '../textarea/textarea'
      }, {
        left: 'ActionSheet',
        right: '操作列表',
        noIcon: true,
        url: '../picker/picker'
      }, {
        left: 'Sidebar',
        right: '侧边栏',
        noIcon: true,
        url: '../pickerView/pickerView'
      }, {
        left: 'Modal',
        right: '模态窗',
        noIcon: true,
        url: '../form/form'
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