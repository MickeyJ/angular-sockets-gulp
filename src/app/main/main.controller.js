/** @namespace this */
/** @namespace UserService.currentUser */

class MainCtrl{
  constructor($scope, UserService){
    this.socket = io();

    this.user = UserService.currentUser;
    this.messageList = [];

    this.socket.on('data', (data) =>{
      this.messageList.push(data);
      $scope.$apply();
    });

    $scope.$on('$destroy', (event) =>{
      this.socket.removeAllListeners();
    });

  }
  sendMessage(){
    var allMsg = {
      user: this.user,
      message: this.message
    };
    this.socket.emit('message', allMsg);
    this.message = null
  }
}

export default ['$scope', 'UserService', MainCtrl]