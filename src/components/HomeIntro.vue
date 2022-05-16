<script>
import HomeIntroImg from "./HomeIntroImg.vue";
import { showForm } from "../stores/store";
import 'animate.css';
export default {
  components: {
    HomeIntroImg: HomeIntroImg,
  },
  data() {
    return {
      showForm,
    }
  },
  methods: {
    showBottForm(key) {
      if (key == 2) {
        this.showForm.isVisible = false;
        return;
      }
      this.showForm.isVisible = !this.showForm.isVisible;
    },
    fireForm(){
      setTimeout(() => {
        this.showBottForm(1)
      }, 200);
    }
  },
};
</script>
<template>
  <div class="home-intro" @click="showBottForm(2)">
    <div class="home-intro-text">
      <h1>
        Надежная <br> <span class="yellow">БУХГАЛТЕРИЯ</span><br> для
        <span class="yellow">ВАШЕГО БИЗНЕСА</span>
      </h1>
      <p>
        Вы занимаетесь бизнесом, мы занимаемся Вашей бухгалтерией.<br>Ваша
        личная команда профессиональных бухгалтеров, которая всегда под
        рукой.
      </p>
      <button @click="fireForm">Оставить заявку</button>
    </div>
    <HomeIntroImg />
  </div>
</template>

<style scoped>
.home-intro {
  margin-top: 10px;
  height: 577px;
  padding: 0 50px 100px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 100px;
}

.home-intro-text {
  height: 100%;
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 100px;
  animation: fadeInLeft;
  animation-duration: 1s;
}

.home-intro-text h1 {
  color: rgba(24, 32, 97, 1);
  font-size: 48px;
  min-width: 600px;
  margin-top: -10px;
}

.home-intro-text p {
  color: rgba(62, 61, 61, 1);
  font-weight: 400;
  line-height: 21px;
  font-size: 14px;
  max-width: 547px;
  margin-top: -90px;
}

.home-intro-text button {
  text-decoration: none;
  font-weight: 500;
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
  font-family: 'montserrat';
}

.home-intro-text button:hover {
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
  color: rgba(244, 181, 4, 1);
}

.home-intro-text a:hover button {
  color: rgba(244, 181, 4, 1);
}

.yellow {
  color: rgba(244, 181, 4, 1);
}


@media(max-width: 1290px) {
  .home-intro-text {
    transform: scale(0.9);
  }
}

@media(max-width: 1220) {
  .home-intro-text {
    transform: scale(0.8);
  }
}

@media(max-width: 900px) {

  .home-intro {
    width: 100vw;
    height: 577px;
    padding: 0 50px 100px 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    margin: 0;
  }
}

@media(max-width: 800px) {
  .home-intro {
    height: 577px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 0;
  }

  .home-intro-text {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }


  .home-intro-text p {
    width: 300px;
  }

  .home-intro-text button {
    margin-top: 20px;
  }
}
</style>
