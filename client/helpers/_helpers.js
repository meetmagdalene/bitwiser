Helpers = {

    prettyBinary: function (binary) {

        // prepend more zeros to make the binary
        // number display is pretty chunks of 4 ints
        while (binary.length % 4 !== 0) {
            binary = "0" + binary;
        }
        return binary.replace(/(.{4})/g, '$1 ').trim();
    },
    cleanBinary: function(binary) {
        // Strip the whiteplaces
        return binary.replace(/ /g, "").trim();
    }

};
