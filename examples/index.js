'use strict';

var isLogicalArray = require( './../lib' );

console.log( isLogicalArray( [1,0,0,1,1] ) );
// returns true

console.log( isLogicalArray( [] ) );
// returns false

console.log( isLogicalArray( [true,false] ) );
// returns false

console.log( isLogicalArray( [1,2,3] ) );
// returns false
