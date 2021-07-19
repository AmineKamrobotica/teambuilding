<template>
  <span style="display: flex;">
    <router-link to="/" class="link" style="">home </router-link>

    <router-link
      v-for="(link, index) in this.$store.state.afterauth"
      :key="index + 100"
      class="link"
      :to="link.link"
    >
      {{ link.name }}
    </router-link>
    <natification-icon></natification-icon>
  </span>
</template>

<script>
import natificationIcon from "../notifications/notificationIcon.vue";
export default {
  components: {
    natificationIcon,
  },
};
</script>
