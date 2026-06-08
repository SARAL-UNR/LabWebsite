<template>
  <AppLayout>
    <v-container max-width="900" class="py-12">

      <!-- Page Header -->
      <div class="mb-10">
        <h1 class="page-title mb-2">Projects</h1>
        <p class="text-medium-emphasis" style="font-size: 1.05rem;">
          Projects from the SARAL lab.
        </p>
      </div>

      <!-- Groups -->
      <div v-for="group in projectsByValue" :key="group.value" class="mb-10">

        <!-- Group Heading -->
        <div class="d-flex align-center mb-4">
          <span class="year-label mr-4">{{ group.value }}</span>
          <v-divider />
        </div>

        <!-- Project Cards -->
        <v-card
          v-for="project in group.projects"
          :key="project.id"
          flat
          border
          class="project-card mb-4 pa-5"
          :ripple="false"
        >
          <!-- Title -->
          <div class="project-title mb-1">{{ project.title }}</div>

          <!-- People -->
          <div class="project-people mb-1">{{ project.people }}</div>

          <!-- Date -->
          <div class="project-date mb-3">{{ project.date }}</div>

          <!-- Description -->
          <div v-if="project.description" class="project-description text-medium-emphasis mb-4">
            {{ project.description }}
          </div>

          <!-- Images -->
          <div v-if="project.images && project.images.length > 0">
            <v-row dense>
              <v-col
                v-for="(img, i) in project.images"
                :key="i"
                :cols="project.images.length === 1 ? 12 : 6"
              >
                <v-img
                  :src="img.src"
                  :alt="img.caption || project.title"
                  cover
                  rounded="lg"
                  class="project-img"
                >
                  <!-- Caption overlay -->
                  <template v-if="img.caption" v-slot:default>
                    <div class="img-caption d-flex align-end fill-height pa-3">
                      <span class="caption-text">{{ img.caption }}</span>
                    </div>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </div>

        </v-card>

      </div>
    </v-container>
  </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppLayout from '@/components/AppLayout.vue'

// ── Project data ──────────────────────────────────────────────────────────────
// Each project supports:
//   id, year, title, authors, description
//   images: array of { src, caption } — caption is optional, set to '' to hide
//   Drop image files in public/images/projects/ and reference them below.
const projects = ref([
  {
    id: 1,
    value: 'Current Projects',
    title: 'RoboHydra',
    people: 'People here',
    date: '2026 - Present',
    description: 'Decription of the project here.',
    images: [
      { src: '/images/projects/testpr1.jpeg', caption: 'Robot navigating a cluttered environment' },
      { src: '/images/projects/project1b.jpeg', caption: 'Manipulation task execution' },
      { src: '/images/projects/project1c.jpeg', caption: 'Real-time perception in action' },
    ],
  },
  {
    id: 2,
    value: 'Previous Projects',
    title: 'Title',
    people: 'People here',
    date: '2023 - 2025',
    description: 'Description of the project here.',
    images: [
      { src: '/images/projects/project2a.jpeg', caption: 'Caption for image 2a' },
    ],
  },
])


// Group by value
const projectsByValue = computed(() => {
  const values = [...new Set(projects.value.map(p => p.value))].sort((a, b) => b - a)
  return values.map(value => ({
    value,
    projects: projects.value.filter(p => p.value === value),
  }))
})
</script>

<style scoped>
.page-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.1;
}

.year-label {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: nowrap;
  color: rgb(var(--v-theme-error));
}

.project-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
}

.project-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.project-title {
  font-size: 0.975rem;
  font-weight: 600;
  line-height: 1.4;
}

.project-people {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.project-date {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.project-description {
  font-size: 0.875rem;
  line-height: 1.6;
}

.project-img {
  height: 220px;
}

.img-caption {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 100%);
}

.caption-text {
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
</style>