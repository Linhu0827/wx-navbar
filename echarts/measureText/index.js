const app = getApp();

Page({
  data: {
    pageName: 'ECharts 图表示例',
    showNav: true,
    value: null
  },

  onReady() {
    var ctx = wx.createCanvasContext('measure');
    var value = ctx.measureText('国国国国', '12px san-serif');
    this.setData({
      value: value.width
    });
  }
});
