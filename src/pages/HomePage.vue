<template>
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
          <template v-if="slide.caption" v-slot:default>
            <div class="slide-caption d-flex align-end fill-height pa-4">
              <span class="caption-text">{{ slide.caption }}</span>
            </div>
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <p class="hero-subtitle text-medium-emphasis mb-16 mx-auto" style="max-width: 540px;">
      UNR Robotics research lab focused on developing algorithms and systems for autonomous robots in real-world environments.
      We work on perception, planning, and control for mobile manipulation.
    </p>

    <!-- News Section -->
    <div class="text-left">

      <div class="d-flex align-center mb-6">
        <span class="section-label mr-4">News</span>
        <v-divider />
      </div>

      <div class="d-flex flex-column gap-3">
        <v-card
          v-for="item in news"
          :key="item.id"
          flat
          border
          class="news-card pa-4"
        >
          <div class="d-flex align-start gap-4">

            <!-- Date badge -->
            <div class="news-date flex-shrink-0">{{ item.date }}</div>

            <!-- Content -->
            <div class="flex-grow-1">
              <div class="news-title mb-1">{{ item.title }}</div>
              <div v-if="item.body" class="news-body text-medium-emphasis">{{ item.body }}</div>
              <v-btn
                v-if="item.link"
                :href="item.link"
                :target="item.link.startsWith('http') ? '_blank' : '_self'"
                variant="text"
                size="small"
                color="primary"
                class="news-link-btn mt-1 pa-0"
              >
                Read more →
              </v-btn>
            </div>

          </div>
        </v-card>
      </div>

    </div>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const slides = ref([
  { id: 1, src: `${import.meta.env.BASE_URL}images/slideshow/test1.jpeg`, caption: 'Mobile manipulation in unstructured environments' },
  { id: 2, src: `${import.meta.env.BASE_URL}images/slideshow/test2.jpeg`, caption: 'Autonomous navigation in outdoor terrain' },
  { id: 3, src: `${import.meta.env.BASE_URL}images/slideshow/test3.jpeg`, caption: 'Perception and planning for legged robots' },
])

// ── News data ─────────────────────────────────────────────────────────────────
// Each entry supports: id, date, title, body (optional), link (optional)
// link can be an internal path (e.g. '/research') or an external URL
const news = ref([
  //{
  //  id: 1,
  //    date: 'Date here',
  //    title: 'Title here',
  //    body: 'Description here',
  //    link: 'https://www.unr.edu/',
  //  },
  // {
  //  id: 2,
  //    date: 'Date here',
  //    title: 'Title here',
  //    body: 'Description here',
  //    link: '',
  //  }
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

.section-label {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: nowrap;
  color: rgb(var(--v-theme-primary));
}

.news-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
}

.news-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.news-date {
  font-size: 0.775rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
  min-width: 90px;
  padding-top: 2px;
}

.news-title {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
}

.news-body {
  font-size: 0.825rem;
  line-height: 1.6;
}

.news-link-btn {
  font-size: 0.8rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  min-width: unset !important;
  height: auto !important;
}
</style>