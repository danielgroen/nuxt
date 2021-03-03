<template>
  <div class="notice">
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
    return {};
  },
  methods: {
    removeNotice: function () {
      const notice = document.getElementsByClassName("notice");
      notice[0].classList.add("remove");
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
  &.remove {
    transform: translateX(-100vw);
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

  transition: transform 0.5s $easing;
  transform: translateX(0);
  $offset: 10px;
  position: fixed;
  animation: fade-in 0.5s forwards;
  animation-delay: 2s;
  bottom: $offset;
  text-align: center;
  left: -100vw;
  right: $offset;
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
    left: -100vw;
    bottom: $offset;
    right: 0;
    padding: 20px 40px;
    animation: fade-in-desktop 1s forwards;
    width: 100%;

    a {
      color: $black;
    }
  }
}

@keyframes fade-in {
  from {
    left: -100vw;
  }
  to {
    left: 10px;
  }
}
@keyframes fade-in-desktop {
  from {
    left: -100vw;
  }
  to {
    left: 0px;
  }
}
</style>