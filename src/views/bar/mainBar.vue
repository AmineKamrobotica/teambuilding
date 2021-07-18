<template>
  <span
    style="display: flex;"
    
  >
    <router-link to="/" class="link" style="">home </router-link>

    <router-link
      v-for="(link, index) in this.$store.state.afterauth"
      :key="index + 100"
      class="link"
      :to="link.link"
    >
      {{ link.name }}
    </router-link>
    <v-badge
      :content="this.$store.state.notifications"
      :value="this.$store.state.notifications"
      color="green"
      overlap
    >
      <v-icon>
        mdi-bell-outline
      </v-icon>
    </v-badge>
  </span>
</template>
