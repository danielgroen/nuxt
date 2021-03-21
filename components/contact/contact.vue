<template>
  <section id="contact">
    <div class="inner">
      <article
        @click="toggleMap('disable')"
        class="card"
        :class="{ collapsed: mobile.collapsed }"
      >
        <h2 class="block-title">Contact informatie</h2>
        <address class="address">
          Kapsalon Ans<br />
          Koninginnelaan 28, 3762 DE<br />
          Soest, Nederland<br />
          <a
            class="link normal"
            :href="this.$store.getters['contact/phoneFormatted']"
            >{{ this.$store.state.contact.phone }}</a
          ><br />
        </address>
        <div
          class="day"
          v-for="(data, dag, index) in openingHours"
          :key="index"
        >
          <p class="day-text" :class="{ current: data.currentDay }">
            {{ dag }}
          </p>
          <div class="times" :class="{ current: data.currentDay }">
            <p class="open">{{ data.open }}</p>
            <span v-if="data.gesloten !== true" class="seperator">-</span>
            <p class="closed">{{ data.sluit }}</p>
          </div>
        </div>
      </article>
    </div>
    <span
      class="close"
      @click="toggleMap('disable')"
      :class="{ visible: mobile.focus }"
      v-html="close"
    >
    </span>
    <span
      @click="toggleMap('enable')"
      @mousedown="mobile.hover = !mobile.hover"
      :class="{
        visible: mobile.focus,
        hover: mobile.hover,
      }"
      id="map-overlay"
      >'Tap' op de kaart om de kaart te bewegen...</span
    >
    <LazyContactLeafletmap />
    <nav class="navigation">{{ navigation }}</nav>
  </section>
</template>

<script>
import close from "~/assets/svg/close.svg?raw";

const OpeningsHours = {
  maandag: {
    open: "Telefonisch bereikbaar",
    currentDay: false,
    gesloten: true,
  },
  dinsdag: {
    open: "09:00",
    sluit: "17:30",
    currentDay: false,
  },
  woensdag: {
    open: "09:00",
    sluit: "17:30",
    currentDay: false,
  },
  donderdag: {
    open: "09:00",
    sluit: "17:30",
    currentDay: false,
  },
  vrijdag: {
    open: "08:30",
    sluit: "20:30",
    currentDay: false,
  },
  zaterdag: {
    open: "08:30",
    sluit: "16:00",
    currentDay: false,
  },
  zondag: {
    open: "Gesloten",
    currentDay: false,
    gesloten: true,
  },
};

const Days = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
];

export default {
  name: "Contact",
  data: function () {
    return {
      close: close,
      navigation: "Contact",
      openingHours: OpeningsHours,
      mobile: {
        collapsed: false,
        focus: false,
        hover: false,
      },
    };
  },
  methods: {
    toggleMap: function (event) {
      // enable scrolling map
      if (event === "enable") {
        this.mobile.focus = true;
        this.mobile.collapsed = true;
        this.mobile.hover = false;

        this.$el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // disable scrolling map
      else if (event === "disable") {
        this.mobile.focus = false;
        this.mobile.collapsed = false;
        this.mobile.hover = false;
      }
    },
    currentDay: function () {
      const d = new Date(),
        day = Days[d.getDay()];

      this.openingHours[day].currentDay = true;
    },
  },
  mounted: function () {
    const mapOverlay = document.getElementById("map-overlay");
    this.currentDay();

    mapOverlay.addEventListener(
      "touchstart",
      () => {
        this.mobile.hover = true;
      },
      true
    );
    mapOverlay.addEventListener(
      "touchend",
      () => {
        this.mobile.hover = false;
      },
      true
    );
  },
};
</script>

<style scoped lang="scss">
#contact {
  background-color: $black;
  position: relative;

  .inner {
    display: flex;
    pointer-events: none;

    .card {
      z-index: 2;
      pointer-events: all;
      background-color: $white;
      color: $black;
      margin: 20px 0;
      border-radius: 20px 20px 0px 20px;
      padding-bottom: 80px;
      padding-left: calc(100vw / 24 * 1.5);
      padding-right: calc(100vw / 24 * 1.5);

      .block-title {
        @include font("Nexa", 25px, 400, 1.5);
        margin: 15px 0;
        padding-top: 3px;
      }

      .address {
        line-height: 1.5;
        margin-bottom: 30px;
      }

      .day {
        line-height: 1.8;
        font-size: 17px;
        display: flex;

        .current {
          opacity: 1 !important;
          color: $success;
        }

        .day-text {
          width: 130px;
        }

        .seperator {
          margin: 0 5px;
        }

        .times {
          justify-content: flex-start;
          display: flex;
        }
      }
    }
  }

  .close {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 25px;
    fill: white;
    opacity: 0;
    z-index: 3;
    transition: opacity $speed * 3 $cubic-bezir;
    pointer-events: none;

    &.visible {
      opacity: 0.7;
      pointer-events: all;
    }
  }

  #map-overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    text-align: center;
    padding: 100px 20vw;
    @include font("Nexa", 18px, 400, 1.5, $white);
    transition: opacity $speed * 1.5 $cubic-bezir;
    background-color: black;
    opacity: 0;

    &.hover {
      opacity: 0.7;
    }

    &.visible {
      display: none;
    }
  }
}
@include breakpoint(max-width $tablet) {
  #contact {
    background-color: $black;
    min-height: 100vh;

    .inner {
      height: 100vh;
      justify-content: flex-end;
      flex-direction: column;

      .card {
        background-color: $white;
        transition: max-height $speed * 3 $cubic-bezir;
        max-height: 100%;
        color: $black;
        margin-bottom: calc(100vw / 24 * 1);
        margin-right: calc(100vw / 24 * 2.5);
        padding-right: calc(100vw / 24 * 1);
        border-radius: 20px 20px 0px 20px;

        .day {
          .day-text {
            flex: 0 0 130px;
          }
          .times {
            font-size: 0.9rem;
            line-height: 1.9rem;
          }
        }

        &.collapsed {
          max-height: 185px;
        }
      }
    }
  }
}

@include breakpoint($tablet) {
  #contact {
    height: 700px;

    .inner {
      .card {
        margin: 0;
        margin-top: calc(#{$max-width} / 24 * 1);
        padding-left: calc(#{$max-width} / 24 * 0.5);
        padding-top: 10px;
        padding-right: calc(#{$max-width} / 24 * 1);
      }
    }
  }
  #map-overlay {
    padding-left: 50vw;
    padding-left: 50% !important;
    padding-top: 30% !important;
  }
}

@include breakpoint($desktop) {
  #map-overlay {
    display: none !important;
  }
}
</style>
