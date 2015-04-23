'use strict';

// mtl/promise
describe('mtl-promise', function() {

	var Promise = require('../src/index');
	
	var adapter = {
		
		resolved: function(value) {
			
			return new Promise(function(resolve) {
				resolve(value);
			});
			
		},
		
		rejected: function(reason) {
			
			return new Promise(function(resolve, reject) {
				reject(reason);
			});
			
		},
		
		deferred: function() {
			
			var deferred = {};
			
			deferred.promise = new Promise(function(resolve, reject) {
				
				deferred.resolve = function(value) {
					resolve(value);
				};
				
				deferred.reject = function(reason) {
					reject(reason);
				};
				
			});
		
			return deferred;
			
		}
		
	};
	
	require('promises-aplus-tests').mocha(adapter);
	
});
