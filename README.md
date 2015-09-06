# vigenere
npm package for basic encoding and decoding.

Based on the [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

# Example

```javascript
var Vigenere = require('vigenere');

var secretMessage = Vigenere.encode('omg total secret', 'hax0rk3y');
// => 'vmd kysys pdtbdr'

var decodedMessage = Vigenere.decode('vmd kysys pdtbdr', 'hax0rk3y');
// => 'omg total secret'

```