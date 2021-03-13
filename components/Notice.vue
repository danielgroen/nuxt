<template>
  <div class="notice" :class="{ removed: this.removed }">
    <svg
      class="icon cross"
      @click="this.removeNotice"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
    <p class="inner">
      Lieve klanten,
      <br /><br />
      het is zo ver! De deuren van onze salon gaan open op woensdag 3 maart!
      <br /><br />
      Wij doen ons uiterste best met alle collega's om zoveel mogelijk ruimte te
      bieden voor de afspraken. Wilt u een afspraak maken? Bel dan naar
      <a href="tel:0031356020546">035-6020546</a>. <br /><br />
      Wij kijken er enorm naar uit om u weer in onze salon te mogen verwelkomen.
      <br /><br />
      Bedankt voor al jullie geduld en begrip.
      <br /><br />
      Liefst,<br />
      Team Ans
    </p>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data: function () {
    return {
      removed: false,
    };
  },
  methods: {
    removeNotice: function () {
      this.removed = true;
    },
  },
};
</script>

<style scoped lang="scss">
strong,
a {
  font-weight: 600;
  font-family: "arial";
}
a {
  color: $white !important;
}

.notice {
  &.removed {
    opacity: 0 !important;
    animation: none;
  }

  .cross {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    fill: rgba($white, 1);
  }

  transition: opacity 0.5s $easing;
  opacity: 0;
  $offset: 10px;
  position: fixed;
  animation-name: fade-in;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  bottom: $offset;
  text-align: center;
  transform: translateX(calc(50vw - 50%));
  z-index: 555;
  background-color: rgba($black, 0.93);
  color: white;
  width: calc(100vw - (#{$offset} * 2));
  padding: 20px 0;
  max-width: 500px !important;

  @include breakpoint($desktop) {
    max-width: $max-width;
    margin: 0 auto;
    $offset: 10px;
    bottom: $offset * 2;
    padding: 20px 40px;
    width: 100%;

    a {
      color: $black;
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>