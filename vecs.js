const vec2 = (a, b) => {
    const obj = {
        x: a,
        y: b,
    };

    const processProxyArgument = (arg) => {
        arg = arg.toString();
            switch (arg) {
                case "0":
                case "r":
                case "s":
                    arg = "x";
                    break;
                case "1":
                case "g":
                case "t":
                    arg = "y";
                    break;
        }
        return arg;
    }

    const proxyHandler = {
        get: function (obj, prop) {
            if (prop.length == 1) { 
                return obj[processProxyArgument(prop)];
            } else {
                return prop.substring(0, 4).split("").map(p => obj[processProxyArgument(p)]);
            }       
        },
        set: function (obj, prop, value) {
            obj[processProxyArgument(prop)] = value;
        }
    }

    let out = new Proxy(obj, proxyHandler);
    return out;
};

const vec3 = (a, b, c) => {
    const obj = {
        x: a,
        y: b,
        z: c
    };

    const processProxyArgument = (arg) => {
        arg = arg.toString();
            switch (arg) {
                case "0":
                case "r":
                case "s":
                    arg = "x";
                    break;
                case "1":
                case "g":
                case "t":
                    arg = "y";
                    break;
                case "2":
                case "b":
                case "p":
                    arg = "z";
                    break;
        }
        return arg;
    }

    const proxyHandler = {
        get: function (obj, prop) {
            if (prop.length == 1) { 
                return obj[processProxyArgument(prop)];
            } else {
                return prop.substring(0, 4).split("").map(p => obj[processProxyArgument(p)]);
            }            
        },
        set: function (obj, prop, value) {
            obj[processProxyArgument(prop)] = value;
        }
    }

    let out = new Proxy(obj, proxyHandler);
    return out;
}

const vec4 = (a, b, c, d) => {
    const obj = {
        x: a,
        y: b,
        z: c,
        w: d
    };

    const processProxyArgument = (arg) => {
        arg = arg.toString();
            switch (arg) {
                case "0":
                case "r":
                case "s":
                    arg = "x";
                    break;
                case "1":
                case "g":
                case "t":
                    arg = "y";
                    break;
                case "2":
                case "b":
                case "p":
                    arg = "z";
                    break;
                case "3":
                case "a":
                case "q":
                    arg = "w";
                    break;
        }
        return arg;
    }

    const proxyHandler = {
        get: function (obj, prop) {
            if (prop.length == 1) { 
                return obj[processProxyArgument(prop)];
            } else {
                return prop.substring(0, 4).split("").map(p => obj[processProxyArgument(p)]);
            }            
        },
        set: function (obj, prop, value) {
            obj[processProxyArgument(prop)] = value;
        }
    }

    let out = new Proxy(obj, proxyHandler);
    return out;
}

export default { vec2, vec3, vec4 };