(function () {
    'use strict';

    angular.module('app', ['packery-angular'])
        .controller('AppController', ['$scope', '$timeout', function ($scope, $timeout, $rootScope) {
            var colors = ['red', 'green', 'blue'];

            var vm = this;

            ///////////////////////////
            //////////ALERTS///////////
            ///////////////////////////            

            vm.alerts = [
                {
                    content: 'Alert 1',
                    id: '1',
                    style: {}
                },
                {
                    content: 'Alert 2',
                    id: '2',
                    style: {}
                },{
                    content: 'Alert 3',
                    id: '3',
                    style: {}
                },{
                    content: 'Alert 4',
                    id: '4',
                    style: {}
                },{
                    content: 'Alert 5',
                    id: '5',
                    style: {}
                },{
                    content: 'Alert 6',
                    id: '6',
                    style: {}
                },{
                    content: 'Alert 7',
                    id: '7',
                    style: {}
                },{
                    content: 'Alert 8',
                    id: '8',
                    style: {}
                },{
                    content: 'Alert 9',
                    id: '9',
                    style: {}
                },{
                    content: 'Alert 10',
                    id: '10',
                    style: {}
                },{
                    content: 'Alert 11',
                    id: '11',
                    style: {}
                },{
                    content: 'Alert 12',
                    id: '12',
                    style: {}
                },{
                    content: 'Alert 13',
                    id: '13',
                    style: {}
                },{
                    content: 'Alert 14',
                    id: '14',
                    style: {}
                },{
                    content: 'Alert 15',
                    id: '15',
                    style: {}
                },{
                    content: 'Alert 16',
                    id: '16',
                    style: {}
                },{
                    content: 'Alert 17',
                    id: '17',
                    style: {}
                },{
                    content: 'Alert 18',
                    id: '18',
                    style: {}
                },
            ];

            vm.alertOptions = {
                isDraggable: true,
                itemSelector: '.grid-item',
                refreshOnRemove: false,
                columnWidth: '.grid-sizer',
                isAppended: false, // This must be false to add items at the beginning (prepend), but it has a weird behavior
                percentPosition: true,
                // isHorizontal: true, // This is destroying the layout
                containerStyle: {
                    position: 'relative',
                    display: 'block',
                    border: '1px solid grey',
                    'min-height': '200px'
                }
            };

            vm.removeAlert = function (index) {
                vm.alerts.splice(index, 1);
            }            

            vm.addAlert = function (index) {
                vm.alerts.push({
                    content: 'NUEVOOOO',
                    style: {
                        'background-color': 'purple',
                    }
                });
            }


            ///////////////////////////
            //////////WIDGETS//////////
            ///////////////////////////

            vm.widgets = [{
                content: 'Starting box! More boxes should appear after 2 seconds!',
                style: {}
            }];

            vm.widgetOptions = {
                columnWidth: 100,
                isDraggable: true,
                itemSelector: '.pa-item',
                refreshOnRemove: false, // This is a new Param added to the directive
                isAppended: false,
                containerStyle: {
                    position: 'relative',
                    display: 'block',
                    border: '1px solid grey',
                    'min-height': '200px'
                }
            };

            for (var i = 0; i < 10; ++i) {
                addItem({
                    content: 'This is box #' + i + '.',
                    style: {
                        width: (100 * ((i % 3) + 1)) + 'px',
                        height: (100 * (((i + 2) % 3) + 1)) + 'px',
                        'background-color': colors[i % 3],
                    }
                }, 2000 + i * 1000);
            }

            function addItem (item, delay) {
                $timeout(function () {
                    vm.widgets.unshift(item);
                }, delay || 0);
            }            

            vm.removeWidget = function (index) {
                vm.widgets.splice(index, 1);
            }            

            vm.addWidget = function (index) {
                addItem({
                    content: 'NUEVOOOO',
                    style: {
                        'background-color': 'purple',
                    }
                });
            }

            ///////////////////////////

            $scope.$on("$paItemDestroyed", function(ev, el){
                console.log('Renmoved');
                console.log(el);
            });

            // SAVE AND RESTORE POSITIONS
            // http://codepen.io/fabianveliz/details/PmBBgN/
        }]);
})();
