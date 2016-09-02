(function() {
  function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getCollection(12);
        console.log(this.albums)
  }

  angular
    .module('blocJams')
    .controller('CollectionCtrl', CollectionCtrl);
})();
