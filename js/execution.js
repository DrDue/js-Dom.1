'use strict'

document.write( `<h1>assignments JS-Dom.1</h1>` );

document.write( `<hr/>` );

document.write( `<h2>JS-Dom.0</h2>` );

document.write( 'heads: ' + heads + '<br>' );
document.write( 'tails: ' + tails + '<br>' );

document.write( `<hr/>` );

document.write( `<h2>JS-Dom.1</h2>` );

const handleSubmit = function ( e ) {
  let name = document.form.name;
  let bday = document.form.birthday;
  console.log( 'killoy was here' )
  let content = name.value + bday.value;
  createCookie( content, 42, 0.00694444 );
  console.log( readCookie( content ) );
  e.preventDefault();
  return false;

}

const doSomething = function () {
  document.addEventListener( 'submit', handleSubmit );
}
window.addEventListener( 'load', doSomething );
