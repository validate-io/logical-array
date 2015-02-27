/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isLogicalArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-logical-array', function tests() {

	it( 'should export a function', function test() {
		expect( isLogicalArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isLogicalArray( [1,0,0,1,1] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[1,2,3],
			[1,'2',3],
			[[],[]],
			[true,true],
			[0,0,1,'1'],
			[1, new Number(1)]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isLogicalArray( value );
		}
	});

});
