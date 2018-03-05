const source = require('~/middleware/tongue-source.json')

export const getters = {
  find() {
    return (id) => {
      return source.find(d => d.id === id)
    }
  }
}
