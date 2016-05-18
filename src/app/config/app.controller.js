
class AppCtrl{
  constructor($scope){
    this.socket = io();

    this.user = 'Bob';
    this.messageList = [];
    
    this.socket.on('data', (data) =>{
      this.messageList.push(data);
      $scope.$apply();
    });
    
    $scope.$on('$destroy', (event) =>{
      this.socket.removeAllListeners();
    });
    
  }
  msgAll(){
    var allMsg = {
      user: this.user,
      message: this.message
    };
    this.socket.emit('message', allMsg);
    this.message = null
  }
}

export default ['$scope', AppCtrl]