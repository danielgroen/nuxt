<template>
  <section id="products">
    <div class="inner">
      <h3 class="title">{{ title }}</h3>
      <no-ssr placeholder="loading...">
        <carousel
          :items="numberOfItems"
          :nav="false"
          :dots="false"
          :loop="true"
          :freedrag="true"
          :responsive="{ 0: { items: 2 }, 720: { items: 5 } }"
          :auto-height="true"
          :autoplayTimeout="3500"
          :rewind="false"
          :autoplay="true"
          class="product-wrapper"
        >
          <img
            class="product"
            v-for="item in items"
            :key="item"
            :src="'/img/products/' + item"
            alt="Product"
          />
        </carousel>
      </no-ssr>
    </div>
    <nav class="navigation">{{ navigation }}</nav>
  </section>
</template>

<script>
export default {
  name: "Products",
  data: function () {
    return {
      numberOfItems: 2,
      navigation: "Producten",
      title: "Een greep uit onze producten:",
      items: [
        "colorcontinueconditioner_250ml_4.jpg",
        "colorcontinueshampoo_250ml_1.jpg",
        "curldefiningcream_stylistfave.jpg",
        "hair_dryshampoo_dark_1_1.jpg",
        "hair_dryshampoo_light_1.jpg",
        "moisturerepair_cond_250.jpg",
        "moisturerepair_shamp_250.jpg",
        "moldingcream_1.jpg",
        "mot_stylistfave_1.jpg",
        "protect_preventspray_hair_160ml_9.jpg",
        "rootboost_stylistfave_1.jpg",
        "salonkit.png",
        "SEBASTIAN_DARK-OIL_Conditioner_250ml_HR_d.png",
        "SEBASTIAN_DARK-OIL_Lightweight_Mask_150ml_HR_d.png",
        "SEBASTIAN_DARK-OIL_Shampoo_250ml_HR_d.png",
        "SEBASTIAN_DARK-OIL_Silkening_Mist_200ml_HR_d.png",
        "Sebastian-Professional-Color-Ignite-Multi-Shampoo-Packshot_d.png",
        "Sebastian-Professional-Dark-Oil-Packshot_d.png",
        "Sebastian-Professional-Potion-9-Packshot_d.png",
        "Sebastian-Professional-SEB-MAN-The-Cooler_d.png",
        "Sebastian-Professional-SEB-MAN-The-Dandy_d.png",
        "Sebastian-Professional-SEB-MAN-The-Fixer_d.png",
        "Sebastian-Professional-SEB-MAN-The-Groom_d.png",
        "Sebastian-Professional-SEB-MAN-The-Hero_d.png",
        "Sebastian-Professional-SEB-MAN-The-MultiTasker_d.png",
        "Sebastian-Professional-SEB-MAN-The-Purist_d.png",
        "Sebastian-Professional-SEB-MAN-The-Sculptor_d.png",
        "Sebastian-Professional-SEB-MAN-The-Smoother_d.png",
        "Sebastian-Professional-Volupt-Shampoo-Packshot_d.png",
        "SEB_MAN_PROTECTOR_SHAVING_CREAM_150mlnewpackshot1_d.png",
        "volumizingmousse_nocap.jpg",
      ],
    };
  },
  methods: {
    getViewport: function () {
      if (process.client) {
        let viewport = Number(
          getComputedStyle(document.documentElement)
            .getPropertyValue("--items")
            .split(",")
        );
        this.numberOfItems = viewport;
      }
    },
  },
  created: function () {
    this.getViewport();
  },
};
</script>

<style scoped lang="scss">
#products {
  min-height: 300px;

  .navigation {
    color: $black;
  }

  .inner {
    padding-top: 10px;
    padding-bottom: 40px;

    .title {
      padding: 20px 0;
      @include font("Nexa", 25px, 400, 1.5);
    }

    .product-wrapper {
      .product {
        // max-width: 140px;
        max-height: 200px;
        object-fit: contain;
      }
    }
  }
}
</style>

<style lang="scss">
:root {
  --items: 2;

  @media only screen and (min-width: #{$tablet} ) {
    --items: 5;
  }
  @media only screen and (min-width: #{$desktop} ) {
    --items: 5;
  }
}

#products {
  .inner {
    .owl-stage {
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>