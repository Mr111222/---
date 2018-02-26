var app = angular.module('app',[]);
app.controller('ctrl1',['$scope','$rootScope',function($scope,$rootScope){
	$scope.zz = [
		{name:'z1',id:1},
		{name:'z2',id:2},
		{name:'z3',id:3},
		{name:'z4',id:4},
		{name:'z5',id:5},
		{name:'z6',id:6},
		{name:'z7',id:7},
		{name:'z8',id:8},
		{name:'z9',id:9},
		{name:'z10',id:10}
	];
	$scope.arrDate = [];
	$scope.all = function(i){
		$scope.arrDate = []; //点击全选，数据清空一下，防止数据重复
		var isCheck = $scope.totalChecked ? true : false;

        //以下都是这样 -->如果选中就push到里面，else就是清空删除
        angular.forEach($scope.zz, function(item) {
            item.checked = isCheck;
            if (isCheck) {
                if ($scope.arrDate.indexOf(item.id) == -1) {
                    $scope.arrDate.push({
                        id: item.id,
                        name: item.name
                    });
                }
            } else {
                angular.forEach($scope.arrDate, function(sub, index) {
                    if (sub.id == item.id) {
                        $scope.arrDate.splice(index, 1);
                    }
                });
            }
        });

	}


	//单选
	$scope.only = function(i){
		if(i.checked){
			if($scope.arrDate.indexOf(i.id) == -1){
				$scope.arrDate.push({
					id:i.id,
					name:i.name
				})
			}
		}else{
			angular.forEach($scope.arrDate, function(sub, index) {
                if (sub.id == i.id) {
                    $scope.arrDate.splice(index, 1);
                }
            });
		}
	}

	//导出自己处理
	$scope.send = function(){
		console.log($scope.arrDate,345)
	}
}])