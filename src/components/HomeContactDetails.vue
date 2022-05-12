<script>
import 'animate.css';
</script>

<template>
    <div class="home-contact-details">
        <h1>Этапы работы с нами<br>очен просты</h1>
        <div class="smallCards">
            <div class="frame">
                <div class="smallCard">
                    <img src="../assets/HomeIntroImg/inCall.png" alt="">
                </div>
                <div class="cornerBlock"></div>
                <p>Вы оставдяете заявку и наш менеджер связывается с Вами</p>
            </div>
            <img class="arrow" src="../assets/HomeIntroImg/arrow.png" alt="">
            <div class="frame">
                <div class="smallCard">
                    <img src="../assets/HomeIntroImg/layers.png" alt="">
                </div>
                <div class="cornerBlock"></div>
                <p>Определяем план работы, стоимость и подписываем договор</p>
            </div>
            <img class="arrow" src="../assets/HomeIntroImg/arrow.png" alt="">
            <div class="frame">
                <div class="smallCard">
                    <img src="../assets/HomeIntroImg/people.png" alt="">
                </div>
                <div class="cornerBlock"></div>
                <p>Наши специалисты приводят в порядок отчетность</p>
            </div>
            <img class="arrow" src="../assets/HomeIntroImg/arrow.png" alt="">
            <div class="frame">
                <div class="smallCard">
                    <img src="../assets/HomeIntroImg/list.png" alt="">
                </div>
                <div class="cornerBlock"></div>
                <p>Вы регулярно получаете готовую отчетность</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-contact-details {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 100px;
}

.home-contact-details h1 {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #182061;
    margin-bottom: 80px;
}

.smallCards {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    z-index: 2;
    width: 100%;
    padding: 0 100px;
}

.frame {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    text-align: center;
}

.frame p {
    margin: 20px;
}

.cornerBlock {
    background: #F4B504;
    border-radius: 5px 50px;
    width: 180px;
    height: 100px;
}

.smallCard {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 100px;
    background: #FFFFFF;
    border-radius: 20px;
    left: 80px;
    top: 15px;
}

.arrow {
    margin-top: -50px;
}



@media(max-width: 1570px) {
    .frame {
        transform: scale(0.8);
    }

    .smallCard {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 100px;
        background: #FFFFFF;
        border-radius: 20px;
        left: 50px;
        top: 15px;
    }

}

@media(max-width: 1360px) {
    .smallCards {
        flex-direction: column;
    }



    .frame {
        margin-top: 50px;
    }

    .arrow {
        margin-top: 50px;
        transform: rotateZ(90deg);
    }
}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
