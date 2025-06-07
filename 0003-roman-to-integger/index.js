const romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    let last = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        if (romanValues[char] === undefined) {
            throw new Error(`Invalid roman numeral character: ${char}`);
        }
        const current = romanValues[char];
        if (current < last) {
            result -= current;
        } else {
            result += current;
        }
        last = current;
    }
    
    return result;
};