<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-show="showModal">
    <Modal theme="sale" @close="togleModal">
      <h1>this is me</h1>

      <template v-slot:links>
        <a href="#" class="button">sign in now</a>
        <a href="#" class="button">sign up now</a>
      </template>
    </Modal>

  </teleport>

   <teleport to=".modals" v-show="showModal2">
    <Modal theme="sale" @close="togleModal2">
      <h1>this is me 2</h1>

      <template v-slot:links>
      </template>
    </Modal>

  </teleport>

  <button class="button" @click="togleModal">show modal</button>
  <button class="button" @click="togleModal2">show modal 2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first Vue app :)",
      header: "this is my app",
      text: "this is text",
      showModal: false,
      showModal2: false,
      
    };
  },
  methods: {
    togleModal() {
      this.showModal = !this.showModal;
    },
    togleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
</style>
