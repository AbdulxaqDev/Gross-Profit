<script>
import IntroMan from "../assets/HomeIntroImg/Group338.png";
export default {};
</script>

<template>
  <div class="homeIntroImg">
    <div class="blueBlock1"></div>
    <div class="blueBlock2"></div>
    <img class="introMan" src="../assets/HomeIntroImg/Group338.png" alt="You are welcome" />
    <img class="progress" src="../assets/HomeIntroImg/Group406.png" alt="You are welcome" />
    <img class="lupa" src="../assets/HomeIntroImg/lupa1.png" alt="You are welcome" />
    <div class="smallCard">
      <img src="../assets/HomeIntroImg/farxod.png" alt="Фарход Исроилов">
      <div>
        <h2 class="smallCardName">Фарход Исроилов</h2>
        <p>Налоговый консультант</p>
      </div>
    </div>
    <div class="smallCard secondSmallCard">
      <img src="../assets/HomeIntroImg/farxod.png" alt="Фарход Исроилов">
      <div>
        <h2 class="smallCardName">OOO “МЕЧТА”</h2>
        <p>Мне нужна ваша помощь</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homeIntroImg {
  position: relative;
  height: 100%;
  width: 50%;
  animation: fadeInRight;
  animation-duration: 1s;
}

.blueBlock1 {
  background: linear-gradient(128.96deg,
      rgba(24, 32, 97, 0.85) 10.45%,
      rgba(255, 255, 255, 0.25) 116.98%);
  box-shadow: 0px 0px 50px rgba(237, 251, 255, 0.3);
  transform: skewY(-8.04deg);
  position: absolute;
  width: 448.92px;
  height: 379px;
  left: 54.83px;
  top: 111.57px;
}

.blueBlock2 {
  position: absolute;
  width: 360.17px;
  height: 308.57px;
  left: 182.96px;
  top: 273.28px;

  background: linear-gradient(128.96deg,
      rgba(24, 32, 97, 0.85) 10.45%,
      rgba(255, 255, 255, 0.25) 116.98%);
  box-shadow: 0px 0px 50px rgba(237, 251, 255, 0.3);
  transform: skewY(-8.04deg);
  border-radius: 0 0 30px 0;
}

.introMan {
  position: absolute;
  width: 340px;
  height: 577px;
  left: 170px;
  top: 10px;
  z-index: 5;
  background: url(image.png);
  border-radius: 0px;
}

.lupa {
  position: absolute;
  left: 452px;
  top: 144px;
  bottom: 93.99%;
  z-index: 9;
}

.progress {
  position: absolute;
  width: 88px;
  height: 94px;
  left: 492px;
  top: 412px;
}

.smallCard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 5px 0 5px;
  border: #cecece 1px solid;
  border-left: #66B3DE 2px solid;
  border-top: #66B3DE 2px solid;
  width: 262px;
  height: 90px;
  position: absolute;
  top: 30%;
  left: 0%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(101.98deg, rgba(255, 255, 255, 0.12) 41.85%, rgba(255, 255, 255, 0) 144.37%);
  backdrop-filter: blur(26px);
  border-radius: 10px;
  animation: pulse;
  animation-delay: 1.5s;
  animation-duration: 0.5s;
}

.smallCard p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #3E3D3D;
  margin-left: -10px;
}

.secondSmallCard {
  top: 80%;
  height: 70px;
  left: -12%;
  animation: pulse;
  animation-delay: 2s;
  animation-duration: 0.5s;
}

.smallCardName {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #182061;
  margin-bottom: -10px;
  margin-left: -10px;
}

@media(max-width: 1290px) {
  .homeIntroImg {
    transform: scale(0.9);
  }
}

@media(max-width: 1220px) {
  .homeIntroImg {
    transform: scale(0.6);
  }
}

@media(max-width: 980px) {
  .homeIntroImg {
    border: red solid 1px;
    display: none;
  }
}
</style>
