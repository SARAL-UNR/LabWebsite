<template>
<AppLayout>
    <v-app :theme="theme">

        <v-main>
        <v-container max-width="900" class="py-12">

            <!-- Page Header -->
            <div class="mb-10">
            <h1 class="page-title mb-2">Projects</h1>
            <p class="text-medium-emphasis" style="font-size: 1.05rem;">
                Projects from the SARAL lab.
            </p>
            </div>

            <!-- Year Groups -->
            <div v-for="group in publicationsByYear" :key="group.year" class="mb-10">

            <!-- Year Heading -->
            <div class="year-heading d-flex align-center mb-4">
                <span class="year-label mr-4">{{ group.year }}</span>
                <v-divider />
            </div>

            <!-- Papers -->
            <v-card
                v-for="pub in group.papers"
                :key="pub.id"
                flat
                border
                class="pub-card mb-3 pa-5"
                :ripple="false"
            >
                <div class="d-flex align-start justify-space-between gap-4">
                <div class="flex-grow-1">

                    <!-- Title -->
                    <div class="pub-title mb-1">{{ pub.title }}</div>

                    <!-- Authors -->
                    <div class="pub-authors mb-2">{{ pub.authors }}</div>

                    <!-- Decription -->
                    <div class="pub-description text-medium-emphasis mb-2">{{ pub.decription }}</div>

                </div>
                </div>
            </v-card>

            </div>
        </v-container>
        </v-main>

    </v-app>
</AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppLayout from '@/components/AppLayout.vue'

const theme = ref('light')

// ── Publication data ──────────────────────────────────────────────────────────
// Replace this array with your real data. Each entry supports:
//   id, year, title, authors, venue, type ('journal' | 'conference' | 'workshop'), pdfUrl, arxivUrl, codeUrl
const publications = ref([
  {
    id: 1,
    year: 2024,
    title: 'Learning Reactive Motion Policies for Mobile Manipulation in Dynamic Environments',
    authors: 'J. Smith, A. Patel, R. Kumar, M. Torres',
    decription: 'This project focuses on developing learning-based motion policies for mobile manipulators that can react to dynamic changes in the environment. We propose a novel framework that combines deep reinforcement learning with real-time perception to enable robots to perform complex manipulation tasks while navigating through cluttered and unpredictable settings.',
  },
  {
    id: 2,
    year: 2024,
    title: 'Uncertainty-Aware 3D Object Detection for Outdoor Autonomous Navigation',
    authors: 'L. Chen, J. Smith, B. Nguyen',
    venue: 'RA-L 2024',
    type: 'journal',
    pdfUrl: '#',
    arxivUrl: '#',
    codeUrl: null,
  },
  {
    id: 3,
    year: 2024,
    title: 'Task-Parameterized Skill Learning from a Single Demonstration',
    authors: 'A. Patel, J. Smith',
    venue: 'CoRL 2024 Workshop',
    type: 'workshop',
    pdfUrl: '#',
    arxivUrl: null,
    codeUrl: null,
  },
  {
    id: 4,
    year: 2023,
    title: 'Efficient Whole-Body Control via Hierarchical Quadratic Programming on Legged Robots',
    authors: 'R. Kumar, M. Torres, J. Smith',
    venue: 'IEEE IROS 2023',
    type: 'conference',
    pdfUrl: '#',
    arxivUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    year: 2023,
    title: 'Semantic Map Building with Probabilistic Object Permanence',
    authors: 'B. Nguyen, L. Chen, A. Patel, J. Smith',
    venue: 'IJRR 2023',
    type: 'journal',
    pdfUrl: '#',
    arxivUrl: '#',
    codeUrl: null,
  },
  {
    id: 6,
    year: 2022,
    title: 'Online Terrain Estimation for Adaptive Footstep Planning',
    authors: 'M. Torres, R. Kumar, J. Smith',
    venue: 'IEEE ICRA 2022',
    type: 'conference',
    pdfUrl: '#',
    arxivUrl: '#',
    codeUrl: '#',
  },
  {
    id: 7,
    year: 2022,
    title: 'Safe Exploration in Unknown Environments via Conformal Prediction',
    authors: 'J. Smith, B. Nguyen',
    venue: 'RSS 2022',
    type: 'conference',
    pdfUrl: '#',
    arxivUrl: '#',
    codeUrl: null,
  },
])

// Group papers by year descending
const publicationsByYear = computed(() => {
  const years = [...new Set(publications.value.map(p => p.year))].sort((a, b) => b - a)
  return years.map(year => ({
    year,
    papers: publications.value.filter(p => p.year === year),
  }))
})
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

.pub-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
}

.pub-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.pub-title {
  font-size: 0.975rem;
  font-weight: 600;
  line-height: 1.4;
}

.pub-authors {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
}

.pub-description {
  font-size: 0.875rem;
  line-height: 1.5;
}

.venue-chip {
  font-size: 0.75rem !important;
  font-weight: 600 !important;
}

.link-btn {
  font-size: 0.8rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  padding: 0 6px !important;
  min-width: unset !important;
}
</style>