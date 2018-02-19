(function(){

    angular.module('LunchBoxCheck', [])
    .controller('LunchBoxCheckControl', LunchBoxCheckControl);

    //mini protection
    LunchBoxCheckControl.$inject = ['$scope'];
    function LunchBoxCheckControl($scope){
        $scope.lunchItems = "";
        $scope.tooMuch = 'Too Much!';
        $scope.enjoy = 'Enjoy!';
        $scope.empty = 'Please Enter Data First!';
        $scope.message = "";

        $scope.count = function(){
            var arr = $scope.lunchItems.split(',');
            var itemCount = 0;

            //calculate item count ignoring empty string
            arr.forEach(function(cur){
                if(cur.trim() !== ''){
                    itemCount++;
                }
            })

            if(itemCount === 0){
                $scope.message = $scope.empty;
            }else if(itemCount < 4){
                $scope.message = $scope.enjoy;
            }else{
                $scope.message = $scope.tooMuch;
            }
        }
    }

})();