'use strict';

var toArray = require('../../../array/to-array')

  , f = function () { return toArray(arguments); };

module.exports = function (t, a) {
	var x, y = {};
	a.deep(t.call(f, 0, 1, 2)(3), [], "0 arguments");
	x = t.call(f, 5, {});
	a.deep(x(1, 2)(3, 4)(5, 6), [1, 2, 3, 4, 5], "Many arguments");
	a.deep(x(8, 3)(y, 45)('raz', 6), [8, 3, y, 45, 'raz'], "Many arguments #2");
};
