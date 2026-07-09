<template>
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
        <div class="flex-grow-1">

          <!-- Title -->
          <div class="pub-title mb-1">{{ pub.title }}</div>

          <!-- Authors -->
          <div class="pub-authors text-medium-emphasis mb-2">{{ pub.authors }}</div>

          <!-- Venue + type tag + links -->
          <div class="d-flex align-center flex-wrap" style="gap: 4px;">

            <!-- Venue (no color) -->
            <v-chip size="small" variant="tonal" label class="venue-chip">
              {{ pub.venue }}
            </v-chip>

            <!-- Type tag -->
            <v-chip size="small" variant="outlined" label class="type-chip">
              {{ typeLabel(pub.type) }}
            </v-chip>

            <!-- Review only tag -->
            <v-chip
              v-if="pub.review"
              size="small"
              variant="outlined"
              label
              class="type-chip"
              color="error"
            >
              Review Only
            </v-chip>

            <v-btn
              v-if="pub.pdfUrl"
              :href="pub.pdfUrl"
              target="_blank"
              variant="text"
              size="small"
              prepend-icon="mdi-file-pdf-box"
              class="link-btn"
              color="primary"
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
              color="primary"
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
              color="primary"
            >
              Code
            </v-btn>
          </div>

        </div>
      </v-card>

    </div>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const publications = ref([
  // 2026
  {
    id: 1,
    year: 2026,
    title: 'Review and Evaluation of Point-Cloud based Leaf Surface Reconstruction Methods for Agricultural Applications',
    authors: 'A Ahmed, P Maini',
    venue: 'CoRL 2026',
    type: 'conference',
    review: false,
    arxivUrl: 'https://arxiv.org/abs/2604.03328',
  },

  // 2025
  {
    id: 2,
    year: 2025,
    title: 'Learning to Predict Mobile Robot Stability in Off-Road Environments',
    authors: 'Nathaniel Rose, Arif Ahmed, Emanuel Gutierrez-Cornejo, Parikshit Maini',
    venue: 'RSS 2025 Workshop',
    type: 'workshop',
    review: false,
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
    review: false,
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
    review: false,
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
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },

  // 2023
  {
    id: 9,
    year: 2023,
    title: 'Wheat Stem Rust Detection with RGB images captured on the Farm using a hand-held camera',
    authors: 'P Maini, P Tokekar, PB Sujit',
    venue: 'ASABE 2023',
    type: 'presentation',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },

  // 2022
  {
    id: 10,
    year: 2022,
    title: 'Online coverage planning for an autonomous weed mowing robot with curvature constraints',
    authors: 'Parikshit Maini, Burak M Gonultas, Volkan Isler',
    venue: 'IEEE 2022',
    type: 'letter',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },

  // 2021
  {
    id: 11,
    year: 2021,
    title: 'Visual monitoring of points of interest on a 2.5 D terrain using a UAV with limited field-of-view constraint',
    authors: 'Parikshit Maini, Pratap Tokekar, PB Sujit',
    venue: 'IEEE 2021',
    type: 'journal',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  // 2020
  {
    id: 12,
    year: 2020,
    title: 'RoboHydra: A Modular, Reconfigurable, and Scalable Robotic Platform for Multi-Robot Research',
    authors: 'Arif Ahmed, Ritvik Agarwal, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2020',
    type: 'conference',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  //2019
  {
    id: 13,
    year: 2019,
    title: 'RoboHydra: A Modular, Reconfigurable, and Scalable Robotic Platform for Multi-Robot Research',
    authors: 'Arif Ahmed, Ritvik Agarwal, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2019',
    type: 'conference',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  // 2018
  {
    id: 14,
    year: 2018,
    title: 'RoboHydra: A Modular, Reconfigurable, and Scalable Robotic Platform for Multi-Robot Research',
    authors: 'Arif Ahmed, Ritvik Agarwal, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2018',
    type: 'conference',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  // 2017
  {
    id: 15,
    year: 2017,
    title: 'RoboHydra: A Modular, Reconfigurable, and Scalable Robotic Platform for Multi-Robot Research',
    authors: 'Arif Ahmed, Ritvik Agarwal, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2017',
    type: 'conference',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  // 2016
  {
    id: 16,
    year: 2016,
    title: 'RoboHydra: A Modular, Reconfigurable, and Scalable Robotic Platform for Multi-Robot Research',
    authors: 'Arif Ahmed, Ritvik Agarwal, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2016',
    type: 'conference',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
  // 2015
  {
    id: 17,
    year: 2015,
    title: 'RoboHydra: A Modular, Reconfigurable, and Scalable Robotic Platform for Multi-Robot Research',
    authors: 'Arif Ahmed, Ritvik Agarwal, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2015',
    type: 'conference',
    review: false,
    pdfUrl: null,
    arxivUrl: null,
    codeUrl: null,
  },
])

const publicationsByYear = computed(() => {
  const years = [...new Set(publications.value.map(p => p.year))].sort((a, b) => b - a)
  return years.map(year => ({
    year,
    papers: publications.value.filter(p => p.year === year),
  }))
})

function typeLabel(type) {
  if (type === 'journal') return 'Journal'
  if (type === 'workshop') return 'Workshop'
  if (type === 'presentation') return 'Presentation'
  if (type === 'letter') return 'Letter'
  return 'Conference'
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

.pub-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
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

.type-chip {
  font-size: 0.75rem !important;
  font-weight: 500 !important;
}

.link-btn {
  font-size: 0.8rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  padding: 0 6px !important;
  min-width: unset !important;
}
</style>