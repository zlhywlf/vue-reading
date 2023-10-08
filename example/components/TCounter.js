import { ref } from "vue";

export default {
  title: "counter",
  template: `
    <v-card-title>计数器</v-card-title>
    <v-card-actions>
      <v-btn prepend-icon="mdi-counter" variant="outlined" color="success" @click="count++">Count is: {{ count }}</v-btn>
    </v-card-actions>
  `,
  setup() {
    return {
      count: ref(0),
    };
  },
};
