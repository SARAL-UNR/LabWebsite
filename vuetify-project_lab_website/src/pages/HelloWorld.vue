<template>
  <AppLayout>
    <v-container max-width="900" class="py-16 text-center">

      <h1 class="hero-title mb-6">
        Systems and Algorithms for Robot Autonomy Lab
      </h1>

      <p class="hero-subtitle text-medium-emphasis mb-10 mx-auto" style="max-width: 540px;">
        UNR Robotics research lab focused on developing algorithms and systems for autonomous robots in real-world environments.
        We work on perception, planning, and control for mobile manipulation.
      </p>

    </v-container>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
</script>

<style scoped>
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
</style>