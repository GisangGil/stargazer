
/* global angular */

import 'ionic-sdk/release/js/ionic.bundle';

(function () {
	'use strict';

	class AccountInfoController {

		constructor(Horizon, Wallet) {
			this.Horizon = Horizon;
			this.Wallet = Wallet;

		}

		$onInit() {
			this.account = this.Wallet.current;
			const network = this.account.network;
			if (network !== this.Horizon.public) {
				this.network = this.Horizon.getNetwork(network).name;
			}
			this.lockClass = this.account.isLocallySecure() ? 'icon-lock' : 'icon-lock-open';
		}
	}

	angular.module('app.component.account-info', [])
	.component('accountInfo', {
		controller: AccountInfoController,
		controllerAs: 'vm',
		templateUrl: 'app/account/components/account-info.html'
	});
}());
