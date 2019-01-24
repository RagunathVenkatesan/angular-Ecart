(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller)
        .filter('range', function () {
            return function (n) {
                var res = [];
                for (var i = 0; i < n; i++) {
                    res.push(i);
                }
                return res;
            };
        });;

    function Controller(ModalService) {
        var vm = this;
        vm.openModal = openModal;
        vm.closeModal = closeModal;
        vm.textchanged = textchanged;
        vm.savemodal = savemodal;
        vm.shelfobject = [];
        vm.getNumber = getNumber;
        initController();

        function initController() {
            vm.noofshelf = 1;
        }
        
        function openModal(id){
            ModalService.Open(id);
        }
        function savemodal(id) {
            console.log(vm.shelfobject);
            ModalService.Close(id);
        }
        function textchanged() {
            vm.shelfobject.length = 0;
            for (var i = 0; i < vm.noofshelf; i++) {
                var tempObj1 = {
                    "Name": "Shelf"+ i,
                    "Row": 0,
                    "Column": 0
                };
                vm.shelfobject.push(tempObj1);
            }
            console.log(vm.shelfobject);
        }
        function closeModal(id){
            ModalService.Close(id);
        }
        function getNumber(num) {
            console.log(new Array(num));
            return new Array(num);
        }
    }

})();