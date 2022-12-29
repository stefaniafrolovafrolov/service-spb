<template>
  <section class="prices">
    <div class="prices__card">
      <h2 class="prices__title">Вас порадуют цены на наши услуги</h2>
      <div class="prices__container">
        <ul class="prices__list" v-for="item in items" :key="item.id">
          <li class="prices__list-item" v-html="item.title"></li>
        </ul>

      </div>
      <h3 class="prices__text">Если у вас остались вопросы вы всегда можете</h3>
      <button class="prices__button">Связаться с нами</button>
      <p class="prices__paragraph"><span>*</span>Ремонт под ключ<strong> — запчасти + установка + адаптация</strong></p>
    </div>


  </section>
</template>

<script>
export default {
  name: "prices",
  data: () => ({
    items: [
      {id: 1, title: "Ремонт АКПП <strong>DSG S-Tronic Powershift</strong>", sum: "<strong>от 10 000</strong>"},
      {id: 2, title: "Замена сцепления DSG 6*", sum: "42 000"},
      {id: 3, title: "Замена сцепления DSG 7*", sum: "28 000"},
      {id: 4, title: "Замена сцепления DSG S Tronic 0B5*", sum: "98 000"},
      {id: 5, title: "Замена сцепления Powershift DCT250*", sum: "56 000"},
      {id: 6, title: "Замена сцепления  Powershift DCT450*", sum: "70 000"},
      {id: 7, title: "Замена маховика АКПП DSG S-Tronic Powershift*", sum: "12 000"},
      {id: 8, title: "Ремонт мехатроника DQ200", sum: "18 000"},
      {id: 9, title: "Ремонт мехатроника DQ500", sum: "18 000"},
      {id: 10, title: "Ремонт мехатроника DL501 0B5", sum: "20 000"},
      {id: 11, title: "Ремонт мехатроника DCT450", sum: "35 000"},
      {id: 12, title: "Снятие/установка АКПП", sum: "от 8000"},
      {id: 13, title: "Снятие/установка мехатроника(гидроблока)", sum: "от 4000"},
      {id: 14, title: "Переборка мехатроника", sum: "от 6000"},
      {id: 15, title: "Переборка АКПП ", sum: "Переборка АКПП"},
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
  min-height: 946px;

  outline: 5px solid red;

  &__card {
    outline: 5px solid red;
    width: 1580px;
    height: 850px;
    margin-top: -96px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__title {
    max-width: 612px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 40px;

  }

  &__container {
    width: 1400px;
    min-height: 400px;
    align-items: center;
    outline: 5px solid red;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
  }

  &__list {


    &-item {
      padding-bottom: 24px;
      font-family: 'Inter', "Arial", sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
      list-style: none;
      margin-left: 60px;
    }
  }

  &__text {
    max-width: 830px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 48px 0 18px 0;
  }

  &__button {
    border: none;
    font-family: 'Inter', "Arial", sans-serif;
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
  }

  &__paragraph {
    width: 434px;
    white-space: nowrap;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.01em;
    margin: 9px 0 20px 83px;
    align-self: start;
  }

  span {
    color: #FF0000;
    opacity: 0.8;
  }


}
</style>
