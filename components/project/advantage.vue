<template>
  <section class="advantage">
    <div class="container">
      <img class="advantage__image" src="/advantage.png" alt="на изображении автоматическая коробка передач">
      <div class="advantage__information-card">
        <h2 class="advantage__title">Клиенты выбирают нас,
          потому что:</h2>
        <div class="advantage__container-list">
          <ul class="advantage__list">
            <li class="advantage__list-item" v-for="item in items" :key="item.id">
              <img class="advantage__logos" :src="item.src" alt="изображение логотипов на тематику автомастерских">
              <p class="advantage__paragraph" v-html="item.title"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "advantage",
  data: () => ({
    items: [
      {
        id: 1,
        src: "/advantage-logo1.svg",
        title: "Диагностика DSG S-Tronic Powershift - <span style='font-weight: bold'>бесплатно</span>"
      },
      {
        id: 2,
        src: "/advantage-logo4.svg",
        title: "У нас работают только <span style='font-weight: bold'>опытные механики и слесаря</span>"
      },
      {
        id: 3,
        src: "/advantage-logo2.svg",
        title: "Мы производим <span style='font-weight: bold'>быстрый и качественный ремонт АКПП</span>"
      },
      {
        id: 4,
        src: "/advantage-logo5.svg",
        title: "Адаптация коробки передач <span style='font-weight: bold'>DSG S-Tronic Powershift - бесплатно</span>"
      },
      {
        id: 5,
        src: "/advantage-logo3.svg",
        title: "В нашем сервисе <span style='font-weight: bold'>адекватные цены на услуги</span>"
      },
      {
        id: 6,
        src: "/advantage-logo6.svg",
        title: "Мы работаем на рынке уже <span style='font-weight: bold'>более 10 лет</span>"
      },
    ],
  })

}
</script>

<style scoped lang="scss">
.advantage {
  max-width: 1645px;
  min-height: 750px;
  margin-left: 76px;
  position: relative;
  outline: green solid 5px;
  margin-top: -300px;

  @media (max-width: 1440px) {
    max-width: 1332px;
    min-height: 606px;
    margin-top: -250px;
    margin-left: 50px;
  }

  @media (max-width: 1280px) {
    max-width: 1182px;
    min-height: 490px;
    margin-top: -150px;
    margin-left: 57px;
  }

  &__image {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: contain;

    @media (max-width: 1440px) {
      max-width: 60%;
      height: 60%;
    }

    @media (max-width: 1280px) {
      max-width: 56%;
      height: 60%;
    }

  }

  &__information-card {
    display: flex;
    flex-direction: column;
    width: 770px;
    min-height: 600px;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 15px;
    position: absolute;
    top: 70px;
    right: 0;

    @media (max-width: 1440px) {
      width: 624px;
      min-height: 486px;
    }

    @media (max-width: 1280px) {
      width: 610px;
      min-height: 437px;
    }

  }

  &__title {
    max-width: 730px;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-top: 47px;
    align-self: center;

    @media (max-width: 1440px) {
      font-size: 45px;
      line-height: 55px;
      margin-left: 23px;
    }

    @media (max-width: 1280px) {
      font-size: 40px;
      line-height: 49px;
      margin-left: 40px;
      margin-top: 43px;
    }

  }

  &__container-list {
    margin-top: 72px;
    align-self: center;

    @media (max-width: 1440px) {
      margin-top: 50px;
    }

    @media (max-width: 1280px) {
      margin-top: 45px;
    }


  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &-item {
      max-width: 360px;
      display: flex;
      margin-bottom: 48px;

      @media (max-width: 1440px) {
        max-width: 260px;
        margin-bottom: 38px;
      }

      @media (max-width: 1280px) {
        max-width: 253px;
        margin-bottom: 35px;
      }

    }
  }

  &__logos {
    width: 64px;
    height: 64px;

    @media (max-width: 1440px) {
      width: 52px;
      height: 52px;
    }

    @media (max-width: 1280px) {
      width: 47px;
      height: 47px;
    }

  }

  &__paragraph {
    margin-top: 14px;
    margin-left: 24px;
    max-width: 271px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.06em;
    color: #000000;

    @media (max-width: 1440px) {
      font-size: 14px;
      line-height: 17px;
    }

    @media (max-width: 1280px) {
      font-size: 14px;
      line-height: 17px;
      margin-left: 9px;
      margin-top: 5px;
    }

  }

}

</style>
