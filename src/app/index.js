import 'angular'
import 'angular-ui-router'

import AppCtrl from './config/app.controller.js'
import AppConfig from './config/app.config.js'

const DEPENDS = [
  'ui.router'
];

angular.module('chap', DEPENDS)
  .controller('AppCtrl', AppCtrl)
  .config( AppConfig );