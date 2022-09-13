const processProxyArgument = arg => {
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
};

const proxyHandler = {
    get: function (obj, prop) {
        if (prop === Symbol.iterator) {
            return function* () {
                for (const key of Object.keys(obj)) yield obj[key];
            }
        };
        if (prop.length == 1) {
            return obj[processProxyArgument(prop)];
        } else {
            let s = Object.keys(obj).length;
            if (prop === "constructor") return eval(`vec${s}`);
            prop = prop.substring(0, 4).split("").map(p => obj[processProxyArgument(p)]);
            return eval(`vec${prop.length}`)(...prop);
        };
    },
    set: function (obj, _prop, _value) {
        obj[processProxyArgument(_prop)] = _value;
        return true;
    }
};

function vec2(x, y) {
    if (x === undefined) return vec2(0, 0);
    if (y === undefined) return vec2(x, x);
    [x, y] = [x, y].map(Number);
    let obj = {x, y}
    Object.seal(obj);
    return new Proxy(obj, proxyHandler);
};

function vec3(x, y, z) {
    if (x === undefined) return vec3(0, 0, 0);
    if (y === undefined) return vec3(x, x, x);
    if (z === undefined) throw error("Not enough data provided for construction");
    [x, y, z] = [x, y, z].map(Number);
    let obj = { x, y, z };
    Object.seal(obj);
    return new Proxy(obj, proxyHandler);
};

function vec4(x, y, z, w) {
    if (x === undefined) return vec4(0, 0, 0, 0);
    if (y === undefined) return vec4(x, x, x, x);
    if (z === undefined || w === undefined) throw error("Not enough data provided for construction");
    [x, y, z, w] = [x, y, z, w].map(Number);
    let obj = { x, y, z, w };
    Object.seal(obj);
    return new Proxy(obj, proxyHandler);
};

//instanceof support
[vec2, vec3, vec4].forEach(v => Object.defineProperty(v, Symbol.hasInstance, {
    value: function(i) {
        if(i.constructor == v) return true;
        else return false;
    }
}));

module.exports = { vec2, vec3, vec4 };
