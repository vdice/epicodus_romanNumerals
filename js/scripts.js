function romanNumerals(num){
  var numerals = [{1: "I"},
                  {4: "IV"},
                  {5: "V"},
                  {9: "IX"},
                  {10: "X"},
                  {40: "XL"},
                  {50: "L"},
                  {90: "XC"},
                  {100: "C"},
                  {400: "CD"},
                  {500: "D"},
                  {900: "CM"},
                  {1000: 'M'}
                 ];
  var romanNumeralsArray = [];

  var number = num;
  for (var i = numerals.length-1; i >= 0; i--) {
    var key = Object.keys(numerals[i])[0];
    var difference = number - key;
    while (difference >= 0) {
      romanNumeralsArray.push(numerals[i][key]);
      number -= key;
      difference = number - key;
    }
  }

  return romanNumeralsArray.join('');
}
