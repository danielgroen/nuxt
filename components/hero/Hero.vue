<template>
  <header id="header" :class="{ loaded: loaded }">
    <img :v-show="true" class="hero-image" src="/img/DSC_0186.jpg" alt="" />
    <div class="inner">
      <div class="main">
        <div v-html="logo"></div>
      </div>
      <aside class="side">
        <div v-for="brand in brands" :key="brand" v-html="brand" />
      </aside>
    </div>
    <nav class="navigation">{{ navigation }}</nav>
    <a class="arrow" @click="scrollDown()" v-html="arrow"></a>
  </header>
</template>

<script>
import logo from "~/assets/logo.svg?raw";
import sebastian from "~/assets/svg/sebastian.svg?raw";
import moroccanoil from "~/assets/svg/moroccanoil.svg?raw";
import olaplex from "~/assets/svg/olaplex.svg?raw";
import wella from "~/assets/svg/wella.svg?raw";
import schwarzkopf from "~/assets/svg/schwarzkopf.svg?raw";
import arrow from "~/assets/svg/arrow.svg?raw";

export default {
  name: "Hero",
  data: function () {
    return {
      logo: logo,
      brands: {
        sebastian,
        moroccanoil,
        olaplex,
        wella,
        schwarzkopf,
      },
      arrow: arrow,
      loaded: false,
      navigation: "Home",
    };
  },
  methods: {
    scrollDown: function () {
      event.target.parentElement.classList.remove("visible");
      window.scrollBy({
        top: (window.innerHeight / 100) * 95,
        left: 0,
        behavior: "smooth",
      });
    },
    checkOffset: function (event) {
      if (window.scrollY < 1) {
        window.addEventListener("scroll", this.checkOffset);
        document.querySelectorAll(".arrow")[0].classList.add("visible");
      } else {
        document.querySelectorAll(".arrow")[0].classList.remove("visible");
        window.removeEventListener("scroll", this.checkOffset);
      }
    },
  },
  mounted() {
    this.checkOffset();
    this.loaded = !this.loaded;
  },
  destroyed() {
    window.removeEventListener("scroll", this.checkOffset);
  },
};
</script>

<style scoped lang="scss">
$arrow-width: 40px;
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) translateX(calc((#{$arrow-width} / 2) * -1));
  }
  40% {
    transform: translateY(-15px) translateX(calc((#{$arrow-width} / 2) * -1));
  }
  60% {
    transform: translateY(-7px) translateX(calc((#{$arrow-width} / 2) * -1));
  }
}

#header {
  background-color: $black;
  height: 100vh; // fallback
  height: calc((var(--vh, 1vh) * 100));
  width: 100vw;
  svg {
    display: block;
    width: 100%;
  }

  &.loaded {
    .main ::v-deep svg {
      opacity: 1 !important;
    }

    @for $i from 1 through 10 {
      .side div:nth-child(#{$i}) {
        ::v-deep svg {
          opacity: 1;
          transition-delay: #{$i * 0.05 + 0.3}s;
        }
      }
    }
  }

  .hero-image {
    pointer-events: none;
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    transition: opacity 0.5s $easing;
    opacity: 0;
    z-index: -1;
    object-fit: cover;
    top: 0;
  }

  &.loaded {
    .hero-image {
      opacity: 0.3;
    }
  }

  .arrow {
    cursor: pointer;
    animation: bounce 3s infinite;
    display: block;
    width: $arrow-width;
    fill: $white;
    position: absolute;
    left: 50%;
    transition: opacity 1s $cubic-bezir;
    bottom: 20px;
    opacity: 0;
    pointer-events: none;

    &.visible {
      pointer-events: all;
      opacity: 0.1;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;

    .main {
      height: 45vh;
      margin-bottom: 20px;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      > div {
        width: 100%;
        overflow: hidden;
      }
      ::v-deep svg {
        opacity: 0;
        transition: opacity $speed * 1.5 $cubic-bezir;
        transition-delay: 0.3s;
        padding: 0 40px;

        & * {
          fill: $white;
        }
      }
    }

    .side {
      display: flex;
      justify-content: space-around;
      align-items: center;

      ::v-deep svg {
        opacity: 0;
        transition: opacity $speed * 1.5 $cubic-bezir;
        padding: 0 10px;

        * {
          fill: $gray3;
        }
      }
      div {
        flex: 0 1 auto;
      }
    }
  }
}

@include breakpoint($tablet) {
  #header {
    svg {
      display: block;
      width: 100%;
    }
    .inner {
      max-width: 650px;

      .main {
        height: 60vh;
        margin-bottom: 40px;

        ::v-deep svg {
          padding: 0 40px;
          & * {
            fill: $white;
          }
        }
      }

      ::v-deep svg {
        padding: 0 20px;
        display: block;
        fill: $gray3;
      }
    }
    .arrow {
      bottom: 30px;
    }
  }
}

@include breakpoint($desktop) {
  #header {
    .inner {
      max-width: 700px;

      .main {
        height: 55vh;
      }
    }
  }
}
</style>
