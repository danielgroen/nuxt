<template>
  <footer id="footer">
    <div class="inner">
      <div v-for="brand in brands" :key="brand" v-html="brand" />
    </div>
  </footer>
</template>

<script>
import sebastian from "~/assets/svg/sebastian.svg?raw";
import moroccanoil from "~/assets/svg/moroccanoil.svg?raw";
import olaplex from "~/assets/svg/olaplex.svg?raw";
import wella from "~/assets/svg/wella.svg?raw";
import schwarzkopf from "~/assets/svg/schwarzkopf.svg?raw";
// TODO:: write a method for the 'fixed button' on mobile so that it triggers the call function

export default {
  name: "Credentials",
  data: function () {
    return {
      brands: {
        sebastian,
        moroccanoil,
        olaplex,
        wella,
        schwarzkopf,
      },
      navigation: "Home",
      expanded: false,
    };
  },
};
</script>

<style scoped lang="scss">
#footer {
  padding: 60px 0 0;
  position: relative;
  border-bottom: 60px solid $white;

  .inner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 700px;

    div {
      flex: 0 1 auto;

      ::v-deep svg {
        width: 100%;
        padding: 0 20px;
        display: block;
        * {
          fill: $gray3;
        }
      }
    }
  }
}
</style>