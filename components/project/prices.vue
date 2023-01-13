<template>
  <section class="prices" id="3">
    <div class="prices__card">
      <h2 class="prices__title">Вас порадуют цены на наши услуги</h2>
      <div class="prices__container">
        <ul class="prices__list">
          <li class="prices__list-item" v-for="item in items" :key="item.id">
            <p v-html="item.title"></p>
            <strong style="font-weight: 900">{{ item.sum }}</strong>
          </li>
        </ul>
      </div>
      <h3 class="prices__text">Если у вас остались вопросы вы всегда можете</h3>
      <a class="prices__button-href" href="tel:+79539979283"><button class="prices__button">Связаться с нами</button></a>
      <p class="prices__paragraph"><span>*</span>Ремонт под ключ<strong> — запчасти + установка + адаптация</strong></p>
    </div>
  </section>
</template>

<script>
export default {
  name: "prices",
  data: () => ({
    items: [
      {id: 1, title: "Ремонт АКПП <strong>DSG S-Tronic Powershift</strong>", sum: "от 10 000"},
      {id: 2, title: "Замена сцепления <strong>DSG 6</strong><span style='color: red'>*</span>", sum: "42 000"},
      {id: 3, title: "Замена сцепления <strong>DSG 7</strong><span style='color: red'>*</span>", sum: "28 000"},
      {id: 4, title: "Замена сцепления <strong>DSG S Tronic 0B5</strong><span style='color: red'>*</span>", sum: "98 000"},
      {id: 5, title: "Замена сцепления <strong>Powershift DCT250</strong><span style='color: red'>*</span>", sum: "56 000"},
      {id: 6, title: "Замена сцепления  <strong>Powershift DCT450</strong><span style='color: red'>*</span>", sum: "70 000"},
      {id: 7, title: "Замена маховика <strong>АКПП DSG S-Tronic Powershift</strong><span style='color: red'>*</span>", sum: "12 000"},
      {id: 8, title: "Ремонт мехатроника <strong>DQ200</strong>", sum: "18 000"},
      {id: 9, title: "Ремонт мехатроника <strong>DQ500</strong>", sum: "18 000"},
      {id: 10, title: "Ремонт мехатроника <strong>DL501 0B5</strong>", sum: "20 000"},
      {id: 11, title: "Ремонт мехатроника <strong>DCT450</strong>", sum: "35 000"},
      {id: 12, title: "Снятие/установка <strong>АКПП</strong>", sum: "от 8000"},
      {id: 13, title: "Снятие/установка <strong>мехатроника(гидроблока)</strong>", sum: "от 4000"},
      {id: 14, title: "Переборка <strong>мехатроника</strong>", sum: "от 6000"},
      {id: 15, title: "Переборка <strong>АКПП</strong>", sum: "от 8000"},
    ]
  })
}
</script>

<style scoped lang="scss">
.prices {
  display: flex;
  justify-content: center;
  background-image: url("/prices-fon.png");
  background-size: cover;
  min-height: 850px;

  @media (max-width: 1440px) {
    min-height: 692px;
  }

  @media (max-width: 1280px) {
    min-height: 623px;
  }

  @media (max-width: 1024px) {
    min-height: 528px;
  }

  @media (max-width: 768px) {
    min-height: 846px;
  }

  @media (max-width: 525px) {
    min-height: 100%;
  }

  @media (max-width: 320px) {
    min-height: 420px;
  }


  &__card {
    max-width: 1580px;
    height: 100%;
    margin-top: -96px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1580px) {
      max-width: 1380px;
    }

    @media (max-width: 1440px) {
      margin-top: -80px;
    }

    @media (max-width: 1330px) {
      max-width: 1180px;
    }

    @media (max-width: 1280px) {
      margin-left: 65px;
      margin-right: 65px;
      margin-top: -72px;
    }

    @media (max-width: 1135px) {
      margin-left: 0;
      margin-right: 0;
      width: 95%;
    }

    @media (max-width: 1024px) {
      margin-left: 40px;
      margin-right: 40px;
      margin-bottom: 48px;
    }

    @media (max-width: 768px) {
      margin-left: 30px;
      margin-right: 30px;
    }

    @media (max-width: 320px) {
      margin-left: 24px;
      margin-right: 24px;
      max-width: 272px;
      margin-bottom: 24px;
    }

  }

  &__title {
    max-width: 612px;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-top: 30px;
    margin-bottom: 42px;

    @media (max-width: 1440px) {
      max-width: 465px;
      font-size: 48px;
      line-height: 58px;
      margin-top: 30px;
      margin-bottom: 24px;
    }

    @media (max-width: 1280px) {
      margin-top: 38px;
      margin-bottom: 10px;
    }

    @media (max-width: 1024px) {
      max-width: 424px;
      font-size: 42px;
      line-height: 51px;
      margin-top: 32px;
      margin-bottom: 25px;
    }

    @media (max-width: 525px) {
      max-width: 312px;
      font-size: 30px;
      line-height: 32px;
      margin-top: 20px;
    }

    @media (max-width: 320px) {
      max-width: 212px;
      font-size: 20px;
      line-height: 24px;
      margin-top: 26px;
    }

  }

  &__container {
    max-width: 1400px;
    align-items: center;
    margin-left: 90px;
    margin-right: 90px;

    @media (max-width: 1580px) {
      margin-left: 0;
      margin-right: 0;
      max-width: 96%;
    }

    @media (max-width: 1440px) {
      margin-left: 80px;
      margin-right: 80px;
    }

    @media (max-width: 1280px) {
      margin-left: 58px;
      margin-right: 58px;
    }

    @media (max-width: 1210px) {
      margin-left: 0;
      margin-right: 0;
      max-width: 96%;
    }

    @media (max-width: 1024px) {
      margin-left: 15px;
      margin-right: 15px;
    }

    @media (max-width: 768px) {
      margin-left: 86px;
      margin-right: 86px;
      width: 80%;
    }

    @media (max-width: 480px) {
      width: 90%;
    }

    @media (max-width: 320px) {
      width: 232px;
    }

  }

  &__list {
    column-count: 2;
    column-gap: 50px;

    @media (max-width: 1440px) {
      column-gap: 38px;
    }

    @media (max-width: 1280px) {
      column-gap: 34px;
    }

    @media (max-width: 1024px) {
      column-gap: 20px;
    }

    @media (max-width: 768px) {
      column-count: 1;
    }

    &-item {
      padding-bottom: 24px;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
      list-style: none;
      display: flex;
      justify-content: space-between;

      @media (max-width: 1440px) {
        font-size: 20px;
        line-height: 24px;
        padding-bottom: 19px;
      }

      @media (max-width: 1280px) {
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 17px;
      }

      @media (max-width: 1055px) {
        max-width: 100%;
        font-size: 16px;
        line-height: 19px;
        padding-bottom: 15px;
      }

      @media (max-width: 961px) {
        font-size: 12px;
        line-height: 17px;
      }

      @media (max-width: 433px) {
        font-size: 9px;
        line-height: 10px;
        padding-bottom: 12px;
      }

      @media (max-width: 340px) {
        font-size: 8px;
        line-height: 10px;
        padding-bottom: 8px;
      }

    }
  }

  &__text {
    max-width: 830px;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 28px 0 18px 0;

    @media (max-width: 1440px) {
      margin: 20px 0 10px 0;
      font-size: 32px;
      line-height: 39px;
    }

    @media (max-width: 1280px) {
      margin: 16px 0 15px 0;
      font-size: 24px;
      line-height: 29px;
    }

    @media (max-width: 1024px) {
      margin: 5px 0 10px 0;
      font-size: 24px;
      line-height: 29px;
    }

    @media (max-width: 768px) {
      margin: 30px 0 8px 0;
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: 525px) {
      font-size: 16px;
      line-height: 20px;
    }

    @media (max-width: 320px) {
      margin: 16px 0 4px 0;
      font-size: 10px;
      line-height: 12px;
    }

  }

  &__button {
    border: none;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 360px;
    height: 71px;
    background: #FF0000;
    border-radius: 10px;

    &:hover {
      background: #C60000;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    @media (max-width: 1440px) {
      width: 292px;
      height: 58px;
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: 1280px) {
      width: 262px;
      height: 52px;
      font-size: 18px;
      line-height: 22px;
    }

    @media (max-width: 1024px) {
      width: 233px;
      height: 46px;
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 424px) {
      width: 166px;
      height: 33px;
      font-size: 14px;
      line-height: 10px;
    }

    @media (max-width: 375px) {
      width: 116px;
      height: 23px;
      font-size: 8px;
      line-height: 10px;
    }

  }

  &__button-href {
    text-decoration: none;
    color: #FFFFFF;
  }

  &__paragraph {
    max-width: 434px;
    white-space: nowrap;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.01em;
    margin: 9px 0 20px 83px;
    align-self: start;

    @media (max-width: 1440px) {
      font-size: 14px;
      line-height: 17px;
      margin: 0 0 16px 60px;
    }


    @media (max-width: 1280px) {
      font-size: 12px;
      line-height: 15px;
      margin: 0 0 14px 53px;
    }

    @media (max-width: 1024px) {
      margin: 0 0 16px 9px;
    }

    @media (max-width: 768px) {
      margin: 25px 0 20px 87px;
    }

    @media (max-width: 525px) {
      margin: 20px 0 17px 34px;
    }

    @media (max-width: 630px) {
      margin: 20px 0 17px 18px;
    }

    @media (max-width: 430px) {
      font-size: 10px;
      line-height: 15px;
      margin: 13px 0 8px 20px;
    }

    @media (max-width: 380px) {
      font-size: 6px;
      line-height: 7px;
    }

  }

  span {
    color: #FF0000;
    opacity: 0.8;
  }

}
</style>
