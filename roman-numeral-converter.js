let numInput = document.getElementById('number');
let resultArea = document.getElementById('result');
numInput.oninput = function() {
    let romanNumbers = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM'
    };
    let num = numInput.value;
    let regExp = /[^0-9]/;
    if (regExp.test(num) == false && num && num > 0 && num < 4000) {
        if (romanNumbers[num] != undefined) {
            resultArea.innerHTML = romanNumbers[num];
        } else {
            let number = num;
            let romanStr = '';
            let intermediateNum;
            let len = toString(num).length;
            for (let i = len - 1; i > 0; i--) {
                intermediateNum = romanNumbers[number - number % (10 ** i)];
                if (intermediateNum != undefined) {
                    romanStr += intermediateNum;
                }
                number = number % (10 ** i);
            }
            romanStr += romanNumbers[number];
            resultArea.innerHTML = romanStr;
        }
    } else if (!num) {
        resultArea.innerHTML = '';
    } else if (num >= 4000){
        resultArea.innerHTML = 'too big';
    } else if (num < 1){
        resultArea.innerHTML = 'too small';
    }
}