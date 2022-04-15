<script>
import HomeIntroImg from "./HomeIntroImg.vue";
export default {
  components: {
    HomeIntroImg: HomeIntroImg,
  },
};
</script>

<template>
  <div class="home-intro">
    <div class="home-intro-text">
      <h1>
        Надежная<br /><span class="yellow">БУХГАЛТЕРИЯ</span><br />для
        <span class="yellow">ВАШЕГО БИЗНЕСА</span>
      </h1>
      <p>
        Вы занимаетесь бизнесом, мы занимаемся Вашей бухгалтерией.<br />Ваша
        личная команда профессиональных бухгалтеров, которая всегда<br />под
        рукой.
      </p>
      <a href=""><button>Оставить заявку</button></a>
    </div>
    <HomeIntroImg />
  </div>
</template>

<style scoped>
.home-intro {
  height: 577px;
  padding: 0 50px 100px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.home-intro-text {
  height: 100%;
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
}

.home-intro-text h1 {
  color: rgba(24, 32, 97, 1);
  font-size: 48px;
}

.home-intro-text a {
  text-decoration: none;
  font-weight: 500;
}
.home-intro-text p {
  color: rgba(62, 61, 61, 1);
  font-weight: 400;
  line-height: 21px;
  font-size: 14px;
}
.home-intro-text button {
  background: rgba(244, 181, 4, 1);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(244, 181, 4, 1);
  text-align: center;
  height: 60px;
  width: 300px;
  border-radius: 20px 0 20px 0;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
}

.home-intro-text button:hover {
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}
.home-intro-text a:hover button {
  color: rgba(244, 181, 4, 1);
}
.yellow {
  color: rgba(244, 181, 4, 1);
}
</style>
