<template>
  <section class="reviews" id="4">
    <h2 class="reviews__title">Почему нам доверяют
      наши&nbsp;клиенты?</h2>
    <p class="reviews__subtitle">Мы заботимся о каждом клиенте и не навязываем лишние услуги
    </p>
    <div class="reviews__gallery">
      <div class="reviews__sliders-container">
        <carousel slider-id="slider-two"
                  :items="items"
                  component-slide="slide-reviews"
                  component-nav-ext="nav-ext-slide-reviews"
                  :options='slider'/>
      </div>
    </div>

  </section>
</template>

<script>
import carousel from "../carousel/carousel";

export default {
  name: "reviews",
  components: {
    carousel
  },
  data: () => ({

    slider: {
      grabCursor: true,
      slidesPerView: 1,
      loop: true,
      /*spaceBetween: 28,*/
      autoplay: {
        delay: 4000,   // пауза между перелистыванием
        disableOnInteraction: false, // вмешательство, если ложь, то слайдер не будет останавливаться после вмешательства
      },
    },
      items: [
        {
          id: 1, number: "6 февраля 2021", author: "Екатерина К.", src: "/slide-two-image-star.svg", text: "Отличная" +
            " автомастерская. Благодарю мастера и по совместительству менеджера и&nbsp;владельца Андрея и его команду" +
            " профессиональных автомехаников за помощь  и проделанную работу. Ребята отлично разбираются в вопросах" +
            " АКПП, КПП, РКП    и&nbsp;связанных с ними агрегатов. В моем случае замена сцепления и масла коробки передач," +
            " также прочистили дроссельную заслонку и поменяли свечи. В общем отличная&nbsp;мастерская, очень рекомендую\n"
        },
        {
          id: 2,
          number: "17 августа 2022",
          author: "Александр Е.",
          src: "/slide-two-image-star.svg",
          text: "Честный и" +
            " грамотный мастер. Рекомендую."
        },
        {
          id: 3, number: "22 марта 2021", author: "DG", src: "/slide-two-image-star.svg", text: "Менял сцепление и" +
            " маховик на DSG ! Быстро ! Качественно ! Бесплатный эвакуатор !! Рекомендую !!"
        },
        {
          id: 4, number: "1 декабря 2021", author: "Головко Максим", src: "/slide-two-image-star.svg", text: "Ребята" +
            " молодцы произошёл гарантийный случай отреагировали сразу,всё переделали"
        },
        {
          id: 5,
          number: "15 сентября 2021",
          author: "Константин Волков",
          src: "/slide-two-image-star.svg",
          text: "Хороший" +
            " сервис, одно из немногих мест где не разводят"
        },
        {
          id: 6, number: "20 мая 2021", author: "Constantin L.", src: "/slide-two-image-star.svg", text: "Отличный" +
            " сервис и грамотный мастер"
        },
        {
          id: 7, number: "9 мая 2021", author: "Алексей У.", src: "/slide-two-image-star.svg", text: "Приезжал на" +
            " диагностику 0B5\n" +
            "Быстро, профессионально + сделали бесплатно адаптацию."
        },
        {
          id: 8,
          number: "29 апреля 2021",
          author: "Тролеф Иван",
          src: "/slide-two-image-star.svg",
          text: "Хорошие специ" +
            " без обмана"
        },
      ]
    })
  }

</script>

<style scoped lang="scss">
.reviews {
  width: 100%;
  height: 100%;
  background-image: url("/reviews-fon.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    max-width: 900px;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin-top: 134px;
    margin-bottom: 36px;

    @media (max-width: 1440px) {
      max-width: 537px;
      font-size: 48px;
      line-height: 58px;
      margin-bottom: 18px;
      margin-top: 108px;
    }

    @media (max-width: 1280px) {
      margin-bottom: 15px;
      margin-top: 98px;
    }

    @media (max-width: 1024px) {
      max-width: 429px;
      font-size: 38px;
      line-height: 46px;
      margin-bottom: 17px;
      margin-top: 65px;
    }

    @media (max-width: 525px) {
      max-width: 350px;
      font-size: 30px;
      line-height: 38px;
      margin-bottom: 13px;
      margin-top: 40px;
    }

    @media (max-width: 425px) {
      max-width: 272px;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 8px;
      margin-top: 36px;
    }

  }

  &__subtitle {
    max-width: 788px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 19px;

    @media (max-width: 1440px) {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 18px;
    }

    @media (max-width: 1280px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 16px;
    }

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 525px) {
      max-width: 250px;
      font-size: 14px;
      line-height: 17px;
    }

    @media (max-width: 425px) {
      max-width: 207px;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 18px;
    }

  }

  &__gallery {
    width: 900px;
    height: 100%;
    margin-bottom: 124px;

    @media (max-width: 1440px) {
      width: 730px;
      height: 280px;
      margin-bottom: 116px;
    }

    @media (max-width: 1280px) {
      width: 655px;
      height: 264px;
      margin-bottom: 98px;
    }

    @media (max-width: 1024px) {
      width: 583px;
      height: 260px;
     margin-bottom: 72px;
    }

    @media (max-width: 710px) {
      max-width: 500px;
      height: 100%;
    }

    @media (max-width: 610px) {
      max-width: 400px;
    }

    @media (max-width: 525px) {
      margin-bottom: 92px;
    }

    @media (max-width: 410px) {
      max-width: 80%;
    }

  }

  &__sliders-container {
    margin: 0 auto;
    max-width: 900px;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 10px;
  }

}
</style>
