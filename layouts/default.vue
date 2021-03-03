<template>
  <div id="app" @click.ctrl="gridVisualizer()">
    <div class="phone-wrapper" :class="{ expanded: expanded }">
      <a
        :href="this.$store.getters['contact/phoneFormatted']"
        class="phone"
        v-html="phone"
      ></a>
      <p class="text">{{ this.$store.state.contact.phone }}</p>
    </div>
    <LazyNotice />
    <LazyHero />
    <Nuxt />
    <LazyCredentials />
    <div class="overlay"></div>
  </div>
</template>

<script>
import phone from "~/assets/svg/phone.svg?raw";

export default {
  name: "layout",
  data: function () {
    return {
      phone: phone,
      expanded: false,
    };
  },
  methods: {
    gridVisualizer: () => {
      if (process.env.NODE_ENV === "development") {
        let newValue =
          document.body.getAttribute("grid") === "visible"
            ? "invisible"
            : "visible";
        document.body.setAttribute("grid", newValue);
        localStorage.setItem("grid", newValue);
        document.body.setAttribute("grid", localStorage.getItem("grid"));
      } else {
        document.body.setAttribute("grid", "invisible");
      }
    },
    heightCalculator: () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
  created: function () {
    this.$on("phoneToggle", (toggled) => {
      this.expanded = toggled;
    });
  },
  mounted: function () {
    this.heightCalculator();
    window.addEventListener("resize", this.heightCalculator());
  },
  destroyed: function () {
    window.removeEventListener("resize", this.heightCalculator());
  },
};
</script>


<style lang="scss">
.overlay {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.phone-wrapper {
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 5;
  fill: $white;
  transform: translateX(50%);
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 100%;
    left: -10px;
    padding: 10px;
    top: -10px;
    z-index: -1;
  }

  svg {
    stroke: $black;
    overflow: visible;
    stroke-width: 2px;
    width: 25px;
    height: 25px;
  }

  p {
    display: none;
    width: 100%;
    flex: 1 0 300px;
  }
}

.inner {
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 calc(100% / 24 * 1);

  @include breakpoint($desktop) {
    padding: 0 calc(#{$max-width} / 24 * 1);
  }
}

#header,
section,
#footer {
  overflow: hidden;
  @supports (clip-path: circle(0%)) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}

.navigation {
  @supports not (clip-path: circle(0%)) {
    display: none;
  }
  position: fixed;
  right: 20px;
  bottom: 30px;
  writing-mode: vertical-lr;
  text-align: right;
  @include font("Nexa", 16px, 400, 1.5, $white);
}

@include breakpoint($tablet) {
  .phone-wrapper {
    position: fixed;
    top: 20px;
    right: 0;
    display: flex;
    transform: translateX(-100%);
    transition: transform 0.3s $cubic-bezir;
    z-index: 5;
    align-items: center;

    &.expanded,
    &:hover {
      transform: translateX(-200px);
    }

    p {
      margin-left: 50px;
      color: #d0d0d0;
      display: block;
      position: absolute;
      width: 300px;
    }
  }
  .navigation {
    font-size: 22px;
    bottom: 40px;
  }
}

#app {
}
</style>
