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
                width="100%" height="100%" style="border-radius:10px;" allowfullscreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="contacts__address-container">
        <p class="contacts__address-text">Санкт-Петербург</p>
        <p class="contacts__address-text">Пискарёвский проспект 119</p>
        <a class="contacts__address-link" href="mailto:remontdsg-spb@yandex.ru">remontdsg-spb@yandex.ru</a>
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
  max-width: 1302px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 96px 0 96px 0;

  @media (max-width: 1440px) {
    padding: 80px 0 80px 0;
  }

  @media (max-width: 1280px) {
    max-width: 961px;
    padding: 72px 0 72px 0;
  }

  @media (max-width: 1024px) {
    max-width: 854px;
    padding: 48px 0 48px 0;
  }

  @media (max-width: 870px) {
    max-width: 754px;
    padding: 38px 0 38px 0;
  }

  @media (max-width: 768px) {
    max-width: 708px;
  }

  @media (max-width: 720px) {
    max-width: 620px;
  }

  @media (max-width: 630px) {
    max-width: 500px;
  }

  @media (max-width: 510px) {
    max-width: 400px;
    padding: 36px 0 30px 0;
  }

  @media (max-width: 410px) {
    max-width: 360px;
  }

  @media (max-width: 375px) {
    max-width: 272px;
  }

  &__title {
    max-width: 1006px;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 86px;

    @media (max-width: 1440px) {
      max-width: 815px;
      font-size: 48px;
      line-height: 58px;
      margin-bottom: 54px;
    }

    @media (max-width: 1280px) {
      max-width: 733px;
      font-size: 43px;
      line-height: 52px;
      margin-bottom: 60px;
    }

    @media (max-width: 1024px) {
      max-width: 652px;
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 51px;
    }

    @media (max-width: 870px) {
      margin-bottom: 41px;
    }

    @media (max-width: 720px) {
      max-width: 480px;
      font-size: 30px;
      line-height: 38px;
      margin-bottom: 31px;
    }

    @media (max-width: 630px) {
      max-width: 400px;
      font-size: 27px;
      line-height: 34px;
    }

    @media (max-width: 375px) {
      max-width: 212px;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 16px;
    }

  }

  &__maps-container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__maps {
    border: 4px solid #FF0000;
    border-radius: 15px;
    width: 760px;
    min-height: 600px;

    @media (max-width: 1440px) {
     width: 616px;
      min-height: 486px;
    }

    @media (max-width: 1280px) {
      width: 554px;
      min-height: 436px;
    }

    @media (max-width: 1024px) {
      width: 492px;
      min-height: 388px;
    }

    @media (max-width: 870px) {
      width: 392px;
      min-height: 320px;
    }

    @media (max-width: 768px) {
      width: 708px;
      height: 389px;
    }

    @media (max-width: 720px) {
      max-width: 600px;
    }

    @media (max-width: 630px) {
      max-width: 500px;
    }

    @media (max-width: 510px) {
      max-width: 350px;
    }

    @media (max-width: 410px) {
      max-width: 320px;
    }

    @media (max-width: 375px) {
      max-width: 272px;
      height: 191px;
    }

  }

  &__address-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: 60px;

    @media (max-width: 1280px) {
      margin-left: 20px;
    }

    @media (max-width: 1024px) {
      margin-left: 10px;
    }

    @media (max-width: 768px) {
      margin-top: 20px;
      margin-left: 0px;
    }

    @media (max-width: 510px) {
      align-items: center;
    }

  }

  &__address-text {
    max-width: 483px;
    font-weight: 500;
    font-size: 36px;
    line-height: 51px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #000000;
    padding-bottom: 16px;

    @media (max-width: 1440px) {
      max-width: 430px;
      font-size: 32px;
      line-height: 41px;
    }

    @media (max-width: 1280px) {
      max-width: 386px;
      font-size: 28px;
      line-height: 37px;
      padding-bottom: 14px;
    }

    @media (max-width: 1024px) {
      max-width: 349px;
      font-size: 26px;
      line-height: 33px;
      padding-bottom: 10px;
    }

    @media (max-width: 870px) {
      max-width: 349px;
      font-size: 22px;
      line-height: 30px;
      padding-bottom: 10px;
    }

    @media (max-width: 630px) {
      max-width: 349px;
      font-size: 20px;
      line-height: 28px;
    }

    @media (max-width: 510px) {
      font-size: 18px;
      line-height: 25px;
    }

    @media (max-width: 375px) {
      line-height: 33px;
      padding-bottom: 4px;
    }

  }

  &__address-link {
    max-width: 457px;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #000000;
    padding-bottom: 16px;

    @media (max-width: 1440px) {
      font-size: 32px;
      line-height: 39px;
    }

    @media (max-width: 1280px) {
      max-width: 366px;
      font-size: 28px;
      line-height: 34px;
    }

    @media (max-width: 1024px) {
      max-width: 330px;
      font-size: 26px;
      line-height: 31px;
    }

    @media (max-width: 870px) {
      max-width: 300px;
      font-size: 22px;
      line-height: 27px;
    }

    @media (max-width: 630px) {
      max-width: 349px;
      font-size: 20px;
      line-height: 28px;

    }

    @media (max-width: 510px) {
      font-size: 18px;
      line-height: 25px;
    }

    @media (max-width: 375px) {
      line-height: 22px;
      padding-bottom: 4px;
    }

  }

  &__phone {
    text-decoration: none;
    max-width: 337px;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #000000;

    @media (max-width: 1440px) {
      font-size: 32px;
      line-height: 39px;
    }

    @media (max-width: 1280px) {
      font-size: 28px;
      line-height: 34px;
    }

    @media (max-width: 1024px) {
      font-size: 26px;
      line-height: 31px;
    }

    @media (max-width: 870px) {
      max-width: 300px;
      font-size: 22px;
      line-height: 27px;
    }

    @media (max-width: 630px) {
      max-width: 349px;
      font-size: 20px;
      line-height: 28px;

    }

    @media (max-width: 510px) {
      font-size: 18px;
      line-height: 25px;
    }

    @media (max-width: 375px) {
      line-height: 22px;
      padding-bottom: 4px;
    }

  }

}

</style>
