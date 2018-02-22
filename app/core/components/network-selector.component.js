/* global angular */

import 'ionic-sdk/release/js/ionic.bundle';

class NetworkSelectorController {

	constructor(Horizon) {
		this.networks = Horizon.getNetworks();
		this.Horizon = Horizon;
	}

	$onInit() {
		if (!this.network) {
			this.network = this.Horizon.public;
		}
	}

	hash(network) {
		return this.Horizon.getHash(network.phrase);
	}
}

angular.module('app.component.network-selector', [])
.component('networkSelector', {
	bindings: {
		network: '='
	},
	controller: NetworkSelectorController,
	controllerAs: 'vm',
	templateUrl: 'app/core/components/network-selector.html'
});

