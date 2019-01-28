const path = require('path')
const rollup = require('rollup')
const assert = require('assert')
const remote = require('../dist/index.cjs.js')

describe('rollup-plugin-remote', function () {
  it('should return the answer from bundled module', async function () {
    const inputPath = path.join(__dirname, 'assets/input.js')
    const outputPath = path.join(__dirname, 'assets/output.js')

    const bundle = await rollup.rollup({
      input: inputPath,
      plugins: [
        remote()
      ]
    })

    await bundle.write({
      file: outputPath,
      format: 'cjs'
    })

    const answer = require(outputPath)

    assert.equal(answer, 42)
  })
})
