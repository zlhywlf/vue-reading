export default {
  title: "hello",
  template: `
    <v-card-title>title</v-card-title>
    <v-card-text>{{ hello }}</v-card-text>
  `,
  setup() {
    return {
      hello: "hello vue",
    };
  },
};
