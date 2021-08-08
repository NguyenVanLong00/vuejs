<template>
  <h1>Reactor timmer game</h1>

  <div>
    <button class="button" @click="startGame" :disabled="isPlaying">
      Start game
    </button>
  </div>
  <Block v-if="isPlaying" :delay="delay" @endGame="endGame" />
  
  <p>{{score}}</p>
</template>

<script>
import Block from "./components/Block.vue";

export default {
  name: "App",
  components: {
    Block,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score:null
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delay = Math.random() * 3000;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
</style>
