const fetch = require('node-fetch')

const pattern = /^https?:\/\//

function remote () {
  return {
    name: 'remote',

    resolveId (importee) {
      if (pattern.test(importee)) {
        return importee
      }

      return null
    },

    load (id) {
      if (pattern.test(id)) {
        return fetch(id).then(res => res.text())
      }

      return null
    }
  }
}

export default remote
