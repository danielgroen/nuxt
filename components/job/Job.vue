<template>
  <section id="job">
    <div class="inner">
      <h2 class="title">Vacature</h2>
      <p class="text">
        Ben of ken jij een hairstylist met een flinke dosis passie voor het vak?
        <br /><br />
        Wij zijn per direct op zoek naar een fulltime/parttime collega.
        <br /><br />
        Ben of ken jij:<br />
        Iemand die uitdagingen niet uit de weggaat, initiatief toont op de
        werkvloer en niet schrikt van een volle agenda maar daar juist energie
        van krijgt? Diegene met een creatief denkvermogen en graag zou wille
        werken in een kapsalon met een no-nonsense mentaliteit werken in een
        gedreven team van ervaren hairstylisten presteren in een informele
        onderlinge sfeer. Tevens is er de door te blijven groeien doormiddel van
        verschillende trainingen.
        <br /><br />
        Help jij ons om deze hairstylist te vinden?
        <br /><br />
        Like de Kapsalon Ans pagina, deel dit bericht en wie weet help jij ons
        aan een nieuwe collega.<br />
        Degene met de gouden tip maakt kans op een Kapsalon Ans cadeaubon ter
        waarde van €150!
        <br /><br />
        *Deze is te besteden aan zowel producten als behandelingen.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Job",
  data: function () {
    return {
      navigation: "Sollicitatie",
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
#job {
  margin: 0 0 50px;
  background-color: #f7f7f7;
  position: relative;
  .inner {
    text-align: center;
    .title {
      padding: 40px 0 0;
      @include font("Nexa", 25px, 400, 1.5);
    }
    .text {
      padding: 40px 0 70px;
      max-width: 690px;
      margin: 0 auto;

      &:after {
        pointer-events: none;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background-image: url("/logo2.svg");
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: 200% 80%;
        background-size: 90%;
        opacity: 0.03;
      }
    }
  }
}
</style>