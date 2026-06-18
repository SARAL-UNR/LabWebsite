<template>
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
</template>

<script setup>
import { ref, computed } from 'vue'

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
    people: 'Dominic Palmieri, Emanuel Gutierrez-Cornejo',
    date: '2026 - Present',
    description: 'Decription of the project here.',
    images: [
      { src: '/images/projects/Hydra1.png', caption: 'RoboHydra' },
      { src: '/images/projects/Hydra2.png'},
    ],
  },
  {
    id: 3,
    value: 'Current Projects',
    title: 'Robotic Soil moisture Sensing (RSMS)',
    people: 'Nathaniel Rose, Hannah Chung',
    date: 'DATES HERE',
    description: `
      The MoistureMapper is an autonomous robot that canmeasure soil moisture at points of interest of a farm plot. The goal is to build a comprehensive map of the soil moisture across the field`,
    images: [
      { src: '/images/projects/RSMS1.png'},
      { src: '/images/projects/RSMS2.png'},
    ],
  },
  {
    id: 4,
    value: 'Current Projects',
    title: 'Stability Aware Navigation',
    people: 'Emanuel Gutierrez-Cornejo, Arif Ahmed, Nathaniel Rose, Dominic Palmieri',
    date: 'DATES HERE',
    description: 'The goal is to predict a robot stability score between 0 and 1. We do this by training a novel vision-based stability metric using count-circle-crossings (C3) score. The method is a data-based learning networktrained on C3 score to learn currentstability from IMU and velocity.',
    images: [
      { src: '/images/projects/C31.png'},
      { src: '/images/projects/C32.png'},
    ],
  },
  {
    id: 5,
    value: 'Current Projects',
    title: 'Plant Phenotyping: Leaf Area Index (LAI)',
    people: '*Arif Ahmed',
    date: 'DATES HERE',
    description: 'Mobile manipulator and UAV work together tophenotype crops for selecting better yielding irrigationstrategies.',
    images: [
      { src: '/images/projects/LAI1.png' },
      { src: '/images/projects/LAI2.png' },
    ],
  },
  {
    id: 6,
    value: 'Current Projects',
    title: 'Robotics and AI for Plant Breeding',
    people: '*Arif Ahmed, Jairo Cadena-Mendez, Yovan Hirales',
    date: 'DATES HERE',
    description: `Drone based precision spraying of agrochemicals on a field-wide scale. Work with farmers and breeders to apply treatments to corn, sorghum, and onion crops`,
    images: [
      { src: '/images/projects/Spray1.png' },
    ],
  },
  {
    id: 2,
    value: 'Previous Projects',
    title: 'CowBot',
    people: 'Dr. Parikshit Maini',
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
  color: rgb(var(--v-theme-primary));
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