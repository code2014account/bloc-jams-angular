(function() {
    function seekBar() {
      return {

        attributes.$observe('value', function(newValue) {
    scope.value = newValue;
});

attributes.$observe('max', function(newValue) {
    scope.max = newValue;
});
     templateUrl: '/templates/directives/seek_bar.html',
     replace: true,
     restrict: 'E'

             scope.value = 0;
             scope.max = 100;

             var percentString = function () {
                 var value = scope.value;
                 var max = scope.max;
                 var percent = value / max * 100;
                 return percent + "%";
             };

             scope.fillStyle = function() {
                 return {width: percentString()};
             };
 };
    }

    var notifyOnChange = function(newValue) {
    if (typeof scope.onChange === 'function') {
        scope.onChange({value: newValue});
    }
};

    angular
        .module('blocJams')
        .directive('seekBar', seekBar);
})();
