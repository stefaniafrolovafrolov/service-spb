<template>
  <section class="services" id="1">
    <h2 class="services__title">Виды ремонтных работ, которые предоставляет наш сервис</h2>
    <p class="services__subtitle">В нашем сервисе, вы всегда найдете выгодные цены на профессиональый
      ремонт коробок передач DSG6, DSG7, S-Tronic в Санкт - Петербурге.
    </p>
    <div class="services__gallery">
      <div class="services__sliders-container">
        <carousel slider-id="slider-one"
                  :items="items"
                  component-slide="slide-services"
                  component-nav-ext="nav-ext-slide-services"
                  :options='slider'/>
      </div>
    </div>
    <p class="services__text">Звоните, спрашивайте, интересуйтесь доступными для вас привелегиями и ценами.
    </p>

  </section>
</template>

<script>
import carousel from "../carousel/carousel";

export default {
  name: "services",
  components: {
    carousel
  },
  data: () => ({

    slider: {
      grabCursor: true,
      slidesPerView: 4,
      loop: true,
      spaceBetween: 28,
      autoplay: {
        delay: 2700,   // пауза между перелистыванием
        disableOnInteraction: false, // вмешательство, если ложь, то слайдер не будет останавливаться после вмешательства
      },
      breakpoints: {

        1920: {
          slidesPerView: 4,
          spaceBetween: 28,
        },

        1440: {
          slidesPerView: 4,
          spaceBetween: 28,
        },

        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        1025: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        738: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        725: {
          slidesPerView: 1,
        },

        320: {
          slidesPerView: 1,
        },

      }
    },

    items: [
      {id: 1, src: "/slide-one-image1.jpg", title: "Замена сцепления <strong>Powershift DCT250</strong>"},
      {
        id: 2, src: "/slide-one-image2.jpg", title: "Замена сцепления \n" +
          "<strong>DSG S Tronic 0B5</strong>"
      },
      {
        id: 3, src: "/slide-one-image3.jpg", title: "Замена сцепления \n" +
          "<strong>DSG 7</strong>"
      },
      {
        id: 4, src: "/slide-one-image4.jpg", title: "Замена сцепления\n" +
          "<strong>DSG 6</strong>"
      },


      {
        id: 5, src: "/slide-one-image5.jpg", title: "<strong>Переборка АКПП </strong>"
      },
      {
        id: 6, src: "/slide-one-image6.jpg", title: "Замена сцепления\n" +
          "<strong>Powershift DCT450</strong>"
      },
      {
        id: 7, src: "/slide-one-image7.jpg", title: "Замена маховика\n" +
          "<strong>АКПП DSG S-Tronic</strong>"
      },
      {
        id: 8, src: "/slide-one-image8.jpg", title: "Ремонт АКПП DSG \n" +
          "<strong>S-Tronic Powershift</strong>"
      },


      {
        id: 9, src: "/slide-one-image9.jpg", title: "Ремонт мехатроника\n" +
          "<strong>DQ200</strong>"
      },
      {
        id: 10, src: "/slide-one-image10.jpg", title: "Ремонт мехатроника\n" +
          "<strong>DQ500</strong>"
      },
      {
        id: 11, src: "/slide-one-image11.jpg", title: "Ремонт мехатроника\n" +
          "<strong>DL501 0B5</strong>"
      },
      {
        id: 12, src: "/slide-one-image12.jpg", title: "Ремонт мехатроника\n" +
          "<strong>DCT450</strong>"
      },


      {
        id: 13, src: "/slide-one-image13.jpg", title: "Снятие/установка\n" +
          "<strong>АКПП</strong>"
      },
      {
        id: 14, src: "/slide-one-image14.jpg", title: "Снятие/установка\n" +
          "<strong>мехатроника</strong>"
      },
      {
        id: 15, src: "/slide-one-image15.jpg", title: "Переборка\n" +
          "<strong>мехатроника</strong>"
      },
      {
        id: 16, src: "/slide-one-image16.jpg", title: "Снятие/установка\n" +
          "<strong>Гидроблока</strong>"
      },
    ],
  })
}
</script>

<style scoped lang="scss">

.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #070A2A;
  height: 100%;

  &__title {
    max-width: 1006px;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 95px 0 28px 0;

    @media (max-width: 1440px) {
      font-size: 48px;
      line-height: 58px;
      margin: 70px 0 18px 0;
    }

    @media (max-width: 1280px) {
      max-width: 724px;
      font-size: 43px;
      line-height: 52px;
      margin: 95px 0 14px 0;
    }

    @media (max-width: 1024px) {
      max-width: 699px;
      font-size: 42px;
      line-height: 51px;
      margin: 48px 0 16px 0;
    }

    @media (max-width: 700px) {
      max-width: 540px;
      font-size: 32px;
      line-height: 41px;
    }

    @media (max-width: 565px) {
      max-width: 440px;
      font-size: 25px;
      line-height: 35px;
    }

    @media (max-width: 465px) {
      max-width: 340px;
      font-size: 20px;
      line-height: 30px;
    }

    @media (max-width: 350px) {
      max-width: 272px;
      font-size: 20px;
      line-height: 24px;
      margin: 36px 0 12px 0;
    }


  }

  &__subtitle {
    max-width: 959px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 64px;

    @media (max-width: 1440px) {
      max-width: 767px;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 52px;
    }

    @media (max-width: 1280px) {
      margin-bottom: 36px;
    }

    @media (max-width: 1024px) {
      max-width: 690px;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 16px;
    }

    @media (max-width: 700px) {
      max-width: 540px;
      font-size: 16px;
      line-height: 21px;
    }

    @media (max-width: 565px) {
      max-width: 440px;
      font-size: 14px;
      line-height: 19px;
    }

    @media (max-width: 465px) {
      max-width: 340px;
      font-size: 13px;
      line-height: 18px;
    }

    @media (max-width: 350px) {
      max-width: 252px;
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 12px;
    }
  }

  &__gallery {
    height: 100%;
    max-width: 1384px;

    @media (max-width: 1440px) {
      max-width: 924px;
    }

    @media (max-width: 1280px) {
      max-width: 818px;
    }

    @media (max-width: 1024px) {
      max-width: 646px;
    }

    @media (max-width: 768px) {
      max-width: 580px;
    }

    @media (max-width: 725px) {
      max-width: 60%;
      height: 280px;
    }

    @media (max-width: 350px) {
      max-width: 270px;
      height: 270px;
    }
  }

  &__sliders-container {
    max-width: 1148px;
  }

  &__text {
    max-width: 640px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin: 64px 0 192px 0;


    @media (max-width: 1440px) {
      font-size: 20px;
      line-height: 24px;
      margin: 50px 0 150px 0;
    }

    @media (max-width: 1280px) {
      max-width: 480px;
      margin: 40px 0 130px 0;
    }

    @media (max-width: 1024px) {
      max-width: 400px;
      font-size: 16px;
      line-height: 19px;
      margin: 16px 0 110px 0;
    }

    @media (max-width: 565px) {
      max-width: 360px;
      font-size: 14px;
      line-height: 19px;
    }

    @media (max-width: 465px) {
      max-width: 320px;
      font-size: 13px;
      line-height: 18px;
    }

    @media (max-width: 425px) {
      max-width: 252px;
      font-size: 10px;
      line-height: 12px;
      margin: 53px 0 130px 0;
    }

  }

}

</style>
