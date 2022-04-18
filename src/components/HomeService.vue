<script>
import ServiceCard from "./ServiceCard.vue";
import 'animate.css'


window.addEventListener('scroll', () => {
  const cardGroupOne = document.getElementById('groupOne')
  const cardGroupTwo = document.getElementById('groupTwo')
  if (window.scrollY > 260) {
    cardGroupOne.classList.add('cardGroupOne')
  }
  if (window.scrollY > 530) {
    cardGroupTwo.classList.add('cardGroupOne')
  }
})

export default {
  components: {
    'ServiceCard': ServiceCard
  },
  data() {
    return {
      card1: {
        title: "Бухгалтерское сопровождение в Узбекистане",
        description: "Берём на себя всю бугалтерию! Ведем налоговый учет и готовим счета к оплате вовремя и без задержек.",
        path: "../src/assets/HomeIntroImg/calc.png"

      },
      card2: {
        title: "Регистрация компании в Республике Узбекистан",
        description: "Подготовим отчетность и оповестим вас o сроках. Вам остается только подписать отчёты.",
        path: "../src/assets/HomeIntroImg/stamp.png"

      },
      card3: {
        title: "Восстановление бухгалтерского учета в Узбекистане",
        description: "Подготовка документов и платежи контрагентам",
        path: "../src/assets/HomeIntroImg/files.png"

      },
      card4: {
        title: "Перерегистрация (Изменение)",
        description: "Контроль и управление всеми счетами",
        path: "../src/assets/HomeIntroImg/taxy.png"

      },
      card5: {
        title: "Ликвидация предприятия в Узбекистане",
        description: "Наши специалисты всегда готовыответить на возникшие y вас вопросы в чате или любом мессеннджере",
        path: "../src/assets/HomeIntroImg/scessor.png"

      },
    }
  },
};
</script>

<template>
  <div class="homeService">
    <h1>НАШИ УСЛУГИ</h1>
    <div class="cards" id="groupOne">
      <ServiceCard
        class="cardGroupOne"
        :title="card1.title" 
        :description="card1.description" 
        :imageUrl="card1.path" 
      />
      <ServiceCard 
        class="cardGroupOne"
        :title="card2.title" 
        :description="card2.description" 
        :imageUrl="card2.path" 
      />
    </div>
    <div class="cards" id="groupTwo">
      <ServiceCard 
        :title="card3.title" 
        :description="card3.description" 
        :imageUrl="card3.path" 
      />
      <ServiceCard 
        :title="card4.title" 
        :description="card4.description" 
        :imageUrl="card4.path" 
      />
      <ServiceCard 
        :title="card5.title" 
        :description="card5.description" 
        :imageUrl="card5.path" 
      />
    </div>
    <a href=""><button>Оставить заявку</button></a>
  </div>
</template>

<style scoped>
.homeService {
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
}

.cardGroupOne{
    animation: fadeInUp;
    animation-duration: 1s;
    opacity: 1;
}
.homeService a {
  text-decoration: none;
  font-weight: 500;
  margin-top: 50px;
}


.homeService button {
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

.homeService button:hover {
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.homeService a:hover button {
  color: #182061;
}

@media (max-width: 1400px) {
  #groupTwo{
    flex-wrap: wrap;
  }
  #groupTwo .serviceCard{
    width: 46%;
  }
  
}

@media (max-width: 1140px) {
  #groupTwo .serviceCard{
    width: 100%;
  }
  
}

@media (max-width: 990px) {
  #groupOne{
    flex-wrap: wrap;
  }
}

@media (max-width: 900px) {
  .homeService{
    padding: 0;
  }
}
</style>
