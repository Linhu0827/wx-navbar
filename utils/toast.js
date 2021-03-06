module.exports = {
  toast(title, isIcon = 'none', duration = 2500, mask = true) {
    wx.showToast({
      title: title,
      icon: isIcon,
      duration: duration,
      mask: mask
    })
  }
}