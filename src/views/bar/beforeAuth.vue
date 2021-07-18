<template>
  <span
    style="display: flex;"
  >
    <router-link
      v-for="(link, index) in this.$store.state.links"
      :key="index"
      class="link"
      :to="link.link"
    >
      {{ link.name }}
    </router-link>
  </span>
</template>
