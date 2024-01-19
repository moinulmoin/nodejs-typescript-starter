```js
"scripts": {
    "dev:node": "tsx watch ./src/index.ts", // to watch for code changes
    "dev:tsc": "tsc --watch --preserveWatchOutput", // to check for type errors
    "dev": "run-p dev:*", // run dev:node and dev:tsc parallelly
    "build": "rm -rf ./dist && npx pkgroll --minify", // clean build the package
    "start": "node ./dist/index.js" // start the package
  },
```
