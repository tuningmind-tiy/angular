"use strict"

var app = angular.module('ourApp', ['morModulesApp', 'ngTagsInput'])

app.controller('TagsCtrl', TagsCtrl)

function TagsCtrl() {
  this.tags = [
    { text: 'Daffy' },
    { text: 'Donald' },
    { text: 'Huey' },
    { text: 'Duey' },
    { text: 'Louis' },
  ]
}

