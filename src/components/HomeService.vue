<script>
import ServiceCard from "./ServiceCard.vue";
import { RouterLink, RouterView } from "vue-router";
import 'animate.css'
import card1 from '../assets/HomeIntroImg/calc.png';
import card2 from '../assets/HomeIntroImg/stamp.png';
import card3 from '../assets/HomeIntroImg/files.png';
import card4 from '../assets/HomeIntroImg/taxy.png';
import card5 from '../assets/HomeIntroImg/man.png';
import { showForm } from "../stores/store";



export default {
  components: {
    'ServiceCard': ServiceCard
  },
  data() {
    return {
      card1: {
        title: "Бухгалтерское сопровождениe",
        description: "Берём на себя всю бугалтерию!<br>Ведем налоговый учет и готовим счета к оплате вовремя и без задержек.",
        path: card1

      },
      card2: {
        title: "Регистрация компании",
        description: "Правильное оформление документов, быстрое и легкое прохождение процедуры регистрации, получение свидетельств.",
        path: card2

      },
      card3: {
        title: "Восстановление<br>бухгалтерского учета",
        description: "Все документы приводятся в порядок и восстанавливаются отсутствующие документы.",
        path: card3

      },
      card4: {
        title: "Перерегистрация<br>юридического лица",
        description: "Любые изменения, связанные с изменением положений учредительных документов фирмы.",
        path: card4

      },
      card5: {
        title: "Разрешение на<br>привлечение иностранной<br>рабочей силы",
        description: "Быстрое и легкое прохождение процедуры.",
        path: card5

      },
      showForm
    }
  },
  methods: {
    showBotForm() {
      this.showForm.isVisible = !this.showForm.isVisible
    },

    detailedSer(index) {
      // This prevents the page from scrolling down to where it was previously.
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    openDetailedSer(i) {
      this.showForm.index = i;
      this.showForm.showDetailedSer = true;
      this.detailedSer();
    },
    showHomeService() {
      if (window.scrollY > 260) {
        document.getElementById('groupOne').classList.add('showCards')
      }
      if (window.scrollY > 530) {
        document.getElementById('groupTwo').classList.add('showCards')
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.showHomeService);
  },
  unmounted() {
    window.removeEventListener('scroll', this.showHomeService);
  },
};
</script>

<template>
  <div class="homeService" @click="showForm.hideBotForm">
    <h1>НАШИ УСЛУГИ</h1>
    <div class="cards" id="groupOne">
      <ServiceCard :index="1" @click="openDetailedSer(0)" :title="card1.title" :description="card1.description"
        :imageUrl="card1.path" />
      <ServiceCard :index="2" @click="openDetailedSer(1)" :title="card2.title" :description="card2.description"
        :imageUrl="card2.path" />
    </div>
    <div class="cards" id="groupTwo">
      <ServiceCard :index="3" @click="openDetailedSer(2)" :title="card3.title" :description="card3.description"
        :imageUrl="card3.path" />
      <ServiceCard :index="4" @click="openDetailedSer(3)" :title="card4.title" :description="card4.description"
        :imageUrl="card4.path" />
      <ServiceCard :index="5" @click="openDetailedSer(4)" :title="card5.title" :description="card5.description"
        :imageUrl="card5.path" />
    </div>
    <RouterLink to="/service">Все услуги</RouterLink>
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

.cards {
  width: 100%;
  display: flex;
  justify-content: space-between;
  visibility: hidden;
}

.showCards {
  animation: fadeInUp;
  animation-duration: 1s;
  opacity: 1;
  visibility: visible;
}

.homeService a {
  text-decoration: none;
  font-weight: 500;
  margin-top: 50px;
  background: #fff;
  color: #182061;
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
  font-weight: 400;
}

.homeService a:hover {
  background: #182061;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.homeService a:hover button {
  color: #fff;
}


@media (max-width: 1300px) {
  #groupTwo {
    flex-wrap: wrap;
  }

  #groupTwo .serviceCard {
    width: 46%;
  }

}

@media (max-width: 1140px) {
  #groupTwo .serviceCard {
    width: 100%;
  }

}

@media (max-width: 990px) {
  #groupOne {
    flex-wrap: wrap;
  }
}

@media (max-width: 900px) {
  .homeService {
    padding: 0;
  }
}
</style>
