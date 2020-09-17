"use strict";

function createCookie( name, value, days ) {
  let expires;
  if ( days ) {
    let date = new Date();
    date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie( name ) {
  let nameEQ = name + "=";
  let ca = document.cookie.split( ";" );
  for ( let i = 0; i < ca.length; i++ ) {
    let c = ca[ i ];
    while ( c.charAt( 0 ) == " " ) {
      c = c.substring( 1, c.length );
    }
    if ( c.indexOf( nameEQ ) == 0 ) {
      return c.substring( nameEQ.length, c.length );
    }
  }
  return null;
}

function eraseCookie( name ) {
  createCookie( name, "", -1 );
}

const $ = function ( foo ) {
  return document.getElementbyId( foo );
}
