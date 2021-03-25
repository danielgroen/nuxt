
<template>
  <section id="instagram">
    <!-- <p>Fetching data: {{ $nuxt.isFetching }} ({{ $nuxt.nbFetching }})</p>
    <template v-if="$fetchState.pending">Loading...</template>
    <template v-else-if="$fetchState.error">
      <p>Error while fetching posts</p>
    </template>
    <template v-else> -->
    <template>
      <div class="inner">
        <div class="text-wrapper">
          <h3 class="title" v-html="title"></h3>
        </div>
        <div id="instafeed"></div>
      </div>
      <nav class="navigation">{{ navigation }}</nav>
    </template>
  </section>
</template>

<script>
// TODO:: fetch.isfetching loading state
export default {
  name: "Instagram",
  data: function () {
    return {
      navigation: "Instagram",
      InstagramToken: [],
      title:
        'Laat je inspireren en volg ons op <a class="link" target="blank"href="https://www.instagram.com/kapsalon_ans">Instagram</a>',
    };
  },
  async fetch() {
    // https://github.com/companionstudio/instagram-token-agent/issues/5#issuecomment-627197657
    console.log("FETCH CALLED!");
    this.InstagramToken = await fetch(
      "//token-agent.herokuapp.com/token.js",
      {}
    ).then((res) => res.json());
  },
  fetchOnServer: false,
  methods: {
    loadFeed: function () {
      console.log(this.InstagramToken);
      const userFeed = new Instafeed({
        get: "user",
        userId: "",
        clientId: "249315366177273",
        accessToken: this.InstagramToken.token, // loaded var loaded in external token url
        resolution: "thumbnail",
        template:
          '<a href="{{link}}" style="background-image:url({{image}});" target="_blank" id="{{id}}"></a>',
        sortBy: "most-recent",
        limit: 20,
        links: false,
      });
      userFeed.run();
    },
  },
  mounted: function () {
    this.$fetch();

    // this.loadFeed();
  },
};
</script>

<style  lang="scss">
#instagram {
  .navigation {
    color: $black;
  }

  .inner {
    padding-bottom: 140px;

    .text-wrapper {
      padding: 40px 0;
      padding-bottom: 30px;

      .title {
        @include font("Nexa", 25px, 400, 1.5);
      }
    }

    #instafeed {
      width: 100%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;

      a {
        display: block;
        align-items: center;
        position: relative;
        background-size: cover;
        background-position: center center;
        width: calc(100vw / 24 * 9);
        height: calc(100vw / 24 * 9);
        margin: 2px;
        // margin-right: calc(100vw / 24 * 2);

        &:after {
          content: "";
          background-color: $white;
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          transition: opacity $speed $easing;
        }

        &:hover {
          &:after {
            opacity: 0.1;
          }
        }
      }
    }
  }

  @include breakpoint(max-width $tablet) {
    .inner {
      flex-direction: column-reverse;
      align-items: flex-start;

      .text-wrapper {
        max-width: 300px;
        margin-left: calc(100vw / 24 * 1.5);

        .title {
          padding: 40px 0;
          @include font("Nexa", 25px, 400, 1.5);
        }
      }
    }
  }

  @include breakpoint($tablet) {
    .inner {
      .text-wrapper {
        margin-left: 80px;
        max-width: 380px;
        padding: 60px 0;
        padding-bottom: 50px;

        .title {
          @include font("Nexa", 35px, 400, 1.5);
        }
      }
      #instafeed {
        a {
          width: calc(100vw / 24 * 6);
          height: calc(100vw / 24 * 6);
        }
      }
    }
  }
  @include breakpoint($desktop) {
    .inner {
      #instafeed {
        a {
          width: calc(#{$max-width} / 24 * 4);
          height: calc(#{$max-width} / 24 * 4);
        }
      }
    }
  }
}
</style>
