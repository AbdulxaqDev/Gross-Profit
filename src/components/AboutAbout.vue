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
            <h4>О НАС</h4>
        </div>
        <div class="image-text">
            <img src="../assets/HomeIntroImg/aboutAboutImg.png" alt="">
            <div class="title-text">
                <p>
                    Консалтинговое агентство "GrossProfit" была основана в 2019 году для того, чтобы помочь друзьям по
                    бизнесу с бухгалтерским и налоговым учетом. С самого начала нашим главным принципом было работать
                    добросовестно, а не зацикливаться на сиюминутной прибыли. Помогая организовать бизнес близким людям,
                    мы разделяли с ними ответственность за принимаемые решения, стремились стать лучше и тем самым дать
                    партнерам еще больше.
                </p>
                <div class="smallCards">
                    <div class="smallCard">
                        <h1>3+</h1>
                        <p>лет опыта</p>
                    </div>
                    <div class="smallCard">
                        <h1>40+</h1>
                        <p>доволних
                            клиентов
                        </p>
                    </div>
                    <div class="smallCard">
                        <h1>100</h1>
                        <p>квалифицированных
                            специалистов
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text">
            GrossProfit — это консалтинговое агентство, которая делает жизнь легче, проще и спокойнее. Да, многие
            компании говорят о себе так, но давайте мы попробуем очень коротко объяснить, что мы имеем в виду.
            <br>
            <br>
            Ведение бизнеса в Узбекистане — сложное дело, отнимающее почти всё время, которое у вас есть. Вы ведете свой
            бизнес, во-первых, что занятие это благодарное. А во-вторых, что вам это просто нравится.
            <br>
            <br>
            Мы вас отлично понимаем, — потому что у нас тоже свой бизнес, и он тоже требует всего нашего времени и всех
            наших сил. И он нам нравится, — точно так же, как вам нравится ваш.
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
    align-items: flex-start;
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
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #182061;
}

.img {
    width: 570px;
    height: 500px;
    border-radius: 100px 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.smallCards {
    position: absolute;
    right: -30px;
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
    margin-top: -30px;
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

@media(max-width: 1420px) {
    .title-text{
        margin: 0;
    }
    
}

@media(max-width: 1300px) {
    .image-text {
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .title-text p {
        margin-bottom: 20px;
        text-align: justify;
    }
}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
