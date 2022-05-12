<script>
import 'animate.css';
export default {
    created() {
        window.scrollTo(0, 0);
    },
};
</script>

<template>
    <div class="about-about">
        <div class="corner">
            <h4>НАШИ Компании</h4>
        </div>
        <div class="image-text">
            <img src="../assets/HomeIntroImg/aboutAboutImg.png" alt="">
            <div class="title-text">
                <h3>17+ лет опыта</h3>
                <p>Компания “GrossProfit” была
                    создана в 2008 году. В нашей
                    команде собраны спесци имеющие
                    опыт работы более 17 лет.
                </p>
                <div class="smallCards">
                    <div class="smallCard">
                        <h1>17+</h1>
                        <p>лет опыта</p>
                    </div>
                    <div class="smallCard">
                        <h1>12</h1>
                        <p>доволних
                            клиентов
                        </p>
                    </div>
                    <div class="smallCard">
                        <h1>3</h1>
                        <p>квалифицированных
                            специалистов
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text">
            “GrossProfit” единственная в Ташкенте компания делающая специфические лицензи. За нашей помощью обращаются
            собственники бизнеса из <b>всех городов Узбекистана.</b>
            <br>
            <br>
            Мы секономили время и деньги более чем <b>2000</b> наших клиентов.
            <br>
            <br>
            Компания “GrossProfit” была создана в 2008 году. В нашей команде собраны спесциалисты из разных областей
            имеющие опыт работы более 17 лет. Компания “GrossProfit” была создана в 2008 году. В нашей команде собраны
            спесциалисты из разных областей имеющие опыт работы более 17 лет. Мы секономили время и деньги более чем
            2000 наших клиентов.
        </p>
    </div>
</template>

<style scoped>
.about-about {
    margin: 120px 100px 100px;
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background: #FFFFFF;
    border-radius: 25px;
    padding: 80px 50px 50px 50px;
}

.corner {
    position: absolute;
    background: #F4B504;
    border-radius: 25px 1px;
    padding: 10px;
    width: 400px;
    height: 60px;
    left: 50px;
    top: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.corner h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #182061;
}

.image-text {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.title-text {
    width: 50%;
    margin-left: 50px;
}

.title-text h3 {
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #182061;
}

.title-text p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #182061;
    margin-bottom: 120px;
}

.img {
    width: 570px;
    height: 500px;
    border-radius: 100px 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.smallCards {
    position: absolute;
    right: 50px;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.smallCards h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #182061;
}

.smallCards p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.03em;
    color: #3E3D3D;
}


.smallCard {
    width: 200px;
    height: 120px;
    background: #EAECFF;
    border: 5px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px #FFFFFF;
    border-radius: 50px 5px;
    margin: 0 20px;
}

.smallCard:first-child {
    background: #F4B504;
}

.text {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #182061;
    /* opacity: 0.6; */
    margin-top: 50px;
}


@media(max-width: 1300px) {
    .image-text {
        flex-direction: column;
    }

    .title-text {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: justify;
    }

    .smallCards {
        display: none;
    }

    .title-text {
        width: 100%;
    }

    .title-text p{
        margin-bottom: 20px;
        text-align: justify;
    }
}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
