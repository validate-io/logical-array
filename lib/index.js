/**
*
*	VALIDATE: logical-array
*
*
*	DESCRIPTION:
*		- Validates if a value is a logical array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNumber = require( 'validate.io-number' );


// IS LOGICAL ARRAY //

/**
* FUNCTION: isLogicalArray( value )
*	Validates if a value is a logical array; i.e., an array consisting only of 0s and 1s.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a logical array
*/
function isLogicalArray( value ) {
	var len, val;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		val = value[ i ];
		if ( !isNumber( val ) || (val !== 0 && val !== 1) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isLogicalArray()


// EXPORTS //

module.exports = isLogicalArray;
