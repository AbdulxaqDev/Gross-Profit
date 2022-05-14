<script>
import 'animate.css'
export default {};
</script>

<template>
    <div class="home-stake-holders" @click="showForm.hideBotForm">
        <div class="stake-holders-text">
            <h1>Почему нужно выбрать <br>именно нас?</h1>
            <h3>Мы поможем сократить <span class="yellow">расходы на 15%</span></h3>
            <p>Обратитесь к нам и увеличьте материальную выгоду,
                так как бизнес станет более прозрачным</p>
            <div class="smallCards">
                <div class="smallCard">
                    <p>Сократим ваши расходы</p>
                    <h4>1</h4>
                </div>
                <div class="smallCard">
                    <p>Полностью
                        заменим
                        штатного
                        бухгалтера</p>
                    <h4>2</h4>
                </div>
                <div class="smallCard">
                    <p>Воверемя сдадим всю отчетность</p>
                    <h4>3</h4>
                </div>
            </div>
        </div>
        <div class="stakeHolders">
            <h1>Нам доверяет </h1>
            <h6>
                <img src="../assets/HomeIntroImg/mountain.png" alt="">
                <img src="../assets/HomeIntroImg/train.png" alt="">
            </h6>
            <h6>
                <img src="../assets/HomeIntroImg/team.png" alt="">
                <img src="../assets/HomeIntroImg/vestco.png" alt="">
            </h6>
            <h6>
                <img src="../assets/HomeIntroImg/plant.png" alt="">
            </h6>
        </div>
    </div>
</template>

<style scoped>
.home-stake-holders {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
    padding: 0 100px;
}


.stake-holders-text {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 45%;
}

.stakeHolders {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.stakeHolders h6 {
    font-size: 50px;
    margin: 30px 0;
}

.stakeHolders img {
    margin: -10px 20px;
}

.home-stake-holders h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #182061;
}

.home-stake-holders h1:first-child {
    margin: 45px 0;
}

.home-stake-holders h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #3E3D3D;
    text-align: center;
}

.stake-holders-text p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #3E3D3D;
    margin: 0px 0;
}

.yellow {
    color: #F4B504;
}

.smallCards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin: 40px 0;
}

.smallCard {
    position: relative;
    width: 160px;
    height: 120px;
    background: #FFFFFF;
    box-shadow: 0px 4px 60px rgba(0, 0, 222, 0.05);
    border-radius: 50px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
}

.smallCard p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #3E3D3D;
}

.smallCard h4 {
    position: absolute;
    right: -14%;
    top: -70%;
    font-style: normal;
    font-weight: 600;
    font-size: 96px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #182061;
}


@media(max-width: 1360px) {
    .home-stake-holders {
        flex-direction: column;
        align-items: center;
    }

    .stakeHolders {
        margin-top: 50px;
    }

    .stake-holders-text {
        width: 100%;
    }
}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 1220px) {}

@media(max-width: 970px) {}

@media(max-width: 620px) {

    .home-stake-holders {
        padding: 0 50px 50px;
    }

    .smallCards {
        flex-direction: column;
    }

    .smallCard {
        margin-top: 50px;
    }
}
</style>
