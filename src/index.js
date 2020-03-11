const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let res = '';
  let arr = expr.split('');
  while (arr.length) {
    let letter = '';
    for (let i = 0; i <= 9; i++) {
        if (arr[0] === '*') {
          letter += ' ';
          i += 9;
        } 
        if (arr[i] === '1' && arr[i + 1] === '0') {
          letter += '.';
          i++;
        } else if (arr[i] === '1' && arr[i + 1] === '1') {
          letter += '-';
          i++;
          } 
    }
    res += MORSE_TABLE[letter] || letter;
    arr.splice(0, 10);
  }
  return res;
}

module.exports = {
    decode
}
