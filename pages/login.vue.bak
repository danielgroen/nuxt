<template></template>

<script>
export default {
  mounted() {
    if (process.client) {
      const instagramAppId = 249315366177273;
      const redirectUrl = "https://kapsalonanssoest.nl/auth";
      window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${instagramAppId}&redirect_uri=${redirectUrl}&scope=user_media,user_profile&response_type=code`;
    }
  },
};
</script>
