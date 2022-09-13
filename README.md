# vecs.js
vecs.js is a (currently very rudimentary) Javascript implementation of the three vector data types found in the GL shader language.

As of current this module supports creating 2, 3 and 4 component vectors, as well as using all of the valid names in GLSL for accessing components, with support for swizzling.
There are no functions that you can use on them yet, I may implement those soon.

## Example Usage

#### Importing

```js
const { vec2, vec4 } = require("vecs.js");
```

#### Vectors and their components

```js
let vector1 = vec2(1, 0) // creates a vec2 with components 1 and 0
vector1.x = 5            // sets the first component equal to 5
console.log(vector1.sts) // logs { x: 5, y: 0, z: 5}
  
let vector2 = vec4(...vector1.yx, ...vec2(6, 7)) //creates a vec4 with vector1's components swapped as x and y, and a new vec2's components as z and w
vector2[0] = 4;                                  //sets the first component equal to 4
console.log(vector2.rgba)                        //logs { x: 4, y: 5, z: 6, w: 7 }
```

## Newest Update

This update to vecs.js adds a couple of new features:

- support for the `new` keyword when defining a vector
- support for strict mode
- acccess to a new `constructor` property which returns the appropriate vec function
- support for the `instanceof` operator

## Possible To-Do List

- port to TS so that they can actually be proper types
- split the three vectors into separate module files to implement methods
- implement typical vector methods (normalisation, zeroing, addition and subtraction, cross and dot products etc)
