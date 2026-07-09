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
    type: 'journal',
    review: false,
    arxivUrl: 'https://arxiv.org/abs/2604.03328',
  },

  // 2025
  {
    id: 2,
    year: 2025,
    title: 'Learning to Predict Mobile Robot Stability in Off-Road Environments',
    authors: 'Nathaniel Rose, Arif Ahmed, Emanuel Gutierrez-Cornejo, Parikshit Maini',
    venue: 'RSS 2025',
    type: 'workshop',
    review: false,
    arxivUrl: 'https://arxiv.org/pdf/2507.12731',
  },
  {
    id: 3,
    year: 2025,
    title: 'SARAL-Bot: Autonomous Robot for Strawberry Plant Care',
    authors: 'Arif Ahmed, Ritvik Agarwal, Gaurav Srikar, Nathaniel Rose, Parikshit Maini',
    venue: 'CoRR 2025',
    type: 'journal',
    review: false,
    arxivUrl: 'https://arxiv.org/pdf/2506.06798',
  },
  {
    id: 4,
    year: 2025,
    title: 'MoistureMapper: An Autonomous Mobile Robot for High-Resolution Soil Moisture Mapping at Scale',
    authors: 'Nathaniel Rose, Hannah Chuang, Manuel A Andrade-Rodriguez, Rishi Parashar, Dani Or, Parikshit Maini',
    venue: 'IEEE 2025',
    type: 'conference',
    review: false,
    arxivUrl: 'https://arxiv.org/pdf/2507.12716',
  },
  {
    id: 5,
    year: 2025,
    title: 'Online Planning for Cooperative Air-Ground Robot Systems with Unknown Fuel Requirements',
    authors: 'Ritvik Agarwal, Behnoushsadat Hatami, Alvika Gautam, Parikshit Maini',
    venue: 'CoRR 2025',
    type: 'Journal',
    review: false,
    arxivUrl: 'https://arxiv.org/pdf/2506.20804',
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
    arxivUrl: 'https://arxiv.org/pdf/2111.10462',
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
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/9439154',
  },

  // 2020
  {
    id: 12,
    year: 2020,
    title: 'Choosing Classification Thresholds for Mobile Robot Coverage',
    authors: 'Parikshit Maini, Volkan Isler',
    venue: 'IROS 2020',
    type: 'conference',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/9340969',
  },
  {
    id: 18,
    year: 2020,
    title: 'Visibility-based persistent monitoring of piecewise linear features on a terrain using multiple aerial and ground robots',
    authors: 'Parikshit Maini, Pratap Tokekar, PB Sujit',
    venue: 'IEEE 2020',
    type: 'journal',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/9174665',
  },
  {
    id: 19,
    year: 2020,
    title: 'Path planning algorithms for single and multiple mobile robot systems',
    authors: 'Parikshit Maini, PB Sujit',
    venue: 'IIID 2020',
    type: 'conference',
    review: false,
    pdfUrl: 'https://repository.iiitd.edu.in/xmlui/handle/123456789/827',
  },

  //2019
  {
    id: 6,
    year: 2019,
    title: 'Route planning for cooperative air-ground robots with fuel constraints: an approach based on CMSA',
    authors: 'Divansh Arora, Parikshit Maini, Pedro Pinacho-Davidson, Christian Blum',
    venue: 'Proceedings of the genetic and evolutionary computation conference',
    type: 'conference',
    review: false,
    pdfUrl: 'https://dl.acm.org/doi/abs/10.1145/3321707.3321820',  
  },
  {
    id: 13,
    year: 2019,
    title: 'Cooperative aerial-ground vehicle route planning with fuel constraints for coverage applications',
    authors: 'Parikshit Maini, Kaarthik Sundar, Mandeep Singh, Sivakumar Rathinam, PB Sujit',
    venue: 'IEEE 2019',
    type: 'journal',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/8723305',
  },
  {
    id: 20,
    year: 2019,
    title: 'SAC: G: Planning and Coordination for Air-Ground Robots in Persistent Monitoring Applications with Visibility Constraints',
    authors: 'Parikshit Maini',
    venue: 'NA',
    type: 'NA',
    review: false,
    pdfUrl: 'https://src.acm.org/binaries/content/assets/src/2019/parikshit-maini.pdf',
  },

  // 2018
  {
    id: 14,
    year: 2018,
    title: 'Persistent monitoring with refueling on a terrain using a team of aerial and ground robots',
    authors: 'Parikshit Maini, Kevin Yu, PB Sujit, Pratap Tokekar',
    venue: 'IROS 2018',
    type: 'conference',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/8593508',
  },
  {
    id: 21,
    year: 2018,
    title: 'Visibility-based monitoring of a path using a heterogeneous robot team',
    authors: 'Parikshit Maini, Gautam Gupta, Pratap Tokekar, PB Sujit',
    venue: 'IROS 2018',
    type: 'conference',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/8593960',
  },
  {
    id: 22,
    year: 2018,
    title: 'Cooperative routing with refueling for aerial and ground vehicles for large scale surveillance: Student research abstract',
    authors: 'Parikshit Maini',
    venue: '33rd Annual ACM Symposium on Applied Computing',
    type: 'conference',
    review: false,
    pdfUrl: 'https://dl.acm.org/doi/abs/10.1145/3167132.3167450',
  },

  // 2017
  {
    id: 15,
    year: 2017,
    title: 'Curvature constrained trajectory planning for a UAV through a sequence of points: A perturbation approach',
    authors: 'Parikshit Maini, Sivakumar Rathinam, PB Sujit',
    venue: 'ASCC 2017',
    type: 'conference',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/8287354',
  },

  // 2016
  {
    id: 16,
    year: 2016,
    title: 'Path planning for a UAV with kinematic constraints in the presence of polygonal obstacles',
    authors: 'Parikshit Maini, PB Sujit',
    venue: 'ICUAS 2016',
    type: 'conference',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/7502625',
  },

  // 2015
  {
    id: 17,
    year: 2015,
    title: 'On cooperation between a fuel constrained UAV and a refueling UGV for large scale mapping applications',
    authors: 'Parikshit Maini, PB Sujit',
    venue: 'ICUAS 2015',
    type: 'conference',
    review: false,
    pdfUrl: 'https://ieeexplore.ieee.org/abstract/document/7152432',
  },
  {
    id: 23,
    year: 2015,
    title: 'Distributed task servicing using multiple robots with human-in-the-loop under limited communication range',
    authors: 'Parikshit Maini, PB Sujit',
    venue: '30th Annual ACM Symposium on Applied Computing',
    type: 'conference',
    review: false,
    pdfUrl: 'https://dl.acm.org/doi/abs/10.1145/2695664.2695893',
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