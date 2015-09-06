module.exports = function (str) {

  var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      result = [],
      curr, //current working byte
      prev, //previous byte
      bytePosition;

  if (str.length === 0) {
    console.log('INVALID INPUT!');
    return null;
  } else if (/([^\u0000-\u00ff])/.test(str)) {
    console.log('ENTER A VALID STRING!');
    return null;
  }

  for(var i = 0; i < str.length; i++) {
    curr = str.charCodeAt(i);
    bytePosition = i % 3; //base64 is calculated in groups of 3 bytes

    switch(bytePosition){
      case 0: //first byte
        result.push(charset.charAt(curr >> 2));
        break;

      case 1: //second byte
        result.push(charset.charAt((prev & 3) << 4 | (curr >> 4)));
        break;

      case 2: //third byte
        result.push(charset.charAt((prev & 0x0f) << 2 | (curr >> 6)));
        result.push(charset.charAt(curr & 0x3f));
        break;
    }

    prev = curr;
  }

  //padding
  if (bytePosition === 0) {
    result.push(charset.charAt((prev & 3) << 4));
    result.push("==");
    return result.join('');
  } else if (bytePosition === 1) {
    result.push(charset.charAt((prev & 0x0f) << 2));
    result.push("=");
    return result.join('');
  } else {
    return result.join('');
  }

};