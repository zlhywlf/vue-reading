import { tabs, components } from "./components/index.js";

export default {
  components,
  template: `
    <ul>
      <template
        v-for="tab in tabs"
        :key="tab.id">

        <li
          :class="{ active: tab.active }"
          @click="tabs.forEach((item) => (item.active = item.id === tab.id))">
          {{ tab.title }}
        </li>

      </template>
    </ul>

    <template
      v-for="tab in tabs"
      :key="tab.id">

      <component
        :is="tab.name" 
        v-if="tab.active"/>

    </template>
  `,
  data() {
    return {
      tabs,
    };
  },
};
