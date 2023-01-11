<template>
  <main class="content">
    <main-block/>
    <advantage/>
    <services/>
    <prices/>
    <reviews/>
    <contacts/>
  </main>
</template>

<script>
import mainBlock from "../components/project/main-block";
import advantage from "../components/project/advantage";
import services from "../components/project/services";
import prices from "../components/project/prices";
import reviews from "../components/project/reviews";
import contacts from "../components/project/contacts";

export default {
  head: {
    title: 'Профессиональный ремонт DSG\n' +
      '        в&nbsp;Cанкт - Петербурге',
    meta: [
      {
        hid: 'Бесплатные бонусы при ремонте DSG: эвакуатор, диагностика, адаптация\n' +
          '\n',
        name: 'Бесплатные бонусы при ремонте DSG: эвакуатор, диагностика, адаптация\n' +
          '\n',
        content: [
          'Замена сцепления Powershift DCT250', 'Замена сцепления \n' +
          'DSG S Tronic 0B5', 'Замена сцепления \n' +
          'DSG 7', 'Замена сцепления\n' +
          'DSG 6', 'Переборка АКПП', 'Замена сцепления  Powershift DCT450', 'Замена маховика\n' +
          'АКПП DSG S-Tronic', 'Ремонт АКПП DSG \n' +
          'S-Tronic Powershift', 'Ремонт мехатроника DQ200', 'Ремонт мехатроника DQ500', 'Ремонт мехатроника DL501 0B5',
          'Ремонт мехатроника DCT450', 'Снятие/установка АКПП', 'Снятие/установка мехатроника',
          'Переборка мехатроника', 'Снятие/установка Гидроблока',
        ]
      }
    ],
  },
  name: 'IndexPage',
  components: {
    mainBlock,
    advantage,
    services,
    prices,
    reviews,
    contacts
  },


}
</script>

<style scoped lang="scss">
.content {
  max-width: 1920px;
  background: #F4F7FF;
}


</style>


