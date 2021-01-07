// miniprogram/pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  data:{
    shows:false,
    selectData : ['python','javascript','matlab','C++','ppt','excel'],
    indexs:0,
  },

  selectTaps(){
    this.setData({
      shows: !this.data.shows,
    });
  },

  optionTaps(e) {
    let Indexs = e.currentTarget.dataset.index;
    console.log(Indexs)
    this.setData({
      indexs:Indexs,
      shows: !this.data.shows
    });

  },

  infoClick: function() {
    wx.navigateTo({
      url: '../index/index',
    })
  } 
})