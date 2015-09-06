module.exports = function(message, codeword) {
  var abc = "abcdefghijklmnopqrstuvwxyz",
      result = "",
      cipher,
      x,
      y;

  if (!message || !codeword) {
    return null;
  }

  for (var i = 0; i < message.length; i++) {
    if (abc.indexOf(message[i]) === -1) {
      result += message[i];
    } else {
      cipher = codeword[i % codeword.length];
      x = abc.indexOf(cipher);
      y = abc.indexOf(message[i]);
      result += abc[(y - x + abc.length) % abc.length];
    }
  }

  return result;
};