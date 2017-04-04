# TL; IS test harness

To Lazy; IS testing harness. Just copy/paste one tiny 122 byte line. No dependencies or a need for require, grunt, gulp, webpack, etc.

## Install

Copy and paste:

```js
function IS(r){if(!r)throw Error(JSON.stringify(r)+" ISN'T")}IS.NT=function(r){if(r)throw Error(JSON.stringify(r)+" IS")};
```


#### If you must use NPM:

```sh
npm i tl-is --save-dev
```

and

```js
var IS=require('tl-is')
```


## Usage

Throws an error if any fail

```js
IS(true)
IS('Truth')
IS(1)
IS(3.1)
IS(IS)
IS([])
IS({})

IS.NT(false)
IS.NT(0)
IS.NT(0.0)
IS.NT(undefined)
IS.NT(null)
IS.NT()

// Example errors thrown
IS(false)      // Error: false ISN'T
IS(0)          // Error: 0 ISN'T
IS(0.0)        // Error: 0 ISN'T
IS(undefined)  // Error: undefined ISN'T -- nothing isn't a thing
IS(null)       // Error: null ISN'T
IS()           // Error: undefined ISN'T -- nothing doesn't exist

IS.NT(true)    // Error: true IS
IS.NT('Truth') // Error: "Truth" IS
IS.NT(1)       // Error: 1 IS
IS.NT(3.1)     // Error: 3.1 IS          -- triune nature is consistent
IS.NT(IS)      // Error: undefined IS    -- self contradictions are confusing and fail
IS.NT([])      // Error: [] IS
IS.NT({})      // Error: {} IS
```

## Less bytes plus messages

If you want the same simplicity, but want custom error messages and to spend even fewer bytes, see [IS](//github.com/yieme/IS) which consumes 43 less bytes.


## Please &#9733; Star it

Please <button>**[&#9733; Star](//github.com/yieme/TL-IS)**</button> this now.

## License MIT

Enjoy &#9786;
