<script>
import AboutAbout from "../components/AboutAbout.vue";
import HomeFooter from "../components/HomeFooter.vue";
import Form from "../components/Form.vue";


export default {
  components: {
    'AboutAbout': AboutAbout,
    'HomeFooter': HomeFooter,
    'Form': Form,
  },
  mounted() {
    console.log(this._inactive)
  },
};
</script>

<template>
  <div class="about" id="about">
    <AboutAbout />
    <HomeFooter />
    <Form />
  </div>
</template>

<style scoped>
</style>
