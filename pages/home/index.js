const app = getApp()

Page({
  data: {
    pageName: '首页',
    showNav: false,

    func1: [
      { name: '单一列表图片懒加载', id: 1, color: 'red', url: '/pages/test1/test1' },
      { name: '轮播吸顶', id: 2, color: '#FFD31C', url: '/pages/test2/test2' },
      { name: '签名板', id: 3, color: '#09BFEA', url: '/pages/test3/test3' },
      { name: '日历选择', id: 4, color: '#09BFB6', url: '/pages/test4/test4' },
      { name: 'echarts', id: 5, color: '#09BF7B',url: '/echarts/index/index' },
    ],
  },
  onLoad: function () {
    
  },

  goModel(e){
    let url = e.currentTarget.dataset.url;
    if(url.length <= 0){
      url = '/pages/test' + idx + '/test' + idx;
    }
    
    wx.navigateTo({
      url: url,
    })
  },

  
})
