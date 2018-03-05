const source = require('~/middleware/tongue-source.json')

export const getters = {
  find() {
    return (id) => {
      return source.find(d => d.id === id)
    }
  },
  random() {
    const index = Math.floor(Math.random() * source.length)
    return source[index]
  }
}
