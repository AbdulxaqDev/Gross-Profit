<script>
import { serviceData } from '../serviceData';
import { showForm } from '../stores/store'
import ServiceCardPro from '../components/ServiceCardPro.vue';
import ServiceExtraCardCorner from '../components/ServiceExtraCardCorner.vue';
import ServiceExtraCard from '../components/ServiceExtraCard.vue'
import OtherService from '../components/OtherService.vue';
import card1 from '../assets/HomeIntroImg/calc.png'
import HomeFooter from "../components/HomeFooter.vue";
import Form from "../components/Form.vue";
import HomeBottom from "../components/HomeBottom.vue";

export default {
    components: {
        'ServiceCardPro': ServiceCardPro,
        'ServiceExtraCard': ServiceExtraCard,
        'ServiceExtraCardCorner': ServiceExtraCardCorner,
        'OtherService': OtherService,
        'HomeFooter': HomeFooter,
        'Form': Form,
        'HomeBottom': HomeBottom,
    },
    data() {
        return {
            id: 0,
            data: serviceData,
            showForm,
            imageLink: card1
        }
    },
    methods: {
        showBotForm() {
            this.showForm.isVisible = !this.showForm.isVisible;
        },
    }
};

</script>

<template>
    <div class="other-service">
        <div class="detailed">
            <div class="title-img">
                <div>
                    <h1 class="title">{{ data[id].title }}</h1>
                    <p>{{ data[id].description }}</p>
                </div>
                <img :src="imageLink" alt="Calculation">
            </div>
            <p class="text" v-html="data[id].text"></p>
            <ServiceExtraCard v-for="(item, index) in data[id].extraDescription"
                :extra-description="data[id].extraDescription[index]" :key="item" />
            <p class="text left" v-if="id == 1"> Формы ведения бизнеса в Узбекистане </p>
            <ServiceExtraCardCorner v-for="(item, index) in data[id].forms" :extra-description="data[id].forms[index]"
                :key="item" :backGround="index" />
            <button class="goToService" @click="showBotForm">Оставить заявку</button>
        </div>
        <OtherService :id="id" />
    </div>
    <HomeFooter />
    <Form />
    <HomeBottom />
</template>

<style scoped>
.goToService {
    margin-top: 37px;
    width: 300px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #182061;
    border-radius: 25px 1px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #182061;
    transition: 0.3s;
    cursor: pointer;
}

.goToService:hover {
    background: #182061;
    border: 1px solid #ffffff;
    color: #ffffff;
}

.other-service {
    margin: 120px 100px 0;
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.detailed {
    display: flex;
    padding: 50px 70px;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 25px;
}

.title-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.title {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #182061;
}

.other h1 {
    text-align: left;
    padding-left: 0px;
    margin-bottom: 30px;
}

.title-img p {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #F4B504;
}

.title-img img {
    width: 200px;
}

.text {
    margin-top: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #182061;
    text-align: justify;
}

.left {
    text-align: left;
    width: 100%;
}

.other {
    padding: 50px 0;
    margin-top: 0px;
    width: 100%;
}

.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 -18px;
}

.card {
    background: #FFFFFF;
    border-radius: 20px;
    max-width: 39%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 18px;
    padding: 50px;
    box-shadow: 0 0 15px #f3f1f1;
    transition: 0.2s;
    height: 60px;
}

.card:hover {
    background: #F4B504;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.card h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #182061;
}

.no-need {
    visibility: hidden;
}

.activeCard {
    background: #F4B504;
    display: none;
}

@media(max-width: 1437px) {
    .card:last-child {
        margin-left: 0;
    }
}
</style>

