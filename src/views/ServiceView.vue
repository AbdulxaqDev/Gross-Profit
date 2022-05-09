<script>
import ServiceService from "../components/ServiceService.vue";
import HomeFooter from "../components/HomeFooter.vue";
import OtherService from "../components/OtherService.vue";
import Form from "../components/Form.vue";
import { showForm } from '../stores/store'


export default {
  components: {
    'ServiceService': ServiceService,
    'HomeFooter': HomeFooter,
    'OtherService': OtherService,
    'Form': Form,
  },
  data() {
    return {
      showForm,
    }
  },
};
</script>

<template>
  <div class="service" id="service">
    <ServiceService v-if="!showForm.showDetailedSer" />
    <OtherService v-if="showForm.showDetailedSer" />
    <HomeFooter />
    <Form />
  </div>
</template>

<style scoped>
</style>
