<template>
  <div>
    <v-subheader>comments</v-subheader>

    <v-list two-line>
      <template v-for="(comment, n) in comments">
        <v-list-item :key="n">
          <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ comment.owner }}</v-list-item-title>

            <v-list-item-subtitle>
              {{ comment.content }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider
          v-if="n !== comments.length - 1"
          :key="`divider-${n}`"
          inset
        ></v-divider>
      </template>
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    comments: [],
  },
  data: () => ({
    cards: ["Today", "Yesterday"],
  }),
};
</script>
