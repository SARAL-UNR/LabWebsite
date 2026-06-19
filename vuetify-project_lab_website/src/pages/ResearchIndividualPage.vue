<template>
  <v-container max-width="900" class="py-12">

    <div v-if="project">

      <!-- Back button -->
      <v-btn
        variant="text"
        color="primary"
        prepend-icon="mdi-arrow-left"
        :to="{ name: 'research' }"
        class="mb-6 back-btn"
      >
        Back to Research
      </v-btn>

      <!-- Title + meta -->
      <h1 class="project-title mb-2">{{ project.title }}</h1>
      <div class="project-meta text-medium-emphasis mb-1">{{ project.people }}</div>
      <div class="project-meta text-medium-emphasis mb-6">{{ project.date }}</div>

      <v-divider class="mb-8" />

      <!-- Description -->
      <div v-if="project.description" class="mb-8">
        <div class="d-flex align-center mb-3">
          <span class="section-label mr-4">Overview</span>
          <v-divider />
        </div>
        <p class="body-text">{{ project.description }}</p>
      </div>

      <!-- Research Highlights -->
      <div v-if="project.highlights && project.highlights.length > 0" class="mb-8">
        <div class="d-flex align-center mb-3">
          <span class="section-label mr-4">Highlights</span>
          <v-divider />
        </div>
        <div class="d-flex flex-wrap gap-2">
          <v-chip
            v-for="h in project.highlights"
            :key="h"
            color="primary"
            variant="tonal"
            size="small"
            label
          >
            {{ h }}
          </v-chip>
        </div>
      </div>

      <!-- Images -->
      <div v-if="project.images && project.images.length > 0" class="mb-8">
        <div class="d-flex align-center mb-3">
          <span class="section-label mr-4">Images</span>
          <v-divider />
        </div>
        <v-row>
          <v-col
            v-for="(img, i) in project.images"
            :key="i"
            :cols="project.images.length === 1 ? 12 : 6"
          >
            <v-img :src="img.src" rounded="lg" />
            <div v-if="img.caption" class="img-caption-below mt-1">{{ img.caption }}</div>
          </v-col>
        </v-row>
      </div>

      <!-- Related Publications -->
      <div v-if="project.publications && project.publications.length > 0" class="mb-8">
        <div class="d-flex align-center mb-3">
          <span class="section-label mr-4">Publications</span>
          <v-divider />
        </div>
        <v-card
          v-for="pub in project.publications"
          :key="pub.title"
          flat border
          class="pub-card mb-3 pa-4"
        >
          <div class="pub-title mb-1">{{ pub.title }}</div>
          <div class="pub-authors text-medium-emphasis mb-2">{{ pub.authors }}</div>
          <div class="d-flex align-center flex-wrap gap-2">
            <v-chip size="small" color="primary" variant="tonal" label>{{ pub.venue }}</v-chip>
            <v-btn v-if="pub.pdfUrl"   :href="pub.pdfUrl"   target="_blank" variant="text" size="small" color="primary" prepend-icon="mdi-file-pdf-box"  class="link-btn">PDF</v-btn>
            <v-btn v-if="pub.arxivUrl" :href="pub.arxivUrl" target="_blank" variant="text" size="small" color="primary" prepend-icon="mdi-open-in-new"    class="link-btn">arXiv</v-btn>
            <v-btn v-if="pub.codeUrl"  :href="pub.codeUrl"  target="_blank" variant="text" size="small" color="primary" prepend-icon="mdi-github"         class="link-btn">Code</v-btn>
          </div>
        </v-card>
      </div>

      <!-- People -->
      <div v-if="project.team && project.team.length > 0" class="mb-8">
        <div class="d-flex align-center mb-3">
          <span class="section-label mr-4">Team</span>
          <v-divider />
        </div>
        <div class="d-flex flex-wrap gap-2">
          <v-btn
            v-for="member in project.team"
            :key="member.name"
            v-bind="member.slug.startsWith('http')
              ? { href: member.slug, target: '_blank' }
              : { to: { name: 'people-individual', params: { slug: member.slug } } }"
            variant="tonal"
            color="primary"
            size="small"
            prepend-icon="mdi-account"
            class="link-btn"
          >
            {{ member.name }}
          </v-btn>
        </div>
      </div>

    </div>

    <!-- 404 fallback -->
    <div v-else class="text-center py-16">
      <div class="text-h5 mb-2">Project not found</div>
      <v-btn :to="{ name: 'projects' }" color="primary" variant="tonal">Back to Research</v-btn>
    </div>

  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// ── Project data ──────────────────────────────────────────────────────────────
// slug must match the slug in ResearchPage.vue
// team[].slug can be an internal person slug or an external URL
const projects = [
  {
    slug: 'robohydra',
    title: 'RoboHydra',
    people: 'Dominic Palmieri, Emanuel Gutierrez-Cornejo',
    date: '2026 - Present',
    description: `Full description of the RoboHydra project goes here.`,
    highlights: ['Multi-arm manipulation', 'Autonomous coordination', 'Real-time control'],
    images: [
      { src: '/images/projects/Hydra1.png', caption: 'RoboHydra system overview' },
      { src: '/images/projects/Hydra2.png', caption: '' },
    ],
    publications: [],
    team: [
      { name: 'Dominic Palmieri',        slug: 'dominic-palmieri' },
      { name: 'Emanuel Gutierrez-Cornejo', slug: 'emanuel-gutierrez-cornejo' },
    ],
  },
  {
    slug: 'rsms',
    title: 'Robotic Soil Moisture Sensing (RSMS)',
    people: 'Nathaniel Rose, Hannah Chung',
    date: 'DATES HERE',
    description: `The MoistureMapper is an autonomous robot that can measure soil moisture at points of interest of a farm plot. The goal is to build a comprehensive map of the soil moisture across the field.`,
    highlights: ['Autonomous navigation', 'Soil sensing', 'Agricultural robotics'],
    images: [
      { src: '/images/projects/RSMS1.png', caption: '' },
      { src: '/images/projects/RSMS2.png', caption: '' },
    ],
    publications: [],
    team: [
      { name: 'Nathaniel Rose', slug: 'nathaniel-rose' },
      { name: 'Hannah Chung',   slug: 'hannah-chung' },
    ],
  },
  {
    slug: 'stability-aware-navigation',
    title: 'Stability Aware Navigation',
    people: 'Emanuel Gutierrez-Cornejo, Arif Ahmed, Nathaniel Rose, Dominic Palmieri',
    date: 'DATES HERE',
    description: `The goal is to predict a robot stability score between 0 and 1. We do this by training a novel vision-based stability metric using count-circle-crossings (C3) score. The method is a data-based learning network trained on C3 score to learn current stability from IMU and velocity.`,
    highlights: ['Stability prediction', 'IMU sensing', 'Deep learning', 'C3 score'],
    images: [
      { src: '/images/projects/C31.png', caption: '' },
      { src: '/images/projects/C32.png', caption: '' },
    ],
    publications: [],
    team: [
      { name: 'Emanuel Gutierrez-Cornejo', slug: 'emanuel-gutierrez-cornejo' },
      { name: 'Arif Ahmed', slug: 'arif-ahmed' },
      { name: 'Nathaniel Rose', slug: 'nathaniel-rose' },
      { name: 'Dominic Palmieri', slug: 'dominic-palmieri' },
    ],
  },
  {
    slug: 'plant-phenotyping-lai',
    title: 'Plant Phenotyping: Leaf Area Index (LAI)',
    people: '*Arif Ahmed',
    date: 'DATES HERE',
    description: `Mobile manipulator and UAV work together to phenotype crops for selecting better yielding irrigation strategies.`,
    highlights: ['UAV', 'Mobile manipulation', 'Precision agriculture', 'Phenotyping'],
    images: [
      { src: '/images/projects/LAI1.png', caption: '' },
      { src: '/images/projects/LAI2.png', caption: '' },
    ],
    publications: [],
    team: [
      { name: 'Arif Ahmed', slug: 'arif-ahmed' },
    ],
  },
  {
    slug: 'robotics-ai-plant-breeding',
    title: 'Robotics and AI for Plant Breeding',
    people: '*Arif Ahmed, Jairo Cadena-Mendez, Yovan Hirales',
    date: 'DATES HERE',
    description: `Drone based precision spraying of agrochemicals on a field-wide scale. Work with farmers and breeders to apply treatments to corn, sorghum, and onion crops.`,
    highlights: ['Precision spraying', 'Drone systems', 'Plant breeding', 'Agronomy'],
    images: [
      { src: '/images/projects/Spray1.png', caption: '' },
    ],
    publications: [],
    team: [
      { name: 'Arif Ahmed', slug: 'arif-ahmed' },
      { name: 'Jairo Cadena-Mendez', slug: 'jairo-cadena-mendez' },
      { name: 'Yovan Hirales', slug: 'yovan-hirales' },
    ],
  },
  {
    slug: 'cowbot',
    title: 'CowBot',
    people: 'Dr. Parikshit Maini',
    date: '2023 - 2025',
    description: `Full description of the CowBot project goes here.`,
    highlights: [],
    images: [
      { src: '/images/projects/project2a.jpeg', caption: 'Caption for image 2a' },
    ],
    publications: [],
    team: [
      { name: 'Dr. Parikshit Maini', slug: 'parikshit-maini' },
    ],
  },
]

const project = computed(() =>
  projects.find(p => p.slug === route.params.slug) ?? null
)
</script>

<style scoped>
.back-btn {
  font-size: 0.875rem;
  text-transform: none;
  letter-spacing: 0;
}

.project-title {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
}

.project-meta {
  font-size: 0.9rem;
  font-weight: 500;
}

.section-label {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: nowrap;
  color: rgb(var(--v-theme-primary));
}

.body-text {
  font-size: 0.9rem;
  line-height: 1.7;
  white-space: pre-line;
}

.img-caption-below {
  font-size: 0.78rem;
  color: rgba(var(--v-theme-on-surface), 0.55);
  text-align: center;
  line-height: 1.4;
}

.pub-card {
  border-radius: 10px !important;
}

.pub-title {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
}

.pub-authors {
  font-size: 0.825rem;
}

.link-btn {
  font-size: 0.8rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}
</style>