<template>
  <header class="v-header">
    <div class="container">
      <div style="display: flex; align-items: center; justify-content: space-between">
    <img class="v-header__header-logo" src="/logo-header.svg" alt="логотип автосервиса">
    <nav class="v-header__navigation">
      <ul class="v-header__list">
        <li class="v-header__list-item" v-for="item in items" :key="item.id">{{ item.title }}</li>
      </ul>
    </nav>
    <div class="v-header__contacts">
      <a class="v-header__phone" href="tel:+79539979283">+7 (953) 997 92 83</a>
      <p class="v-header__paragraph">Заказать звонок</p>
    </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-header",
  data: () => ({
    items: [
      {id: 1, title: "О нас"},
      {id: 2, title: "Услуги"},
      {id: 3, title: "Цены"},
      {id: 4, title: "Отзывы"},
      {id: 5, title: "Контакты"},
    ],
  })
}
</script>

<style scoped lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  background: #070A2A;



  &__header-logo {
    width: 146px;
    height: 104px;
  }

  &__navigation {
    align-items: center;
  }

  &__list {
    display: flex;
    justify-content: space-between;



    &-item {
      list-style: none;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      padding-left: 30px;

      @media (min-width: 1720px) {
        font-size: 100px;
      }
    }
  }

  &__contacts {
    max-width: 208px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  &__phone {
    text-decoration: none;
    max-width: 208px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    align-self: end;
  }

  &__paragraph {
    max-width: 208px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    align-self: end;
  }

}


</style>
