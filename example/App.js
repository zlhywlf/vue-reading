import { tabs, components } from "./components/index.js";

export default {
  components,
  template: `
    <div class="px-1">
      <v-toolbar color="primary">
        <v-toolbar-title>Vue source code reading</v-toolbar-title>
      </v-toolbar>

      <div class="d-flex flex-row mt-1">

        <v-tabs
          v-model="selected"
          direction="vertical">

          <template
            v-for="t in tabs"
            :key="t.id">

            <v-tab :value="t.id">
              <v-icon start>
              <svg class="v-icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M3,3H21V5A2,2 0 0,0 19,7V19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19V7A2,2 0 0,0 3,5V3M7,5V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H17V5H7Z"></path></svg>
              </v-icon>
              {{ t.title }}
            </v-tab>

          </template>

        </v-tabs>

        <v-window v-model="selected">

          <template
            v-for="t in tabs"
            :key="t.id">

            <v-window-item :value="t.id">
              <v-card flat>
                <component :is="t.name"/>
              </v-card>
            </v-window-item>

          </template>

        </v-window>
      </div>
    </div>
  `,
  data: () => ({
    tabs,
    selected: 0,
  }),
};
