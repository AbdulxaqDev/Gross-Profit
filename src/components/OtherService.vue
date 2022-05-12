<script>
import 'animate.css';
import { serviceData } from '../serviceData';
import { showForm } from '../stores/store'
import ServiceCardPro from './ServiceCardPro.vue';
import ServiceExtraCardCorner from './ServiceExtraCardCorner.vue';
import ServiceExtraCard from './ServiceExtraCard.vue'
import card1 from '../assets/HomeIntroImg/calc.png'
import card2 from '../assets/HomeIntroImg/stamp.png'
import card3 from '../assets/HomeIntroImg/taxy.png'
import card4 from '../assets/HomeIntroImg/man.png'
import card5 from '../assets/HomeIntroImg/files.png'
import card6 from '../assets/HomeIntroImg/searchLense.png'
import card7 from '../assets/HomeIntroImg/scessor.png'
import card8 from '../assets/HomeIntroImg/laptop.png'

export default {
    components: {
        'ServiceCardPro': ServiceCardPro,
        'ServiceExtraCard': ServiceExtraCard,
        'ServiceExtraCardCorner': ServiceExtraCardCorner,
    },
    data() {
        return {
            data: serviceData,
            showForm,
            imageLinks:[
                card1,
                card2,
                card3,
                card4,
                card5,
                card6,
                card7,
                card8,
            ]
        }
    },
    methods: {
        detailedSer(index) {
            this.showForm.index = index;
            // This prevents the page from scrolling down to where it was previously.
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    },
};


</script>

<template>
    <div class="other-service">
        <div class="detailed">
            <div class="title-img">
                <div>
                    <h1 class="title">{{ data[showForm.index].title }}</h1>
                    <p>{{ data[showForm.index].description }}</p>
                </div>
                <img :src="imageLinks[showForm.index]" alt="Calculation">
            </div>
            <p class="text" v-html="data[showForm.index].text"></p>
            <ServiceExtraCard v-for="(item, index) in data[showForm.index].extraDescription"
                :extra-description="data[showForm.index].extraDescription[index]" :key="item" />
            <p class="text left" v-if="showForm.index == 1" > Формы ведения бизнеса в Узбекистане </p>
            <ServiceExtraCardCorner v-for="(item, index) in data[showForm.index].forms"
                :extra-description="data[showForm.index].forms[index]" :key="item" :backGround="index" />

        </div>
        <div class="other">
            <h1 class="title">Другие услуги</h1>
            <div class="cards">
                <div v-for="(item, index) in data" :key="item" class="card"
                    :class="index == showForm.index ? 'activeCard' : ''" @click="detailedSer(index, $event)">
                    <h2>{{ item.title }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    padding-left: 70px;
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

.left{
    text-align: left;
    width: 100%;
}

.other {
    padding: 50px 0;
    margin-top: 100px;
    width: 100%;
}

.cards {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.card {
    background: #FFFFFF;
    border-radius: 20px;
    max-width: 35%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 18px;
    padding: 50px;
    box-shadow: 0 0 15px #f3f1f1;
    transition: 0.2s;
}

.card:hover {
    transform: translateY(-20px);
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

.activeCard {
    background: #F4B504;
    display: none;
}



@media(max-width: 1500px) {}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>

