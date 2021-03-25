<template></template>

<script>
export default {
  mounted() {
    if (process.client) {
      const instagramAppId = 249315366177273;

      window.location.href =
        "https://api.instagram.com/oauth/authorize?client_id=${instagramAppId}&redirect_uri=https://kapsalonanssoest.nl/auth&scope=user_media&response_type=code";
    }
  },
};
</script>
