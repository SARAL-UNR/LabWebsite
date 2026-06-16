<template>
  <v-app :theme="theme">
    <v-app-bar flat border="b" height="64" color="primary" class="px-6">
        
      <!-- Logo on the far left -->
      <template v-slot:prepend>
        <v-btn variant="text" href="https://www.unr.edu" target="_blank" class="pa-0" min-width="0">
          <img src="/images/unr_logo.png" alt="UNR Logo" height="36" style="display: block;" />
        </v-btn>
      </template>

      <!-- Site name -->
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

    <v-footer border="t" color="primary" class="px-6 py-4">
      <v-container max-width="900" class="pa-0">
        <div class="d-flex justify-space-between align-center flex-wrap gap-4">
          
          <!-- Left: Lab name and address -->
          <div>
            <div class="footer-title">SARAL — Systems and Algorithms for Robot Autonomy Lab</div>
            <div class="footer-text mt-1">University of Nevada, Reno · Department of Computer Science and Engineering</div>
            <div class="footer-text">1664 N Virginia St, Reno, NV 89557</div>
          </div>

          <!-- Right: Contact -->
          <div class="text-right">
            <div class="footer-title">
              Websites
            </div>
            <div class="footer-text">
              <a href="https://www.unr.edu" target="_blank" class="footer-link">University of Nevada, Reno</a>
            </div>
            <div class="footer-text mt-1">
              <a href="https://www.unr.edu/cse" target="_blank" class="footer-link">Computer Science and Engineering Department</a>
            </div>
          </div>

        </div>

        <v-divider class="my-3 opacity-30" />
      </v-container>
    </v-footer>
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
.footer-title {
  font-size: 0.875rem;
  font-weight: 600;
}

.footer-text {
  font-size: 0.8rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>