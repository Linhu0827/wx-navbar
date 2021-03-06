// tools/rolling_news/rolling_news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '滚动消息',
    showNav: true,
    back: true,

    newsList:[
      "如果100分是满分的话，有趣可以打100万分。",
      "正因为我的内心是自由的，所以我才能展开创造的羽翼！",
      "叙说梦想的时候自然是要笑的。"
    ],
    hotSearch: [
      "要是出了房间我可就输了。",
      "在开始之前怎么能就去想输了怎么办。",
      "那家伙嘲笑了我们的梦想，就是我们的敌人，我们两个一起干掉她吧！"
    ],
    animation:false,

    productList: [{
      img: '/img/backgroud/001_wximg.jpg',
      name: "我现在的心情就像，好不容易把最终boss打到一丝血，boss突然来了一个回复魔法回漫血槽的心情。",
      sale: 599,
      factory: 899,
      time: 2000
    },
    {
      img: '/img/backgroud/002_wximg.jpg',
      name: "说当做是游戏， 但是啊，游戏不认真的话就没意思了吧！正因为是游戏，所以才要竭尽全力唷！",
      sale: 29,
      factory: 69,
      time: 1000
    },
    {
      img: '/img/backgroud/003_wximg.jpg',
      name: "小说是为了让自己看才写的东西吧？只要正文有趣，名字根本无所谓。我只是在写小说而已，别的事我都不管。",
      sale: 299,
      factory: 699,
      time: 2200
    },
    {
      img: '/img/backgroud/004_wximg.jpg',
      name: "我总是会想起妹妹到我家来的那一天。像春天的雪一样虚幻的她，躲在母亲的身后。微微低着头，一直注视着我。",
      sale: 1599,
      factory: 2899,
      time: 1800
    },
    {
      img: '/img/backgroud/005_wximg.jpg',
      name: "我们的梦想”才不无趣！因为！因为是我们一起创造的！怎么可能输给你这种人！绝对！绝对！绝对不会输！",
      sale: 599,
      factory: 899,
      time: 1650
    },
    {
      img: '/img/backgroud/006_wximg.jpg',
      name: "在开始之前怎么能就去想输了怎么办。那家伙嘲笑了我们的梦想，就是我们的敌人，我们两个一起干掉她吧！",
      sale: 599,
      factory: 899,
      time: 1400
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevpage = pages[pages.length - 2];
    if(!prevpage)
      this.setData({ back: false })
  
    setTimeout(()=>{
      this.setData({
        animation:true
      })
    },600)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})