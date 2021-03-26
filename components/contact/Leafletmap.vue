<template>
  <div class="map">
    <client-only>
      <l-map :zoom="zoom" :center="center" :options="options">
        <l-tile-layer :url="mapbox"></l-tile-layer>
        <l-marker :lat-lng="marker">
          <l-icon
            :icon-size="icon.iconSize"
            :icon-anchor="icon.iconAnchor"
            :icon-url="icon.url"
          />
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "Leafletmap",
  data: function () {
    return {
      zoom: 0,
      icon: {
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        url: "/img/marker.svg?data",
      },
      options: {
        scrollWheelZoom: false,
      },
      center: [0, 0],
      mapbox:
        "https://api.mapbox.com/styles/v1/danielgroen/ck2weuncg1kg21cs3xe5tdvr2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFuaWVsZ3JvZW4iLCJhIjoiY2o2M3JhMXJ3MWh6cTM0bndjbGJsanQ3YSJ9.yTow8nLZo8ftYS2lcHOO4w",
      marker: [52.1867008, 5.2808869],
    };
  },
  methods: {
    centerMap: function () {
      let center = getComputedStyle(document.documentElement)
          .getPropertyValue("--center-mobile")
          .split(","),
        zoom = Number(
          getComputedStyle(document.documentElement).getPropertyValue("--zoom")
        );

      this.center = center;
      this.zoom = zoom;
    },
    debounce: (callback, time) => {
      let interval;
      return (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
          interval = null;
          callback(...args);
        }, time);
      };
    },
  },
  beforeMount: function () {
    this.centerMap();
  },
  mounted: function () {
    window.addEventListener("resize", this.debounce(this.centerMap, 200));
  },
  destroyed: function () {
    window.removeEventListener("resize", this.debounce(this.centerMap, 200));
  },
};
</script>

<style scoped lang="scss">
.map {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
</style>

<style lang="scss">
:root {
  --center-mobile: 52.1810607, 5.2820335;
  --zoom: 15;

  @media only screen and (min-width: #{$tablet} ) {
    --zoom: 14;
    --center-mobile: 52.1795903, 5.2610174;
  }
}

.leaflet-control-container {
  display: none;
}
</style>
