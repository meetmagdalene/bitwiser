/**
* Convert From/To Binary/Decimal/Hexadecimal in JavaScript
* https://gist.github.com/faisalman
*
* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>
* Licensed under The MIT License
* http://www.opensource.org/licenses/mit-license
*/

(function(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };

    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };

    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };

    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };

    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };

    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };

    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };

    this.ConvertBase = ConvertBase;

})(this);

hexToBinary = function(input) {

    var ret = '';
    var lookup = getLookup();

    for (var i = 0; i < input.length; i++) {
        if (lookup.hasOwnProperty(input[i])) {
            ret += lookup[input[i]];
        }
        else {
            return { valid: false };
        }
    }

    return { valid: true, result: addPadding(ret) };
}

binaryToHex = function(input) {


}

getLookup = function() {
    return {
        '0':'0000', '1':'0001', '2':'0010', '3':'0011', '4':'0100', '5':'0101',
        '6':'0110', '7':'0111', '8':'1000', '9':'1001', 'a':'1010', 'A':'1010',
        'b':'1011', 'B':'1011', 'c':'1100', 'C':'1100', 'd':'1101', 'D':'1101',
        'e':'1110', 'E':'1110', 'f':'1111', 'F':'1111'
    };
}

addPadding = function(str) {

    return str.replace(/(.{4})/g, "$1 ").trim();
}
