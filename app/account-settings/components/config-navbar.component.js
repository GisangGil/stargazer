/* global angular */

import 'ionic-sdk/release/js/ionic.bundle';

(function () {
	'use strict';

	class ConfigNavbarController {

		constructor($rootScope) {
			this.$rootScope = $rootScope;
		}

		goBack() {
			this.$rootScope.goBack();
		}
	}

	angular.module('app.component.config-navbar', [])
	.component('configNavbar', {
		bindings: {
			heading: '@',
			back: '@'
		},
		controller: ConfigNavbarController,
		controllerAs: 'vm',
		templateUrl: 'app/account-settings/components/config-navbar.html'
	});
}());

