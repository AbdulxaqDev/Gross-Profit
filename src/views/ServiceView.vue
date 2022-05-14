<script>
import ServiceService from "../components/ServiceService.vue";
import HomeFooter from "../components/HomeFooter.vue";
import OtherService from "../components/OtherService.vue";
import Form from "../components/Form.vue";
import { showForm } from '../stores/store'
import { defineComponent } from "@vue/runtime-core";
import {serviceData} from '../serviceData'
import HomeBottom from "../components/HomeBottom.vue";



export default defineComponent({
  components: {
    'ServiceService': ServiceService,
    'HomeFooter': HomeFooter,
    'OtherService': OtherService,
    'Form': Form,
    'HomeBottom': HomeBottom,
  },
  data() {
    return {
      showForm,
      data: serviceData
    }
  },
});
</script>

<template>
  <div class="service" id="service">
    <p v-if="showForm.index === ''">Главная / <b>Услуги</b></p>
    <p v-else>Главная / <b>{{data[showForm.index].title}}</b></p>
    <ServiceService v-if="!showForm.showDetailedSer" />
    <OtherService v-if="showForm.showDetailedSer" />
    <HomeFooter />
    <Form />
    <HomeBottom />
  </div>
</template>

<style scoped>
p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: #3E3D3D;
  margin: 50px 0 -50px 100px;
}
</style>
