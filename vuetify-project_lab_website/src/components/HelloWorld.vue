<template>
  <v-app :theme="theme">

    <!-- Top App Bar -->
    <v-app-bar flat border="b" height="64" color="error" class="px-6">

      <!-- Logo -->
      <v-app-bar-title>
        <span class="logo-text">SARAL</span>
      </v-app-bar-title>

      <!-- Nav Items with Dropdowns -->
      <template v-slot:append>
        <div class="nav-items d-flex align-center">

          <!-- Publications dropdown -->

          <!-- Solutions dropdown -->

          <!-- People dropdown -->

          <!-- Simple link -->
          <v-btn variant="text" class="nav-btn">Publications</v-btn>

          <v-btn variant="text" class="nav-btn">Projects</v-btn>

          <v-btn variant="text" class="nav-btn">People</v-btn>

          <v-btn variant="text" class="nav-btn">Funding</v-btn>

          
        </div>
      </template>
    </v-app-bar>

    <!-- Page Content -->
    <v-main>
      <v-container max-width="900" class="py-16 text-center">

        <h1 class="hero-title mb-6">
          Systems and Algorithms for Robot Autonomy Lab<br />
        </h1>

        <p class="hero-subtitle text-medium-emphasis mb-10 mx-auto" style="max-width: 540px;">
          UNR Robotics research lab focused on developing algorithms and systems for autonomous robots in real-world environments. 
          We work on perception, planning, and control for mobile manipulation.
        </p>

        <!-- Stats row -->

      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

</script>

<style scoped>
.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav-btn {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}

.nav-dropdown {
  border-radius: 12px !important;
  margin-top: 4px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
}

.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.7;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 4px;
}
</style>