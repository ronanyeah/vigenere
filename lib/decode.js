module.exports = function (str) {

  var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      result = [],
      prev,
      curr,
      bytePosition;

  str = str.replace(/\s+/g, ""); //removes whitespace

  if (0 === str.length) {
    console.log('INVALID INPUT!');
    return null;
  } else if (!/^[a-z0-9\+\/\s]+\={0,2}$/i.test(str) || str.length % 4 > 0) {
    console.log('ENTER A VALID STRING!');
    return null;
  }

  str = str.replace(/=/g, "");

  for (var i = 0; i < str.length; i++) {
    curr = charset.indexOf(str.charAt(i));
    bytePosition = i % 4;
    switch (bytePosition) {
      case 0:
        break;
      case 1:
        result.push(String.fromCharCode(prev << 2 | curr >> 4));
        break;
      case 2:
        result.push(String.fromCharCode((15 & prev) << 4 | curr >> 2));
        break;
      case 3:
        result.push(String.fromCharCode((3 & prev) << 6 | curr));
    }
    prev = curr;
  }
  
  return result.join("");

};