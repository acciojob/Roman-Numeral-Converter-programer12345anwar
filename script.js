function convertToRoman(num) {
    const obj = {
      0: ['M', 1000],
      1: ['D', 500],
      2: ['C', 100],
      3: ['L', 50],
      4: ['X', 10],
      5: ['V', 5],
      6: ['I', 1]
    };

    let roman = '';

    const keys = Object.keys(obj);

    // Special cases for subtractive notation
    const special = {
      900: 'CM',
      400: 'CD',
      90: 'XC',
      40: 'XL',
      9: 'IX',
      4: 'IV'
    };

    for (let value of Object.keys(special).sort((a, b) => b - a)) {
      while (num >= value) {
        roman += special[value];
        num -= value;
      }
    }

    for (let i = 0; i < keys.length; i++) {
      const symbol = obj[i][0];
      const value = obj[i][1];
      while (num >= value) {
        roman += symbol;
        num -= value;
      }
    }

    return roman;
}

// Example Test
// console.log(convertToRoman(36)); // Should output XXXVI

// Do not edit below this line
module.exports = convertToRoman;

