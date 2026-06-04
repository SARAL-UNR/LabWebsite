<template>
  <v-app :theme="theme">
    <v-app-bar flat border="b" height="64" color="error" class="px-6">
      <v-app-bar-title>
        <v-btn variant="text" class="nav-btn" :to="{ name: 'home' }">UNR SARAL</v-btn>
      </v-app-bar-title>

      <template v-slot:append>
        <div class="nav-items d-flex align-center">
          <v-btn variant="text" class="nav-btn" :to="{ name: 'publications' }">Publications</v-btn>
          <v-btn variant="text" class="nav-btn" :to="{ name: 'projects' }">Projects</v-btn>
          <v-btn variant="text" class="nav-btn" :to="{ name: 'people' }">People</v-btn>
          <v-btn variant="text" class="nav-btn" :to="{ name: 'funding' }">Funding</v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <slot />  <!-- page content goes here -->
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const theme = ref('light')
</script>

<style scoped>
.nav-btn {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}
</style>