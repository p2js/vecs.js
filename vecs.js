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
        if (prop === Symbol.iterator) {
            return function* () {
                for(const key of Object.keys(obj)) yield obj[key];
            }
        }
        if (prop.length == 1) {
            return obj[processProxyArgument(prop)];
        } else {
            prop = prop.substring(0, 4).split("").map(p => obj[processProxyArgument(p)]);
            return eval(`vec${prop.length}`)(...prop);
        }
    },
    set: function (obj, prop, value) {
        obj[processProxyArgument(prop)] = value;
    }
};

const vec2 = (x, y) => {
    if(x === undefined) return vec2(0, 0);
    if(y === undefined) return vec2(x, x);
    x = Number(x);
    y = Number(y);
    let out = new Proxy({ x, y }, proxyHandler);
    return out;
};

const vec3 = (x, y, z) => {
    if(x === undefined) return vec3(0, 0, 0);
    if(y === undefined) return vec3(x, x, x);
    if(z === undefined) throw error("Not enough data provided for construction");
    x = Number(x);
    y = Number(y);
    z = Number(z);
    let out = new Proxy({ x, y, z }, proxyHandler);
    return out;
}

const vec4 = (x, y, z, w) => {
    if (x === undefined) return vec3(0, 0, 0);
    if (y === undefined) return vec3(x, x, x);
    if (z === undefined) throw error("Not enough data provided for construction");
    if (w === undefined) throw error("Not enough data provided for construction");
    x = Number(x);
    y = Number(y);
    z = Number(z);
    w = Number(w);
    let out = new Proxy({ x, y, z, w }, proxyHandler);
    return out;
}

export default { vec2, vec3, vec4 };
