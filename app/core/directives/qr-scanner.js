/* global angular, cloudSky, cordova */

import 'ionic-sdk/release/js/ionic.bundle';

angular.module('app.directive.qr-scanner', [])
.directive('qrScanner', function (QRScanner) {
	'use strict';

	return {
		restrict: 'E',
		scope: {
			onScan: '&'
		},
		controller: controller,
		replace: true,
		template: '<a id="camera-icon" class="p10" ng-click="openScanner()"><i class="icon-scan size-21"></i></a>'
	};

	function controller($scope) {
		$scope.openScanner = function () {
			QRScanner.open()
			.then(data => {
				$scope.onScan({
					data: data
				});
			});
		}
	}
});
