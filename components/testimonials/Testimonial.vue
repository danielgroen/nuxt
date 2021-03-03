<template>
  <section id="testimonials">
    <div class="inner">
      <carousel
        :items="1"
        :center="true"
        :nav="false"
        :dots="false"
        :autoplay="true"
        :autoplayTimeout="6500"
        :loop="true"
      >
        <blockquote v-for="(item, index) in items" :key="index" class="quote">
          {{ item }}
        </blockquote>
      </carousel>
    </div>
    <nav class="navigation">{{ navigation }}</nav>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel2";

export default {
  data: function () {
    return {
      navigation: "Testimonials",
      items: [
        "Je knipt geen haar maar geeft zelfvertrouwen",
        "We moeten stoppen met het knippen van haar en beginnen met het knippen van mensen",
        "Ik kijk waar iemand echt mooier van wordt",
        "Het is belangrijk om jezelf als mens steeds creatief te blijven uitdagen",
        "We zien elkaar in alle aspecten ook in elkaars talenten en stimuleren dat bij elkaar",
        "Hoe fijn is het als je 's morgens wakker wordt met de gedachten dat je alleen maar met haar bezig hoeft te zijn",
      ],
    };
  },
  components: {
    carousel,
  },
};
</script>

<style scoped lang="scss">
#testimonials {
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background-color: $black;

  &:after {
    content: "”";
    position: absolute;
    left: 80vw;
    text-align: right;
    top: -20px;
    z-index: -1;
    transform: translateX(-50%);
    opacity: 0.1;
    @include font("Muli", 350px, 400, 1em, $white);
  }

  .inner {
    position: relative;
    padding-left: calc(100% / 24 * 2);
    padding-right: calc(100% / 24 * 2);
    margin-left: calc(100% / 24 * 1);
    margin-right: calc(100% / 24 * 1);

    .quote {
      @include font("Nexa", 25px, 400, 1.5, $white);
      font-style: italic;
      padding-left: 3px;
    }
  }

  @include breakpoint($tablet) {
    height: 300px;

    &:after {
      left: 75vw;
      font-size: 500px;
    }

    .inner {
      padding-left: calc(100% / 24 * 4);
      padding-right: calc(100% / 24 * 4);

      .quote {
        font-size: 28px;
      }
    }
  }

  @include breakpoint($desktop) {
    height: 320px;

    &:after {
      left: 70vw;
    }

    .inner {
      margin: 0 auto;
      padding-left: calc(#{$max-width} / 24 * 5);
      padding-right: calc(#{$max-width} / 24 * 5);

      .quote {
        font-size: 36px;
      }
    }
  }
}
</style>

<style lang="scss">
#testimonials {
  .owl-stage {
    display: flex;
    align-items: center;
  }
}
</style>