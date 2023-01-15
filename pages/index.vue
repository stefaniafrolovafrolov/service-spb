<template>
  <div class="overlay" style="background: #070A2A;">
  <main class="content">
    <main-block/>
    <advantage/>
    <services/>
    <prices/>
    <reviews/>
    <contacts/>
  </main>
  </div>
</template>

<script>
import mainBlock from "../components/project/main-block";
import advantage from "../components/project/advantage";
import services from "../components/project/services";
import prices from "../components/project/prices";
import reviews from "../components/project/reviews";
import contacts from "../components/project/contacts";

export default {
  name: 'IndexPage',
  components: {
    mainBlock,
    advantage,
    services,
    prices,
    reviews,
    contacts
  },
  async asyncData({ req }) {
    if (process.server) {
      const domain = req.headers.host
      return { domain }
    }
  },

  data() {

    return {
      title: 'Профессиональный ремонт DSG\n' +
        '        в&nbsp;Cанкт - Петербурге', //Заголовок страницы
      description: 'Автосервис по ремонту коробок передач DSG-6,' +
        ' DSG-7,замена моховиков, Замена сцепления Powershift DCT250, Снятие/установка мехатроника,' +
        'Снятие/установка Гидроблока, Снятие/установка АКПП, Ремонт Автоматических Коробок Передач в Санкт-Петербурге под ключ', //Описание страницы
      keywords: 'Ремонт Автоматических Коробок Передач в Санкт-Петербурге, Замена сцепления Powershift DCT250, Автосервис по ремонту АКПП,' +
        'Переборка АКПП, Ремонт мехатроника DL501 0B5, Снятие/установка мехатроника, Переборка мехатроника, ' +
        'Снятие/установка Гидроблока, Снятие/установка АКПП, Ремонт АКПП DSG \n' +
        'S-Tronic Powershift ', //Ключевые слова страницы
      date: '2023-01-15', //Дата и время добавления страницы
      domain: null,
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },
        {
          property: 'og:title',
          content: this.title,
        },
        {
          property: 'og:url',
          content: '${this.domain}${this.$route.fullPath}',
        },
        {
          property: 'og:description',
          content: this.description,
        },
        { property: 'og:type', content: 'article' },
        {
          property: 'article:author',
          content: this.domain,
        },
        {
          property: 'article:publisher',
          content: this.domain,
        },
        {
          property: 'article:published_time',
          content: this.date,
        },
        {
          property: 'article:tag',
          content: this.keywords,
        },
      ],
    }
  }

}
</script>

<style scoped lang="scss">
.content {
  max-width: 1920px;
  margin: 0 auto;
  background: #F4F7FF;
}


</style>


