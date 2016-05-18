import 'angular'
import 'angular-ui-router'

import MainCtrl from './main/main.controller.js'
import MainConfig from './main/main.config.js'

import './services'

const DEPENDS = [
  'ui.router',
  'app.services'
];

angular.module('chap', DEPENDS)
  .controller('MainCtrl', MainCtrl)
  .config( MainConfig );