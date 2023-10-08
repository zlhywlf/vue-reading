import { ref } from "vue";

export default {
  template: `
    <button @click="count++">Count is: {{ count }}</button>
  `,
  setup() {
    return {
      count: ref(0),
    };
  },
};
