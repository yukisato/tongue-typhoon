<template>
  <section class="container">
    <div class="phraseContainer">
      <p class="phrase">{{ randomePhrase.content }}</p>
      <p><button @click="change_onClick">Change!</button></p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },

  data() {
    return {
    }
  },

  computed: {
    phrase() {
      const phrase = this.$store.getters['phrases/find'](rand)
      return phrase ? phrase.content : ''
    },
    randomePhrase() {
      // return {}
      return this.$store.state.phrases.randomPhrase
    }
  },

  mounted() {
    this.updateRandomPhrase()
  },

  methods: {
    updateRandomPhrase() {
      this.$store.dispatch('phrases/updateRandomPhrase')
    },

    change_onClick(event) {
      this.updateRandomPhrase()
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.phraseContainer {
  display: flex;
  align-items: center;
}

.phrase {
  border: 1px solid skyblue;
  margin-right: 1em;
  min-height: 4em;
  padding: 1em;
  width: 400px;
}
</style>
