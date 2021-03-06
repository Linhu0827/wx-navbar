// tools/swipe-action/swipe-action.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageName: '滑动菜单',
    showNav: true,

    toggle: false,
    dataList:[{
      id:1,
      title:"她学习运动样样拿手，堪称完美美少女，她叫做土间埋。",
      img: '/img/backgroud/001_wximg.jpg'
    }, {
        id: 2,
        title: "但是小埋有个不为人知的秘密，在外光鲜亮丽的她只要一回到家里，就会变身成超懒惰又不顾形象的干物妹。",
        img: '/img/backgroud/002_wximg.jpg'
      }, {
        id: 3,
        title: "超爱打电动、看动画的小埋，还喜欢对着同居的哥哥撒娇，平凡和善的大平就这样一直被妹妹玩弄于股掌之间。",
        img: '/img/backgroud/003_wximg.jpg'
      }, {
        id: 4,
        title: "小埋家难得迎来了客人，小埋的同班同学海老名菜菜。",
        img: '/img/backgroud/004_wximg.jpg'
      }, {
        id: 5,
        title: "为此小埋一改往常邋遢的样子，还将家里收拾的干干净净，这让哥哥大平欣喜不已。",
        img: '/img/backgroud/005_wximg.jpg'
      }, {
        id: 6,
        title: "海老名就住在小埋家楼下，而她一直憧憬着温柔的大平。",
        img: '/img/backgroud/006_wximg.jpg'
      }, {
        id: 7,
        title: "小埋的同班同学橘·希尔芬福特发誓这次要考过小埋。",
        img: '/img/backgroud/007_wximg.jpg'
      }, {
        id: 8,
        title: "小埋让大平帮忙补习，成功守住了第一的宝座。",
        img: '/img/backgroud/008_wximg.jpg'
      }, {
        id: 9,
        title: "小埋是学校的明星人物，大家都很喜欢她，可与她同班的本场切绘总是用凶狠的眼光盯着她。",
        img: '/img/backgroud/001_wximg.jpg'
      }, {
        id: 10,
        title: "放学后，小埋正在家玩游戏，此时突然有人来访，而这个人竟然是本场……",
        img: '/img/backgroud/001_wximg.jpg'
      }, {
        id: 11,
        title: "因帽子上的徽章被称作“UMR”的小埋，是游戏厅里各类游戏的制霸之主。",
        img: '/img/backgroud/002_wximg.jpg'
      }, {
        id: 12,
        title: "今天她再次光临游戏厅，为了新推出的喵郎玩偶而来。",
        img: '/img/backgroud/003_wximg.jpg'
      }],
    actions: [
      {
        name: '删除',
        color: '#fff',
        fontsize: '22',
        width: 80,
        //icon: 'like.png',//此处为图片地址
        background: '#ed3f14'
      },
      {
        name: '修改',
        color: '#fff',
        fontsize: '22',
        width: 80,
        //icon: 'like.png',//此处为图片地址
        background: '#ff7900'
      },
      {
        name: '收藏',
        width: 80,
        color: '#80848f',
        fontsize: '22',
        //icon: 'undo'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pages = getCurrentPages();
    let prevpage = pages[pages.length - 2];
    if(!prevpage)
      this.setData({ back: false })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  handlerCloseButton(e) {
    let index = e.detail.index;
    let item = e.detail.item;
    let menuTxt = ["删除","修改","收藏"][index];
    wx.showToast({
      title: "您点击了【" + menuTxt+"】按钮，列表id："+item.id,
      icon:"none"
    })
  //list中可以每一项都设置toggle
    setTimeout(()=>{
       this.setData({
        toggle: this.data.toggle ? false : true
      });
    },200)
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onShareTimeline: function (){},

  
})