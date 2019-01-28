# rollup-plugin-remote

Load remote modules via http

## Usage

```js
// index.js
import answer from 'https://unpkg.com/the-answer@1.0.0/dist/the-answer.es.js'
export default answer
```

```js
// rollup.config.js
import remote from 'rollup-plugin-remote';

export default {
  entry: 'index.js',
  // ...
  plugins: [
    remote()
  ]
};
```
