<script>
import ServiceCard from "./ServiceCard.vue";
export default {
  components: {
    'ServiceCard': ServiceCard
  }
};
</script>

<template>
  <div class="homeService">
    <h1>НАШИ УСЛУГИ</h1>
    <div class="cards">
      <ServiceCard 
        title="Бухгалтерское сопровождение в 
        Узбекистане" 
        description="Берём на себя всю бугалтерию!
        Ведем налоговый учет и готовим счета
        к оплате вовремя и без задержек." 
        imgUrl="../assets/HomeIntroImg/calc.png"/>
      <ServiceCard />
    </div>
    <div class="cards">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
    <a href=""><button>Оставить заявку</button></a>
  </div>
</template>

<style scoped>
.homeService {
  border: red solid 1px;
  height: 950px;
  margin-top: 117px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;
}

.homeService h1 {
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

.homeService .cards {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 334px;
}

.homeService a {
  text-decoration: none;
  font-weight: 500;
}

.homeService button {
  background: #182061;
  ;
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

.homeService button:hover {
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.homeService a:hover button {
  color: #182061;
}
</style>
