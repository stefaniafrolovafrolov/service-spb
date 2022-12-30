<template>
  <section class="prices">
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
      {id: 1, title: "Ремонт АКПП <strong>DSG S-Tronic Powershift</strong>", sum: "от 10 000"},
      {id: 2, title: "Замена сцепления <strong>DSG 6</strong>*", sum: "42 000"},
      {id: 3, title: "Замена сцепления <strong>DSG 7</strong>*", sum: "28 000"},
      {id: 4, title: "Замена сцепления <strong>DSG S Tronic 0B5</strong>*", sum: "98 000"},
      {id: 5, title: "Замена сцепления <strong>Powershift DCT250</strong>*", sum: "56 000"},
      {id: 6, title: "Замена сцепления  <strong>Powershift DCT450</strong>*", sum: "70 000"},
      {id: 7, title: "Замена маховика <strong>АКПП DSG S-Tronic Powershift</strong>*", sum: "12 000"},
      {id: 8, title: "Ремонт мехатроника <strong>DQ200</strong>", sum: "18 000"},
      {id: 9, title: "Ремонт мехатроника <strong>DQ500</strong>", sum: "18 000"},
      {id: 10, title: "Ремонт мехатроника <strong>DL501 0B5</strong>", sum: "20 000"},
      {id: 11, title: "Ремонт мехатроника <strong>DCT450</strong>", sum: "35 000"},
      {id: 12, title: "Снятие/установка АКПП", sum: "от 8000"},
      {id: 13, title: "Снятие/установка мехатроника(гидроблока)", sum: "от 4000"},
      {id: 14, title: "Переборка мехатроника", sum: "от 6000"},
      {id: 15, title: "Переборка АКПП ", sum: "от 8000"},
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
    /* min-height: 400px;*/
    align-items: center;
    outline: 5px solid red;

  }

  &__list {
    /* display: grid;
     grid-template-columns: repeat(2, 2fr);*/
    column-count: 2;
    column-gap: 50px;

    &-item {
      padding-bottom: 24px;
      font-family: 'Inter', "Arial", sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
      list-style: none;
      display: flex;
      justify-content: space-between;

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
