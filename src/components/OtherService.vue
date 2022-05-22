<script>
import { serviceData } from '../serviceData';


export default {
    props:[
        'id'
    ],
    data() {
        return {
            data: serviceData,
            serviceLinks: [
                'service1',
                'service2',
                'service3',
                'service4',
                'service5',
                'service6',
                'service7',
                'service8',
            ]
        }
    },
    methods: {
        detailedSer() {
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        showBotForm() {
            this.showForm.isVisible = !this.showForm.isVisible;
        },
    },
    mounted() {
        this.detailedSer();
    },

};

</script>

<template>
        <div class="other">
            <h1 class="title">Другие услуги</h1>
            <div class="cards">
                <RouterLink :to="serviceLinks[index]" v-for="(item, index) in data" :key="index" class="card"
                    v-show="index != id">
                    <div>
                        <h2>{{ item.title }}</h2>
                    </div>
                </RouterLink>
                <div class="card no-need">
                </div>
            </div>
    </div>
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

a.card {
    text-decoration: none;
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

