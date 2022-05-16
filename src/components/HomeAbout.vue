<script>
import HomeAboutImg from './HomeAboutImg.vue'
import 'animate.css';

export default {
    components: {
        'HomeAboutImg': HomeAboutImg
    },
    methods: {
        scrollEvent() {
            const aboutImg = document.getElementById('abourText');
            if (window.scrollY > 1500) {
                aboutImg.classList.add('showText');
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.scollEvent);
    },
    unmounted() {
        window.removeEventListener('scroll', this.scollEvent);
    },
};
</script>

<template>
    <div class="home-about" @click="showForm.hideBotForm">
        <h1>О нас</h1>
        <div class="details">
            <HomeAboutImg />
            <p id="abourText" class="about-text">Консалтинговое агентство "GrossProfit" была основана в 2019 году для
                того, чтобы помочь друзьям по бизнесу с бухгалтерским и налоговым учетом. <br><br> С самого начала нашим
                главным принципом было работать добросовестно, а не зацикливаться на сиюминутной прибыли. Помогая
                организовать бизнес близким людям, мы разделяли с ними ответственность за принимаемые решения,
                стремились стать лучше и тем самым дать партнерам еще больше.
            </p>
            <div class="years-cards">
                <div class="years-card">
                    <div class="text">
                        <h2>3+</h2>
                        <p>лет на рынке Узбекистана</p>
                    </div>
                    <div class="corner"></div>
                </div>
                <div class="years-card">
                    <div class="text">
                        <h2>40+</h2>
                        <p>доволних клиентов</p>
                    </div>
                    <div class="blue corner"></div>
                </div>
                <div class="years-card">
                    <div class="text">
                        <h2>100%</h2>
                        <p>конфиденциальность ваших данных</p>
                    </div>
                    <div class="corner"></div>
                </div>
            </div>
        </div>
        <RouterLink to="/about"><button> Подробнее</button></RouterLink>
    </div>
</template>

<style scoped>
.home-about {
    margin: 150px 0 170px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 100px;
}


.home-about h1 {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #182061;
    margin-bottom: 70px;
}

.home-about .details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.about-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: justify;
    letter-spacing: 0.03em;
    color: #3E3D3D;
    width: 33%;
    visibility: hidden;
}

.showText {
    animation: fadeInUp;
    animation-duration: 1s;
    visibility: visible;
}

.years-cards {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.years-card {
    margin-bottom: 30px;
    position: relative;
    width: 180px;
    height: 100px;
}


.years-card .text {
    width: 180px;
    height: 100px;
    background: #FFFFFF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
}

.years-card:nth-child(2) {
    margin-left: 120px;
}

.text h2 {
    color: #182061;
    margin: 0;
}

.text p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.03em;
    color: #3E3D3D;
    margin: 0;
}

.corner {
    position: absolute;
    width: 86px;
    height: 50px;
    right: -10px;
    top: -10px;
    background: #F4B504;
    box-shadow: 0px 0px 50px rgba(245, 232, 255, 0.6);
    border-radius: 25px 1px;
    z-index: 1;
}

.blue {
    background: #182061;
}

.home-about a {
    text-decoration: none;
    font-weight: 500;
    margin-top: 50px;
}

.home-about button {
    background: #fff;
    color: #182061;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #182061;
    text-align: center;
    height: 60px;
    width: 300px;
    border-radius: 20px 0 20px 0;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    font-weight: 400;
}

.home-about button:hover {
    background: #182061;
    cursor: pointer;
    transition: 0.3s;
}

.home-about a:hover button {
    color: #fff;
}


@media(max-width: 1300px) {
    p.about-text {
        font-size: 15px;
        width: 50%;
    }

    .details {
        flex-wrap: wrap;
    }

    .years-cards {
        margin-top: 100px;
        flex-direction: row;
    }

    .years-card:nth-child(2) {
        margin-left: 0;
    }

    .years-card {
        margin: 30px;
    }
}

@media(max-width: 750px) {

    .home-about {
        padding: 0 0;
    }

    p.about-text {
        font-size: 15px;
        width: 70%;
    }

    .details {
        flex-direction: column;
        padding: 0;
    }

    .years-cards {
        flex-direction: column;
    }

    .years-card {
        transform: scale(1.5);
        margin-top: 100px;
    }

    p.about-text {
        font-size: 15px;
        max-width: 80%;
    }
}
</style>
