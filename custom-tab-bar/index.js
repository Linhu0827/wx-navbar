Component({
  data: {
    color: "#979795",
    selectedColor: "#1c1c1b",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "้ฆ้กต",
        iconPath: "/img/icon/icon_index.png",
        selectedIconPath: "/img/icon/icon_index_hl.png"
      },
      {
        pagePath: "/pages/sundog/sundog",
        bulge:true,
        iconPath: "/img/icon/icon_release_hl.png",
        selectedIconPath: "/img/icon/icon_release.png"
      },
      {
        pagePath: "/pages/user/user",
        text: "ๆ็",
        iconPath: "/img/icon/icon_user.png",
        selectedIconPath: "/img/icon/icon_user_hl.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})