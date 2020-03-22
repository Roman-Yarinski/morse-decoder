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
    let arr =[],
        res = [];
    arr = expr.split('**********');

    for (let i = 0; i < arr.length; i++ ) {
        let elment = arr[i];
        let str_sec = '';
        for (let j = 0; j < elment.length ; j+=10) {
            let elment_sec = elment.slice(j, j+10);
            let str = '';
            for (let g = 0; g < elment_sec.length; g += 2) {
                let compare = (elment_sec[g] + '' + elment_sec[g+1]);
                if (compare === '10') {
                    str += '.';
                } else if (compare === '11') {
                    str += '-';
                }
            }
            str_sec += MORSE_TABLE[str];
        }
        res.push(str_sec);
    }
    return res.join(' ');
}

module.exports = {
    decode
}