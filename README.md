# vecs.js
vecs.js is a (currently very rudimentary) Javascript implementation of the three vector data types found in the GL shader language.

As of current this module supports creating 2, 3 and 4 component vectors, as well as using all of the valid names in GLSL for accessing components, with support for swizzling.
There are no functions that you can use on them yet, I may implement those soon.

The multi-dimensional `vec` properties currently return a simple array instead of another vector to facilitate accessing the components and using them in the construction of other vectors.

## Example Usage

#### Importing

```js
import { vec2, vec4 } from "vecs.js"
```

#### Vectors and their components

```js
let two = vec2(1, 0) // creates a vec2 with components 1 and 0
two.x = 5            // sets the first component equal to 5
console.log(two.sts) // logs [5, 0, 5]
  
let four = vec4(...two.yx, 6, 7) //creates a vec4 with two's components swapped around, then 6 and 7
four[0] = 4;                  //sets the first component equal to 5
console.log(four.rgba)       //logs [4, 5, 6, 7]
```

## Possible To-Do List

- port to TS so that they can actually be proper types
- split the three vectors into separate module files to implement methods
- implement typical vector methods (normalisation, zeroing, addition and subtraction, cross and dot products etc)
