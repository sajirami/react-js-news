import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* MARVEL: https://newsapi.org/ */

export const MARVEL_API_KEY = '1ec2084de7f2c99a03f96fa6ba027965';
export const PRIV_KEY = '3c0e2f20d6039a0d04489a3e2f6fa95fc5271cc5';
export const ts = new Date().getTime();
var crypto = require( 'crypto' );



export const hash = crypto.createHash( 'md5' ).update( ts + PRIV_KEY + MARVEL_API_KEY ).digest( 'hex' );
export const ENDPOINTS = {


    MARVEL_API_URL: "https://gateway.marvel.com:443/v1/public/characters?ts=" + ts + "&apikey=1ec2084de7f2c99a03f96fa6ba027965&hash=" + hash

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}