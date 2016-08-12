(function() {
  function AlbumCtrl() {
    this.albumData = albumPicasso;
    this.whatever = "foo";
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
