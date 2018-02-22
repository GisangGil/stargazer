/* global angular, console */

import 'ionic-sdk/release/js/ionic.bundle';

angular.module('app.filter.format-amount', [])
.filter('formatAmount', function (Language) {
	'use strict';

	return function (number) {
		const parts = number.split('.');
		if (parts.length === 2) {
			let numDecimals = parts[1].length;
			while (parts[1][numDecimals - 1] === '0') {
				numDecimals -= 1;
			}
			return parseFloat(number).toLocaleString(Language.getLocale(), {
				minimumFractionDigits: numDecimals,
				maximumFractionDigits: numDecimals
			});
		} else {
			return parseInt(parts[0]).toLocaleString(Language.getLocale());
		}
	};
});
