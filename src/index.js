module.exports = function toReadable (number) {
    let numberWords = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    let dozens = {
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

        const length = number.toString().length
        const num = number.toString()
        let result = ''

        if (number <= 0) {
            return result += 'zero'
        }

        if (number <= 19) {
            return result += numberWords [number]
        }

        if (length === 2) {
            if (number % 10 === 0) {
                return result += dozens [num[0]]
            } else {
                return result += dozens [num[0]] + ' ' + numberWords [num[1]]
            }
        }

        if (length === 3) {
            if (number % 100 === 0) {
                return result += numberWords[num[0]] + ' hundred'
            }
            if (number % 100 <= 19) {
                return result += numberWords[num[0]] + ' hundred ' + numberWords[number % 100]
            }
            if (number % 100 > 19) {
                result += numberWords [num[0]] + ' hundred ' + dozens [num[1]] + ' ' + numberWords [num[2]]
            }
        }
        return result.trim()
}
