ObjectUrlEncoder = function(){
    var convert = function(data, prefix){
        prefix = typeof(prefix) != 'string' ? '' : prefix;
        var format_key = function(name){
            if (!prefix) {
                return name;
            }

            return prefix + '[' + name + ']';
        };

        var qstr = [];
        var key;
        var i;
        for (key in data) {
            if (!data[key]) {
                continue;
            }

            if (typeof(data[key]) == 'string' || typeof(data[key]) == 'number') {
                // scalar
                qstr.push(format_key(key) + '=' + encodeURIComponent(data[key]));
            } else if (data[key].length) {
                // array
                for (i = 0; i < data[key].length; i++) {
                    qstr.push(format_key(key) + '[]' + '=' + encodeURIComponent(data[key][i]));
                }
            } else if (typeof(data[key]) == 'object') {
                // object
                qstr.push(convert(data[key], format_key(key)));
            }
        }

        return qstr.join('&');
    };

    return convert;
};
