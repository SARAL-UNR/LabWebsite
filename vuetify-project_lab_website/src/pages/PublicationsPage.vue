<template>
<AppLayout>
  <v-app :theme="theme">


    <v-main>
      <v-container max-width="900" class="py-12">

        <!-- Page Header -->
        <div class="mb-10">
          <h1 class="page-title mb-2">Publications</h1>
          <p class="text-medium-emphasis" style="font-size: 1.05rem;">
            Peer-reviewed papers, conference proceedings, and workshop contributions from the SARAL lab.
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
                <div class="pub-authors text-medium-emphasis mb-2">{{ pub.authors }}</div>

                <!-- Venue badge + links -->
                <div class="d-flex align-center flex-wrap gap-2">
                  <v-chip
                    size="small"
                    :color="venueColor(pub.type)"
                    variant="tonal"
                    label
                    class="venue-chip"
                  >
                    {{ pub.venue }}
                  </v-chip>

                  <v-btn
                    v-if="pub.pdfUrl"
                    :href="pub.pdfUrl"
                    target="_blank"
                    variant="text"
                    size="small"
                    prepend-icon="mdi-file-pdf-box"
                    class="link-btn"
                    color="error"
                  >
                    PDF
                  </v-btn>

                  <v-btn
                    v-if="pub.arxivUrl"
                    :href="pub.arxivUrl"
                    target="_blank"
                    variant="text"
                    size="small"
                    prepend-icon="mdi-open-in-new"
                    class="link-btn"
                    color="error"
                  >
                    arXiv
                  </v-btn>

                  <v-btn
                    v-if="pub.codeUrl"
                    :href="pub.codeUrl"
                    target="_blank"
                    variant="text"
                    size="small"
                    prepend-icon="mdi-github"
                    class="link-btn"
                    color="error"
                  >
                    Code
                  </v-btn>
                </div>

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


// 2026
  {
    id: 1,
    year: 2026,
    title: 'Will the Coffee Spill? Estimating Smoothness of Mobile Robot Traversal in Off-road Terrains using Proprioceptive Sensing',
    authors: 'Emanuel Gutierrez-Cornejo, Arif Ahmed, Nathaniel Rose, Dominic Palmieri, Milan Jain, Parikshit Maini',
    venue: 'CoRL 2026',
    type: 'conference',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  {
    id: 8,
    year: 2026,
    title: 'Review and Evaluation of Point-Cloud based Leaf Surface Reconstruction Methods for Agricultural Applications',
    authors: 'Arif Ahmed, Parikshit Maini',
    venue: 'CoRR 2026',
    type: 'conference',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },

  // 2025
  {
    id: 2,
    year: 2025,
    title: 'Learning to Predict Mobile Robot Stability in Off-Road Environments',
    authors: 'Nathaniel Rose, Arif Ahmed, Emanuel Gutierrez-Cornejo, Parikshit Maini',
    venue: 'RSS 2025 Workshop',
    type: 'workshop',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  {
    id: 3,
    year: 2025,
    title: 'SARAL-Bot: Autonomous Robot for Strawberry Plant Care',
    authors: 'Arif Ahmed, Ritvik Agarwal, Gaurav Srikar, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2025',
    type: 'conference',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  {
    id: 4,
    year: 2025,
    title: 'MoistureMapper: An Autonomous Mobile Robot for High-Resolution Soil Moisture Mapping at Scale',
    authors: 'Nathaniel Rose, Hannah Chuang, Manuel A Andrade-Rodriguez, Rishi Parashar, Dani Or, Parikshit Maini',
    venue: 'CoRR 2025',
    type: 'conference',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  {
    id: 5,
    year: 2025,
    title: 'Online Planning for Cooperative Air-Ground Robot Systems with Unknown Fuel Requirements',
    authors: 'Ritvik Agarwal, Behnoushsadat Hatami, Alvika Gautam, Parikshit Maini',
    venue: 'CoRR 2025',
    type: 'conference',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  {
    id: 6,
    year: 2025,
    title: 'Learning to Predict Mobile Robot Stability in Off-Road Environments',
    authors: 'Nathaniel Rose, Arif Ahmed, Emanuel Gutierrez-Cornejo, Parikshit Maini',
    venue: 'CoRR 2025',
    type: 'conference',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  {
    id: 7,
    year: 2025,
    title: 'MoistureMapper: An Autonomous Mobile Robot for High-Resolution Soil Moisture Mapping at Scale',
    authors: 'Nathaniel Rose, Hannah Chuang, Manuel A Andrade-Rodriguez, Rishi Parashar, Dani Or, Parikshit Maini',
    venue: 'CASE 2025',
    type: 'conference',
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
])


// Cooperative Aerial-Ground Vehicle Route Planning With Fuel Constraints for Coverage Applications
// Cooperative Planning for Fuel-constrained Aerial Vehicles and Ground-based Refueling Vehicles for Large-Scale Coverage
// A multi-robot foraging model on deciding predation risk vs. food quality trade-offs
// Persistent Monitoring with Refueling on a Terrain Using a Team of Aerial and Ground Robotspdf icon
// Visual Monitoring of Points of Interest on a 2.5D Terrain Using a UAV With Limited Field-of-View Constraint
// Curvature constrained trajectory planning for a UAV through a sequence of points: A perturbation approach
// Visibility-Based Monitoring of a Path Using a Heterogeneous Robot Team
// Visual Monitoring for Multiple Points of Interest on a 2.5D Terrain using a UAV with Limited Field-of-View Constraint


// Group papers by year descending
const publicationsByYear = computed(() => {
  const years = [...new Set(publications.value.map(p => p.year))].sort((a, b) => b - a)
  return years.map(year => ({
    year,
    papers: publications.value.filter(p => p.year === year),
  }))
})

// Color-code venue chips by publication type
function venueColor(type) {
  if (type === 'journal') return 'blue'
  if (type === 'workshop') return 'orange'
  return 'error' // conference → red (matches brand)
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