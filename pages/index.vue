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
        hid: 'description',
        name: 'description',
        content: 'Автосервис по ремонту коробок передач, Замена сцепления Powershift DCT250,' +
          'Переборка АКПП , Замена маховика\n' +
          'АКПП DSG S-Tronic, Ремонт АКПП DSG \n' +
          'S-Tronic Powershift , Ремонт мехатроника DQ200 , Снятие/установка АКПП, Снятие/установка Гидроблока',
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


