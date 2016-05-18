import 'angular'

import UserService from './user.service.js'
import JWT from './jwt.service.js'

export default (
  angular.module('app.services', [])
    .service('JWT', JWT)
    .service('UserService', UserService)
);