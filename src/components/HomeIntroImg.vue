<script>
import IntroMan from "../assets/HomeIntroImg/Group338.png";
export default {};
</script>

<template>
  <div class="homeIntroImg">
    <div class="blueBlock1"></div>
    <div class="blueBlock2"></div>
    <img
      class="introMan"
      src="../assets/HomeIntroImg/Group338.png"
      alt="You are welcome"
    />
    <img
      class="progress"
      src="../assets/HomeIntroImg/Group406.png"
      alt="You are welcome"
    />
    <img
      class="lupa"
      src="../assets/HomeIntroImg/lupa1.png"
      alt="You are welcome"
    />
  </div>
</template>

<style scoped>
.homeIntroImg{
    position: relative;
    height: 100%;
    width: 50%;
}
.blueBlock1 {
  background: linear-gradient(
    128.96deg,
    rgba(24, 32, 97, 0.85) 10.45%,
    rgba(255, 255, 255, 0.25) 116.98%
  );
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
  left: 212.96px;
  top: 273.28px;

  background: linear-gradient(
    128.96deg,
    rgba(24, 32, 97, 0.85) 10.45%,
    rgba(255, 255, 255, 0.25) 116.98%
  );
  box-shadow: 0px 0px 50px rgba(237, 251, 255, 0.3);
  transform: skewY(-8.04deg);
  border-radius: 0 0 30px 0;
}
.introMan {
  position: absolute;
  width: 340px;
  height: 577px;
  left: 200px;
  top: 10px;

  background: url(image.png);
  border-radius: 0px;
}
.lupa {
  position: absolute;
  left: 482px;
  top: 144px;
  bottom: 93.99%;
}
.progress {
  position: absolute;
  width: 88px;
  height: 94px;
  left: 522px;
  top: 412px;
}
</style>
