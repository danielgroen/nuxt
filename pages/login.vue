<template></template>

<script>
export default {
  mounted() {
    if (process.client) {
      const instagramAppId = 249315366177273;
      window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${instagramAppId}&redirect_uri=${window.location.href}&scope=user_media,user_profile&response_type=code`;
    }
  },
};
</script>
