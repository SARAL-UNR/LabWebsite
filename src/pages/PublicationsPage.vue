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
        <component
          :is="pub.url ? 'a' : 'div'"
          :href="pub.url || undefined"
          target="_blank"
          class="pub-title mb-1"
          :class="{ 'pub-title--link': pub.url }"
        >
          {{ pub.title }}
        </component>

        <!-- Authors -->
        <div class="pub-authors text-medium-emphasis mb-1">{{ pub.authors }}</div>

        <!-- Venue as plain text -->
        <div class="pub-venue text-medium-emphasis mb-2">{{ pub.venue }}</div>

        <!-- Type tag + links -->
        <div class="d-flex align-center flex-wrap" style="gap: 4px;">

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
  // {
  //  id: 1,
  //  year: 2026,
  //  title: 'Review and Evaluation of Point-Cloud based Leaf Surface Reconstruction Methods for Agricultural Applications',
  //  authors: 'A Ahmed, P Maini',
  //  venue: 'arXiv preprint arXiv:2604.03328',
  //    type: 'preprint',
  //    review: true,
  //    url: 'https://arxiv.org/abs/2604.03328',
  //  },

  // 2025
  {
    id: 2,
    year: 2025,
    title: 'MoistureMapper: An Autonomous Mobile Robot for High-Resolution Soil Moisture Mapping at Scale',
    authors: 'Nathaniel Rose, Hannah Chuang, Manuel A Andrade-Rodriguez, Rishi Parashar, Dani Or, Parikshit Maini',
    venue: '2025 IEEE 21st International Conference on Automation Science and Engineering (CASE)',
    type: 'conference',
    review: false,
    url: 'https://ieeexplore.ieee.org/document/11163809',
  },
  {
    id: 3,
    year: 2025,
    title: 'Online Planning for Cooperative Air-Ground Robot Systems with Unknown Fuel Requirements',
    authors: 'Ritvik Agarwal, Behnoushsadat Hatami, Alvika Gautam, Parikshit Maini',
    venue: 'arXiv preprint arXiv:2506.20804',
    type: 'preprint',
    review: false,
    url: 'https://arxiv.org/abs/2506.20804',
  },
  {
    id: 4,
    year: 2025,
    title: 'SARAL-Bot: Autonomous Robot for Strawberry Plant Care',
    authors: 'Arif Ahmed, Ritvik Agarwal, Gaurav Srikar, Nathaniel Rose, Parikshit Maini',
    venue: 'arXiv preprint arXiv:2506.06798',
    type: 'preprint',
    review: false,
    url: 'https://arxiv.org/abs/2506.06798',
  },
  {
    id: 5,
    year: 2025,
    title: 'Learning to Predict Mobile Robot Stability in Off-Road Environments',
    authors: 'Nathaniel Rose, Arif Ahmed, Emanuel Gutierrez-Cornejo, Parikshit Maini',
    venue: 'RSS 2025 Workshop on Resilient Off-road Autonomous Robotics (ROAR)',
    type: 'workshop',
    review: false,
    url: 'https://arxiv.org/abs/2507.12731',
  },

  // 2023
  {
    id: 6,
    year: 2023,
    title: 'Wheat Stem Rust Detection with RGB images captured on the Farm using a hand-held camera',
    authors: 'R M Moorthy, P Maini, M Rouse, C Yang, S Kianian, V Isler',
    venue: 'ASABE 2023',
    type: 'poster presentation',
    review: false,
  },

  // 2022
  {
    id: 7,
    year: 2022,
    title: 'Online coverage planning for an autonomous weed mowing robot with curvature constraints',
    authors: 'Parikshit Maini, Burak M Gonultas, Volkan Isler',
    venue: 'IEEE Robotics and Automation Letters, Vol. 7, No. 2, pp. 5445-5452',
    type: 'journal',
    review: false,
    url: 'https://ieeexplore.ieee.org/document/9720982',
  },

  // 2021
  {
    id: 8,
    year: 2021,
    title: 'Visual monitoring of points of interest on a 2.5 D terrain using a UAV with limited field-of-view constraint',
    authors: 'Parikshit Maini, Pratap Tokekar, PB Sujit',
    venue: 'IEEE Transactions on Aerospace and Electronic Systems, Vol. 57, No. 6, pp. 3661-3672',
    type: 'journal',
    review: false,
    url: 'https://doi.org/10.1109/TAES.2021.3082668',
  },

  // 2020
  {
    id: 9,
    year: 2020,
    title: 'Choosing Classification Thresholds for Mobile Robot Coverage',
    authors: 'Parikshit Maini, Volkan Isler',
    venue: '2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    type: 'conference',
    review: false,
  },
  {
    id: 10,
    year: 2020,
    title: 'Visibility-based persistent monitoring of piecewise linear features on a terrain using multiple aerial and ground robots',
    authors: 'Parikshit Maini, Pratap Tokekar, PB Sujit',
    venue: 'IEEE Transactions on Automation Science and Engineering, Vol. 18, No. 4, pp. 1692-1704',
    type: 'journal',
    review: false,
  },
  {
    id: 11,
    year: 2020,
    title: 'Path planning algorithms for single and multiple mobile robot systems',
    authors: 'Parikshit Maini, PB Sujit',
    venue: 'IIIT-Delhi',
    type: 'PhD dissertation',
    review: false,
    url: 'https://repository.iiitd.edu.in/xmlui/handle/123456789/827',
  },

  // 2019
  {
    id: 12,
    year: 2019,
    title: 'Route planning for cooperative air-ground robots with fuel constraints: an approach based on CMSA',
    authors: 'Divansh Arora, Parikshit Maini, Pedro Pinacho-Davidson, Christian Blum',
    venue: 'Proceedings of the Genetic and Evolutionary Computation Conference (GECCO), pp. 207-214',
    type: 'conference',
    review: false,
    url: 'https://dl.acm.org/doi/abs/10.1145/3321707.3321820',
  },
  {
    id: 13,
    year: 2019,
    title: 'Cooperative aerial-ground vehicle route planning with fuel constraints for coverage applications',
    authors: 'Parikshit Maini, Kaarthik Sundar, Mandeep Singh, Sivakumar Rathinam, PB Sujit',
    venue: 'IEEE Transactions on Aerospace and Electronic Systems, Vol. 55, No. 6, pp. 3016-3028',
    type: 'journal',
    review: false,
    url: 'https://ieeexplore.ieee.org/abstract/document/8723305',
  },
  {
    id: 14,
    year: 2019,
    title: 'SAC: G: Planning and Coordination for Air-Ground Robots in Persistent Monitoring Applications with Visibility Constraints',
    authors: 'Parikshit Maini',
    venue: 'ACM Student Research Competition / NSF award abstract',
    type: 'award/grant abstract',
    review: false,
    url: 'https://src.acm.org/binaries/content/assets/src/2019/parikshit-maini.pdf',
  },

  // 2018
  {
    id: 15,
    year: 2018,
    title: 'Persistent monitoring with refueling on a terrain using a team of aerial and ground robots',
    authors: 'Parikshit Maini, Kevin Yu, PB Sujit, Pratap Tokekar',
    venue: '2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    type: 'conference',
    review: false,
    url: 'https://ieeexplore.ieee.org/abstract/document/8593508',
  },
  {
    id: 16,
    year: 2018,
    title: 'Visibility-based monitoring of a path using a heterogeneous robot team',
    authors: 'Parikshit Maini, Gautam Gupta, Pratap Tokekar, PB Sujit',
    venue: '2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    type: 'conference',
    review: false,
    url: 'https://ieeexplore.ieee.org/abstract/document/8593960',
  },
  {
    id: 17,
    year: 2018,
    title: 'Cooperative routing with refueling for aerial and ground vehicles for large scale surveillance: Student research abstract',
    authors: 'Parikshit Maini',
    venue: 'Proceedings of the 33rd Annual ACM Symposium on Applied Computing, pp. 847-848',
    type: 'student research abstract',
    review: false,
    url: 'https://dl.acm.org/doi/abs/10.1145/3167132.3167450',
  },

  // 2017
  {
    id: 18,
    year: 2017,
    title: 'Curvature constrained trajectory planning for a UAV through a sequence of points: A perturbation approach',
    authors: 'Parikshit Maini, Sivakumar Rathinam, PB Sujit',
    venue: '2017 11th Asian Control Conference (ASCC), pp. 1276-1281',
    type: 'conference',
    review: false,
    url: 'https://ieeexplore.ieee.org/abstract/document/8287354',
  },

  // 2016
  {
    id: 19,
    year: 2016,
    title: 'Path planning for a UAV with kinematic constraints in the presence of polygonal obstacles',
    authors: 'Parikshit Maini, PB Sujit',
    venue: '2016 International Conference on Unmanned Aircraft Systems (ICUAS), pp. 62-67',
    type: 'conference',
    review: false,
    url: 'https://ieeexplore.ieee.org/abstract/document/7502625',
  },

  // 2015
  {
    id: 20,
    year: 2015,
    title: 'On cooperation between a fuel constrained UAV and a refueling UGV for large scale mapping applications',
    authors: 'Parikshit Maini, PB Sujit',
    venue: '2015 International Conference on Unmanned Aircraft Systems (ICUAS), pp. 1370-1377',
    type: 'conference',
    review: false,
    url: 'https://ieeexplore.ieee.org/abstract/document/7152432',
  },
  {
    id: 21,
    year: 2015,
    title: 'Distributed task servicing using multiple robots with human-in-the-loop under limited communication range',
    authors: 'Parikshit Maini, PB Sujit',
    venue: 'Proceedings of the 30th Annual ACM Symposium on Applied Computing, pp. 301-306',
    type: 'conference',
    review: false,
    url: 'https://dl.acm.org/doi/abs/10.1145/2695664.2695893',
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
  if (type === 'poster presentation') return 'Poster Presentation'
  if (type === 'conference') return 'Conference'
  if (type === 'PhD dissertation') return 'PhD Dissertation'
  if (type === 'preprint') return 'Preprint'
  if (type === 'award/grant abstract') return 'Award/Grant Abstract'
  if (type === 'student research abstract') return 'Student Research Abstract'
  return 'Other'
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

.type-chip {
  font-size: 0.75rem !important;
  font-weight: 500 !important;
}

.pub-venue {
  font-size: 0.825rem;
  font-style: italic;
  line-height: 1.4;
}

.pub-title--link {
  color: rgb(var(--v-theme-primary));
  text-decoration: underline;
}

.pub-title--link:hover {
  opacity: 0.75;
}
</style>