const source = require('~/middleware/tongue-source.json')

export const state = () => {
  return {
    randomPhrase: {},
  }
}

export const getters = {
  find() {
    return (id) => {
      return source.find(d => d.id === id)
    }
  },
  random() {
    return () => {
      const index = Math.floor(Math.random() * source.length)
      return source[index]
    }
  }
}

export const mutations = {
  setRandomPhrase(state, phrase) {
    if (!phrase) {
      throw new Error('Phrase is required')
    }
    state.randomPhrase = phrase
  }
}

export const actions = {
  updateRandomPhrase({ getters, commit }) {
    const phrase = getters.random()
    commit('setRandomPhrase', phrase)
  }
}
