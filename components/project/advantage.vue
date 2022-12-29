<template>
  <section class="advantage">
    <img class="advantage__image" src="/advantage.png" alt="на изображении автоматическая коробка передач">
    <div class="advantage__information-card">
      <h2 class="advantage__title">Клиенты выбирают нас,
        потому что:</h2>
      <div class="advantage__container-list">
        <ul class="advantage__list" v-for="item in items" :key="item.id">
          <li class="advantage__list-item">
            <img class="advantage__logos" :src="item.src" alt="изображение логотипов на тематику автомастерских">
            <p class="advantage__paragraph" v-html="item.title"/>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "advantage",
  data: () => ({
    items: [
      { id: 1, src: "/advantage-logo1.svg", title: "Диагностика DSG S-Tronic Powershift - <span style='font-weight: bold'>бесплатно</span>" },
      { id: 2, src:  "/advantage-logo4.svg", title: "У нас работают только <span style='font-weight: bold'>опытные механики и слесаря</span>" },
      { id: 3, src: "/advantage-logo2.svg", title:  "Мы производим <span style='font-weight: bold'>быстрый и качественный ремонт АКПП</span>"},
      { id: 4, src: "/advantage-logo5.svg",  title: "Адаптация коробки передач <span style='font-weight: bold'>DSG S-Tronic Powershift - бесплатно</span>" },
      { id: 5, src: "/advantage-logo3.svg",  title: "В нашем сервисе <span style='font-weight: bold'>адекватные цены на услуги</span>" },
      { id: 6, src: "/advantage-logo6.svg",  title: "Мы работаем на рынке уже <span style='font-weight: bold'>более 10 лет</span>" },
    ],
  })

}
</script>

<style scoped lang="scss">
.advantage {
  width: 1645px;
  min-height: 750px;
  margin-left: 76px;
  position: relative;
  outline: green solid 5px;

  margin-top: -210px;
  &__image {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: contain;

  }

  &__information-card {
    display: flex;
    flex-direction: column;
    width: 770px;
    height: 600px;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 15px;
    position: absolute;
    top: 0px;
    right: 0;


  }


  &__title {
    max-width: 730px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-top: 35px;
    align-self: center;
  }
  &__container-list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-self: center;
  }

  &__list {

    &-item {
      width: 360px;
      display: flex;
      margin-bottom: 48px;
    }
  }



  &__logos {
    width: 64px;
    height: 64px;
  }

  &__paragraph {
    margin-top: 14px;
    margin-left: 24px;
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
