<template>
  <section class="contacts">
    <h2 class="contacts__title">Мы всегда будем рады видеть вас в нашем сервисе!</h2>
    <div class="contacts__maps-container">
      <div class="contacts__maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.951623694784!2d30.
    441293415680033!3d59.99929586416652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x469632f93e0db82d%3A0x29d5a9ef44282a13!2z0J
    _QuNGB0LrQsNGA0ZHQstGB0LrQuNC5INC_0YAuLCAxMTksINCh0LDQvdC60YIt0J
    _QtdGC0LXRgNCx0YPRgNCzLCAxOTUyNzM!5e0!3m2!1sru!2sru!4v1661424461414!5m2!1sru!2sru"
                width="760" height="600" style="border:0;" allowfullscreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="contacts__address-container">
        <p class="contacts__address-text">Санкт-Петербург</p>
        <p class="contacts__address-text">Пискарёвский проспект 119</p>
        <a class="contacts__address-link" href="remontdsg-spb.ru">remontdsg-spb@yandex.ru</a>
        <a class="contacts__phone" href="tel:+79539979283">+7 (953) 997 92 83</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contacts"
}
</script>

<style scoped lang="scss">
.contacts {
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 96px 0 96px 0;


  &__title {
    max-width: 1006px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 96px;

  }

  &__maps-container {
    display: flex;
    justify-content: space-between;
  }

  &__maps {
    border: 4px solid #FF0000;
    border-radius: 15px;
  }

  &__address-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: 59px;
  }

  &__address-text {
    max-width: 312px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 36px;
    line-height: 51px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #000000;

  }

  &__address-link {
    max-width: 457px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #000000;

  }

  &__phone {
    text-decoration: none;
    max-width: 337px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #000000;

  }

}

</style>
