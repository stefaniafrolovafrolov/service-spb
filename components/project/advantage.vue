<template>
  <section class="advantage" id="1">
    <img class="advantage__image2222" src="image%202.svg" alt="изображение коробки передач">
    <div class="advantage__image"></div>
    <div class="advantage__information-card">
      <h2 class="advantage__title">Клиенты выбирают нас,
        потому что:</h2>
      <div class="advantage__container-list">
        <ul class="advantage__list">
          <li class="advantage__list-item" v-for="item in items" :key="item.id">
            <div class="advantage__wrapper-logos">
              <img class="advantage__logos" :src="item.src" alt="изображение логотипов на тематику автомастерских">
            </div>
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
      {
        id: 1,
        src: "advantage-logo1.svg",
        title: "Диагностика DSG S-Tronic Powershift - <span style='font-weight: bold'>бесплатно</span>"
      },
      {
        id: 2,
        src: "advantage-logo4.svg",
        title: "У нас работают только <span style='font-weight: bold'>опытные механики и слесаря</span>"
      },
      {
        id: 3,
        src: "advantage-logo2.svg",
        title: "Мы производим <span style='font-weight: bold'>быстрый и качественный ремонт АКПП</span>"
      },
      {
        id: 4,
        src: "advantage-logo5.svg",
        title: "Адаптация коробки передач <span style='font-weight: bold'>DSG S-Tronic Powershift - бесплатно</span>"
      },
      {
        id: 5,
        src: "advantage-logo3.svg",
        title: "В нашем сервисе <span style='font-weight: bold'>адекватные цены на услуги</span>"
      },
      {
        id: 6,
        src: "advantage-logo6.svg",
        title: "Мы работаем на рынке уже <span style='font-weight: bold'>более 10 лет</span>"
      },
    ],
  })

}
</script>

<style scoped lang="scss">

.advantage {
  position: relative;
  max-width: 1645px;
  min-height: 750px;
  margin-left: 76px;
  background-image: url("/advantage.png");
  background-repeat: no-repeat;
  display: flex;
  margin-top: -310px;
  margin-bottom: 40px;


  @media (max-width: 1735px) {
    max-width: 1582px;
    min-height: 606px;
    margin-top: -250px;
    margin-left: 50px;
  }

  @media (max-width: 1643px) {
    max-width: 1482px;
  }

  @media (max-width: 1543px) {
    max-width: 1362px;
  }

  @media (max-width: 1440px) {
    background-position: left;
    background-size: 61% 100%;
    max-width: 1332px;
    min-height: 606px;
    margin-top: -250px;
    margin-left: 50px;
  }

  @media (max-width: 1390px) {
    max-width: 1212px;
  }

  @media (max-width: 1280px) {
    background-size: 55% 100%;
    max-width: 1182px;
    min-height: 490px;
    margin-top: -220px;
    margin-left: 57px;
  }

  @media (max-width: 1245px) {
    max-width: 1112px;
  }

  @media (max-width: 1180px) {
    max-width: 960px;
  }

  @media (max-width: 1024px) {
    max-width: 975px;
    min-height: 485px;
    margin-top: -150px;
    margin-left: 8px;
    margin-bottom: 48px;
  }

  @media (max-width: 990px) {
    margin: 0 auto;
    margin-top: -120px;
    max-width: 850px;
  }

  @media (max-width: 870px) {
    max-width: 800px;
  }

  @media (max-width: 820px) {
    background-image: none;
    height: 760px;
    max-width: 660px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 765px) {
    height: 1100px;
  }

  @media (max-width: 692px) {
    height: 1000px;
  }

  @media (max-width: 560px) {
    height: 865px;
  }

  @media (max-width: 475px) {
    max-width: 415px;
    height: 690px;
  }

  @media (max-width: 410px) {
    max-width: 272px;
    margin: 0 auto;
    min-height: 555px;
    margin-top: -50px;
    margin-bottom: 31px;
    height: 630px;
  }

  &__image2222 {
    display: none;


    @media (max-width: 820px) {
      display: block;
      position: absolute;
      width: 80%;
      height: 80%;
      top: 290px;
      left: 10%;
      z-index: 3;
    }

    @media (max-width: 765px) {
      width: 85%;
      height: 85%;
      top: 440px;
    }

    @media (max-width: 692px) {
      top: 400px;
    }

    @media (max-width: 610px) {
      top: 385px;
    }

    @media (max-width: 560px) {
      top: 355px;
    }

    @media (max-width: 475px) {
      top: 290px;
    }

    @media (max-width: 410px) {
      width: 272px;
      height: 412px;
      top: 370px;
      left: 0;
    }
  }

  &__image {
    flex: 1;
    object-fit: cover;

    @media (max-width: 1024px) {

    }

    @media (max-width: 820px) {
      display: none;
    }
  }

  &__information-card {
    display: flex;
    flex-direction: column;
    max-width: 770px;
    height: 600px;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 15px;
    margin-top: 76px;
    z-index: 2;

    @media (max-width: 1440px) {
      width: 624px;
      height: 486px;
    }

    @media (max-width: 1280px) {
      margin-top: 56px;
      width: 610px;
      height: 437px;
      margin-bottom: 11px;
    }

    @media (max-width: 1024px) {
      margin-top: 16px;
      width: 600px;
      min-height: 466px;
      margin-bottom: 1px;
    }

    @media (max-width: 820px) {
      width: 660px;
      margin-top: 0;
    }

    @media (max-width: 768px) {
      min-height: 513px;
    }

    @media (max-width: 765px) {
      height: 70%;
    }

    @media (max-width: 692px) {
      width: 100%;
    }

    @media (max-width: 475px) {
      margin-top: 0;
      max-width: 415px;
      height: 60%;
    }

    @media (max-width: 410px) {
      max-width: 272px;
      height: 412px;
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
    margin-left: 20px;

    @media (max-width: 1440px) {
      font-size: 45px;
      line-height: 55px;
      margin-left: 23px;
    }

    @media (max-width: 1280px) {
      font-size: 40px;
      line-height: 49px;
      margin: 40px 0 35px 40px;

    }

    @media (max-width: 1024px) {
      font-size: 42px;
      line-height: 51px;
      margin-left: 22px;
      margin-top: 48px;
    }

    @media (max-width: 768px) {
      max-width: 547px;
      font-size: 46px;
      line-height: 56px;
      margin-top: 53px;
      margin-left: 0;
      margin-right: 45px;
    }

    @media (max-width: 765px) {
      margin-top: 30px;
      margin-left: 30px;
      font-size: 39px;
      line-height: 46px;
    }

    @media (max-width: 692px) {
      font-size: 36px;
      line-height: 46px;
    }

    @media (max-width: 560px) {
      font-size: 30px;
      line-height: 40px;
    }

    @media (max-width: 475px) {
      margin: 14px 0 34px 14px;
      max-width: 244px;
      font-size: 25px;
      line-height: 29px;
    }

    @media (max-width: 410px) {
      margin: 14px 0 14px 14px;
      max-width: 244px;
      font-size: 20px;
      line-height: 24px;
    }

  }

  &__container-list {
    margin-top: 72px;
    max-width: 718px;
    margin-left: 20px;
    margin-right: 32px;
    align-self: center;

    @media (max-width: 1440px) {
      margin-top: 42px;
      width: 562px;
    }

    @media (max-width: 1280px) {
      width: 520px;
      height: 100%;
    }

    @media (max-width: 820px) {
      width: 590px;
    }

    @media (max-width: 765px) {
      max-width: 90%;
    }

    @media (max-width: 475px) {
      width: 90%;
      margin: 0;
    }

    @media (max-width: 410px) {
      width: 237px;
    }

  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 765px) {
      grid-template-columns: repeat(1, 1fr);
      height: 100%;
    }

    &-item {
      max-width: 360px;
      display: flex;
      margin-bottom: 48px;

      @media (max-width: 1440px) {
        max-width: 281px;
        gap: 10px;
        margin-bottom: 38px;
      }

      @media (max-width: 1280px) {
        max-width: 263px;
        margin-bottom: 30px;
        gap: 14px;
      }

      @media (max-width: 1024px) {
        max-width: 270px;
        margin-bottom: 42px;
      }

      @media (max-width: 768px) {
        max-width: 300px;
        margin-bottom: 40px;
      }

      @media (max-width: 765px) {
        max-width: 100%;
      }

      @media (max-width: 475px) {
        width: 100%;
      }

      @media (max-width: 410px) {
        max-width: 237px;
        margin-bottom: 11px;
      }

    }

  }

  &__wrapper-logos {
    display: block;
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

    @media (max-width: 1024px) {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 768px) {
      width: 55px;
      height: 55px;
    }

    @media (max-width: 765px) {
      width: 75px;
      height: 75px;
    }

    @media (max-width: 560px) {
      width: 55px;
      height: 55px;
    }

    @media (max-width: 475px) {
      width: 48px;
      height: 48px;
    }

    @media (max-width: 410px) {
      width: 43px;
      height: 43px;
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
      max-width: 210px;
      font-size: 14px;
      line-height: 17px;
      margin-left: 9px;
    }

    @media (max-width: 1280px) {
      margin-left: 9px;
      margin-top: 11px;
    }

    @media (max-width: 1024px) {
      max-width: 215px;
      margin-left: 10px;

    }

    @media (max-width: 768px) {
      max-width: 220px;
      font-size: 15px;
      line-height: 19px;
    }

    @media (max-width: 765px) {
      max-width: 320px;
      font-size: 20px;
      line-height: 29px;
      margin-left: 25px;
    }

    @media (max-width: 560px) {
      margin-top: 5px;
    }

    @media (max-width: 475px) {
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 410px) {
      max-width: 191px;
      font-size: 13px;
      line-height: 15px;
      margin-top: 5px;
      margin-left: 9px;
    }

  }

}

</style>
