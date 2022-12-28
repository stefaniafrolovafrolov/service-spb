<template>
<header class="v-header">
  <img class="v-header__header-logo" src="/logo-header.svg" alt="логотип автосервиса">
<nav class="v-header__navigation">
  <ul class="v-header__navigation-list">
    <li class="v-header__navigation-list-item">О нас</li>
    <li class="v-header__navigation-list-item">Услуги</li>
    <li class="v-header__navigation-list-item">Цены</li>
    <li class="v-header__navigation-list-item">Отзывы</li>
    <li class="v-header__navigation-list-item">Контакты</li>
  </ul>
</nav>
  <div class="v-header__contacts">
    <a class="v-header__phone" href="tel:+79539979283">+7 (953) 997 92 83</a>
    <p class="v-header__paragraph">Заказать звонок</p>
  </div>
</header>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style scoped lang="scss">
.v-header {
  display: flex;
  justify-content: space-around;
  max-width: 1920px;
  min-height: 125px;
  background: #070A2A;

  &__header-logo {
    width: 146px;
    height: 104px;
    padding-top: 20px;
  }

  &__navigation {
    display: flex;
    align-items: center;
  }

  &__navigation-list {
    display: flex;
    width: 614px;
    justify-content: space-between;

  }

  &__navigation-list-item {
    list-style: none;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    }

  &__contacts {
    width: 208px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  &__phone {
text-decoration: none;
    max-width: 208px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    align-self: end;
  }

  &__paragraph {
    max-width: 208px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    align-self: end;
  }

}
</style>
