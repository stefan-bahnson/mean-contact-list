var app = angular.module('app', [])
    .controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {

        /***************** booleans *****************/

        /*
        *   edit mode on/off
        */
        $scope.isEditState = false;

        /***************** ajax *****************/

        $http.get('/contactlist')
            .success(function(res){
                console.log("data received...");
                $scope.contactlist = res;
        });

        $scope.addContact = function(contact) {
            $http.post('/contactlist', contact)
                .success(function(res){
                    console.log(res);
                    $scope.contactlist.push(res);
                    clearInput()
                });
        };

        $scope.remove = function(contact, index){
            $http.delete('/contactlist/' + contact._id)
                .success(function(){
                    $scope.contactlist.splice(index, 1);
                    console.log(contact.name + " removed successfully...");
                });
        };

        $scope.edit = function (contact) {
            $scope.isEditState = true;
            $http.get('/contactlist/' + contact._id)
                .success(function(res){
                    $scope.contact = res;
                });
        };

        $scope.update = function (contact, index) {
            $http.put('/contactlist/' + contact._id, contact)
                .success(function(res) {
                    $scope.contactlist.splice(index, 1, res);
                    console.log(contact.name + " updated...");
                    clearInput()
                });
        };

        /***************** utility functions *****************/

        /*
        *   clear input fields
        */
        function clearInput () {
            $scope.contact = "";
        };

        /*
        *   cancel edit mode
        */
        $scope.cancelEdit = function() {
            clearInput()
            $scope.isEditState = false;
        };

    }]);