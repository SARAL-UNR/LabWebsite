<template>
  <AppLayout>
    <v-container max-width="900" class="py-16 text-center">

      <h1 class="hero-title mb-12" style="color: rgb(var(--v-theme-secondary));">
        Systems and Algorithms for Robot Autonomy Lab (SARAL)
      </h1>

      <!-- Slideshow -->
      <v-carousel
        class="mb-10 slideshow"
        height="420"
        hide-delimiter-background
        show-arrows="hover"
        cycle
        interval="5000"
      >
        <v-carousel-item
          v-for="slide in slides"
          :key="slide.id"
        >
          <v-img
            :src="slide.src"
            :alt="slide.caption"
            height="420"
            cover
          >
            <!-- Optional caption overlay -->
            <template v-if="slide.caption" v-slot:default>
              <div class="slide-caption d-flex align-end fill-height pa-4">
                <span class="caption-text">{{ slide.caption }}</span>
              </div>
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>

      <p class="hero-subtitle text-medium-emphasis mb-10 mx-auto" style="max-width: 540px;">
        UNR Robotics research lab focused on developing algorithms and systems for autonomous robots in real-world environments.
        We work on perception, planning, and control for mobile manipulation.
      </p>

    </v-container>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { ref } from 'vue'

// Add your images to public/images/slideshow/ and list them here.
// Set caption to '' if you don't want a caption on a slide.
const slides = ref([
  { id: 1, src: '/images/slideshow/test1.jpeg', caption: 'Mobile manipulation in unstructured environments' },
  { id: 2, src: '/images/slideshow/test2.jpeg', caption: 'Autonomous navigation in outdoor terrain' },
  { id: 3, src: '/images/slideshow/test3.jpeg', caption: 'Perception and planning for legged robots' },
])
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

.slideshow {
  border-radius: 12px;
  overflow: hidden;
}

.slide-caption {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 100%);
}

.caption-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
</style>