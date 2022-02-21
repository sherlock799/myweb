var app = new Vue({
  el: "#player",
  data: {
    // 查询关键字
    query: "q",
    // 歌曲数组
    musicList: [],
    musicUrl:"",
    musicCover:"",
    hotComments:[],
    isPlaying:false,
  },
  methods: {
    // 歌曲搜索
    searchMusic: function() {
      var thisData = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
        function(response) {
          // console.log(response);
          thisData.musicList = response.data.result.songs;
        },function(err) {}
      );
    },
    playMusic:function(musicId){
      var thisData  = this;
      axios.get("https://tenapi.cn/wyy/?id="+musicId).then(
        function(response){
          thisData.musicUrl = response.data.data.url;
        },function(err) {}
      )
      axios.get("https://tenapi.cn/wyyinfo/?id="+musicId).then(
        function(response){
          thisData.musicCover= response.data.data.cover;
        },function(err) {}
      )
      axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then(
        function(response){
          thisData.hotComments = response.data.hotComments;
        },function(err) {}
      )
    },
    play: function() {
      this.isPlaying = true;
    },
    pause: function() {
      this.isPlaying = false;
    },
    hide:function () {
      
    }
  }
});