<script>
import HomeAboutImg from './HomeAboutImg.vue'
import 'animate.css';
export default {
    components: {
        'HomeAboutImg': HomeAboutImg
    }

};
</script>

<template>
    <div class="home-about">
        <h1>О компании</h1>
        <div class="details">
            <HomeAboutImg />
            <p class="about-text" >Компания “GrossProfit” была создана в 2008 году. В нашей команде собраны спесциалисты из разных областей
                имеющие опыт работы
                более <b>17 лет.</b>
                <br>
                <br>
                “GrossProfit” единственная в Ташкенте компания делающая специфические лицензи. За нашей помощью
                обращаются собственники бизнеса из <b>всех городов Узбекистана.</b>
                <br>
                <br>
                Мы секономили время и деньги более чем <b>2000</b> наших клиентов.
            </p>
            <div class="years-cards">
                <div class="years-card">
                    <div class="text">
                        <h2>17</h2>
                        <p>лет на рынке Узбекистана</p>
                    </div>
                    <div class="corner"></div>
                </div>
                <div style="margin-left: 120px;" class="years-card">
                    <div class="text">
                        <h2>12</h2>
                        <p>доволних клиентов</p>
                    </div>
                    <div class="corner"></div>
                </div>
                <div class="years-card">
                    <div class="text">
                        <h2>3</h2>
                        <p>квалифицированных специалистов</p>
                    </div>
                    <div class="corner"></div>
                </div>
            </div>
        </div>
        <a href=""><button>Подробнее</button></a>
    </div>
</template>

<style scoped>
.home-about {
    margin-top: 150px;
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

p.about-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: justify;
    letter-spacing: 0.03em;
    width: 33%;
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

.text h2 {
    color: #182061;
}

.text p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.03em;
    color: #3E3D3D;
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

.home-about a {
    text-decoration: none;
    font-weight: 500;
    margin-top: 50px;
}


.home-about button {
    background: #182061;
    color: #fff;
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
}

.home-about button:hover {
    background: #fff;
    cursor: pointer;
    transition: 0.3s;
}

.home-about a:hover button {
    color: #182061;
}


@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}
</style>
