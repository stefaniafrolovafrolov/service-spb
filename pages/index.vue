<template>
 <main class="content">
<section class="main-block">
  <article class="main-block__container">
  <h1 class="main-block__title">Профессиональный ремонт DSG
    в&nbsp;Cанкт - Петербурге</h1>
    <p class="main-block__subtitle">Бесплатные бонусы при ремонте DSG: эвакуатор,
      диагностика, адаптация
    </p>
    <div class="main-block__wrapper-button">
    <button class="main-block__button-contact">Связаться с нами</button>
    <button class="main-block__button-information">Перейти к списку услуг</button>
    </div>
  </article>
</section>

<section class="advantage">
  <img class="advantage__image" src="/advantage.png" alt="на изображении автоматическая коробка передач">
  <div class="advantage__information-card"  v-for="item in items" :key="item.id">
    <h2 class="advantage__title">{{item.title}}</h2>
    <ul class="advantage__information-list" v-for="item in item.forms" :key="item.id">
    <li class="advantage__information-list-item">
      <img class="advantage__logos" :src="item.src" alt="изображение логотипов на тематику автомастерских">
      <p class="advantage__paragraph">{{item.title}}</p>
    </li>

    </ul>
  </div>

</section>
 </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    items: [
      {id: 1, title: "Клиенты выбирают нас, потому что:",
      forms: [
        { id: 1, src: "/advantage-logo1.svg",  title: "Диагностика DSG S-Tronic Powershift - бесплатно" },
        { id: 2, src: "/advantage-logo2.svg",  title: "Мы производим быстрый и качественный ремонт АКПП" },
        { id: 3, src: "/advantage-logo3.svg",  title: "В нашем сервисе адекватные цены на услуги" },
        { id: 4, src: "/advantage-logo4.svg",  title: "У нас работают только опытные механики и слесаря" },
        { id: 5, src: "/advantage-logo5.svg",  title: "Адаптация коробки передач DSG S-Tronic Powershift - бесплатно" },
        { id: 6, src: "/advantage-logo6.svg",  title: "Мы работаем на рынке уже более 10 лет" },
       ],

  }
  ]
  })
}
</script>

<style scoped lang="scss">
.content {
  background: #F4F7FF;
}

.main-block {
  min-height: 900px;
  background-image: url("/main-block.png");

  &__container {
    display: flex;
    flex-direction: column;
    max-width: 1152px;
    margin-left: 199px;
  }

  &__title {
    max-width: 1152px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 48px;
    margin-top: 152px;
  }

  &__subtitle {
    font-family: 'Inter', "Arial", sans-serif;
    max-width: 794px;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    align-self: start;
    margin-bottom: 80px;
  }

  &__wrapper-button {
    display: flex;
  }

  &__button-contact {
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    width: 253px;
    height: 71px;
    background: #FF0000;
    border-radius: 10px;
    align-self: start;
    margin-right: 24px;
  }

  &__button-information {
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    opacity: 0.8;
    width: 324px;
    height: 71px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    align-self: start;
  }
}

.advantage {
  display: flex;
  margin-top: -240px;
  &__image {

  }

  &__information-card {
    display: flex;
    flex-direction: column;

    width: 770px;
    height: 600px;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 15px;
  }

  &__title {
    max-width: 730px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-top: 48px;
    align-self: center;
  }

  &__information-list {
    display: flex;
    flex-wrap: wrap;
  }

  &__information-list-item {
    width: 360px;
display: flex;

  }

  &__logos {

  }

  &__paragraph {
    max-width: 271px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.06em;
    color: #000000;
  }
}

</style>


