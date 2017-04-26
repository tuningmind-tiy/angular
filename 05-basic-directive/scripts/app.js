var app = angular.module('app', [])

app.controller("superDuckCtrl", superDuckCtrl)
function superDuckCtrl () {
  this.duckname
}

app.directive("superDuck", function() {
  return {
    restrict: 'EAC',
    scope: { // isolate scope
      'duckname': '@'
    },
    link: function(scope, element, attrs) {
      scope.duckname = attrs.duckname || "Default Duck"
    },// register DOM listener
    template: "<div><p>Please tell me your coding twubbles so we can paddle to the finish line together.</p></p>Yours twuly, {{duckname}}</p></div>"
  }

})
