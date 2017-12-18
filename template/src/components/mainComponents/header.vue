<template lang="pug">
      <v-toolbar dense>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>\{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>     
        <v-btn icon @click=ok>
          v-icon search
        </v-btn>

        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Имя проекта',
    };
  },
};
</script>