<template>
  <v-container max-width="900" class="py-12">

    <!-- Page Header -->
    <div class="mb-10">
      <h1 class="page-title mb-2">Research</h1>
      <p class="text-medium-emphasis" style="font-size: 1.05rem;">
        Research from the SARAL lab.
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
        :class="{ 'project-card--linked': project.slug }"
        :ripple="false"
        @click="handleClick(project)"
      >
        <!-- Title + arrow -->
        <div class="d-flex align-center justify-space-between mb-1">
          <div class="project-title">{{ project.title }}</div>
          <v-icon v-if="project.slug" size="18" color="primary" class="ml-2">mdi-arrow-right</v-icon>
        </div>

        <!-- People -->
        <div class="project-people mb-1">{{ project.people }}</div>

        <!-- Date -->
        <div class="project-date mb-3">{{ project.date }}</div>

        <!-- Description (truncated preview) -->
        <div v-if="project.description" class="project-description text-medium-emphasis mb-4">
          {{ truncate(project.description) }}
        </div>

        <!-- Preview image (first image only) -->
        <div v-if="project.images && project.images.length > 0">
          <v-img
            :src="project.images[0].src"
            rounded="lg"
            max-height="220"
            cover
          />
        </div>

      </v-card>

    </div>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const projects = ref([
  {
    id: 1,
    slug: 'robohydra',
    value: 'Current Research',
    title: 'RoboHydra',
    people: 'Dominic Palmieri, Emanuel Gutierrez-Cornejo',
    date: '2026 - Present',
    description: 'Description of the project here.',
    images: [
      { src: '/images/projects/Hydra1.png', caption: 'RoboHydra' },
      { src: '/images/projects/Hydra2.png', caption: '' },
    ],
  },
  {
    id: 3,
    slug: 'rsms',
    value: 'Current Research',
    title: 'Robotic Soil Moisture Sensing (RSMS)',
    people: 'Nathaniel Rose, Hannah Chung',
    date: 'DATES HERE',
    description: `The MoistureMapper is an autonomous robot that can measure soil moisture at points of interest of a farm plot. The goal is to build a comprehensive map of the soil moisture across the field.`,
    images: [
      { src: '/images/projects/RSMS1.png', caption: '' },
      { src: '/images/projects/RSMS2.png', caption: '' },
    ],
  },
  {
    id: 4,
    slug: 'stability-aware-navigation',
    value: 'Current Research',
    title: 'Stability Aware Navigation',
    people: 'Emanuel Gutierrez-Cornejo, Arif Ahmed, Nathaniel Rose, Dominic Palmieri',
    date: 'DATES HERE',
    description: 'The goal is to predict a robot stability score between 0 and 1. We do this by training a novel vision-based stability metric using count-circle-crossings (C3) score.',
    images: [
      { src: '/images/projects/C31.png', caption: '' },
      { src: '/images/projects/C32.png', caption: '' },
    ],
  },
  {
    id: 5,
    slug: 'plant-phenotyping-lai',
    value: 'Current Research',
    title: 'Plant Phenotyping: Leaf Area Index (LAI)',
    people: '*Arif Ahmed',
    date: 'DATES HERE',
    description: 'Mobile manipulator and UAV work together to phenotype crops for selecting better yielding irrigation strategies.',
    images: [
      { src: '/images/projects/LAI1.png', caption: '' },
      { src: '/images/projects/LAI2.png', caption: '' },
    ],
  },
  {
    id: 6,
    slug: 'robotics-ai-plant-breeding',
    value: 'Current Research',
    title: 'Robotics and AI for Plant Breeding',
    people: '*Arif Ahmed, Jairo Cadena-Mendez, Yovan Hirales',
    date: 'DATES HERE',
    description: 'Drone based precision spraying of agrochemicals on a field-wide scale. Work with farmers and breeders to apply treatments to corn, sorghum, and onion crops.',
    images: [
      { src: '/images/projects/Spray1.png', caption: '' },
    ],
  },
  {
    id: 2,
    slug: 'cowbot',
    value: 'Previous Research',
    title: 'CowBot',
    people: 'Dr. Parikshit Maini',
    date: '2023 - 2025',
    description: 'Description of the project here.',
    images: [
      { src: '/images/projects/project2a.jpeg', caption: 'Caption for image 2a' },
    ],
  },
])

const projectsByValue = computed(() => {
  const values = [...new Set(projects.value.map(p => p.value))].sort((a, b) => b - a)
  return values.map(value => ({
    value,
    projects: projects.value.filter(p => p.value === value),
  }))
})

function handleClick(project) {
  if (!project.slug) return
  router.push({ name: 'research-individual', params: { slug: project.slug } })
}

// Show a short preview on the list card
function truncate(text, max = 160) {
  const trimmed = text.trim()
  return trimmed.length > max ? trimmed.slice(0, max).trimEnd() + '…' : trimmed
}
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

.project-card--linked {
  cursor: pointer;
}

.project-card--linked:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;
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
</style>