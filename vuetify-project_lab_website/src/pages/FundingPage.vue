<template>
  <AppLayout>
    <v-container max-width="900" class="py-12">

      <!-- Page Header -->
      <div class="mb-10">
        <h1 class="page-title mb-2">Funding</h1>
        <p class="text-medium-emphasis" style="font-size: 1.05rem;">
          Funding sources for the SARAL lab.
        </p>
      </div>

      <!-- Current Funding Section -->
      <div v-if="currentFunding.length > 0" class="mb-10">
        <div class="year-heading d-flex align-center mb-4">
          <span class="year-label mr-4">Current Funding</span>
          <v-divider />
        </div>
        <div class="d-flex flex-column gap-3">
          <v-card v-for="fund in currentFunding" :key="fund.id" class="funding-card" flat border>
            <v-card-text class="pa-4">
              <div class="funding-agency">{{ fund.agency }}</div>
              <div v-if="fund.title" class="funding-title">{{ fund.title }}</div>
              <div v-if="fund.amount" class="funding-amount text-medium-emphasis">{{ fund.amount }}</div>
              <div v-if="fund.principalInvestigator" class="funding-pi text-medium-emphasis">PI: {{ fund.principalInvestigator }}</div>
            </v-card-text>
          </v-card>
        </div>
      </div>

      <!-- Previous Funding Section -->
      <div v-if="previousFunding.length > 0" class="mb-10">
        <div class="year-heading d-flex align-center mb-4">
          <span class="year-label mr-4">Previous Funding</span>
          <v-divider />
        </div>
        <div class="d-flex flex-column gap-3">
          <v-card v-for="fund in previousFunding" :key="fund.id" class="funding-card" flat border>
            <v-card-text class="pa-4">
              <div class="funding-agency">{{ fund.agency }}</div>
              <div v-if="fund.title" class="funding-title">{{ fund.title }}</div>
              <div v-if="fund.amount" class="funding-amount text-medium-emphasis">{{ fund.amount }}</div>
              <div v-if="fund.principalInvestigator" class="funding-pi text-medium-emphasis">PI: {{ fund.principalInvestigator }}</div>
            </v-card-text>
          </v-card>
        </div>
      </div>

    </v-container>
  </AppLayout>  
</template>

<script setup>
import { ref, computed } from 'vue'
import AppLayout from '@/components/AppLayout.vue'

const theme = ref('light')

// ── Funding data ──────────────────────────────────────────────────────────
// Replace this array with your real data. Each entry supports:
//   id, type ('Current' | 'Previous'), agency, title, amount, principalInvestigator
const funding = ref([
  {
    id: 1,
    type: 'Current',
    agency: 'National Science Foundation',
    title: 'Collaborative Research: Program Title',
    amount: '$500,000 (2024-2027)',
    principalInvestigator: 'Dr. Name',
  },
  {
    id: 2,
    type: 'Current',
    agency: 'NSF - IIS',
    title: 'Award Title',
    amount: '$250,000 (2025-2028)',
    principalInvestigator: 'Dr. Name',
  },
  {
    id: 3,
    type: 'Previous',
    agency: 'Department of Energy',
    title: 'Previous Research Project',
    amount: '$350,000 (2021-2024)',
    principalInvestigator: 'Dr. Name',
  },
])

// Computed properties to group funding by type
const currentFunding = computed(() => funding.value.filter(f => f.type === 'Current'))
const previousFunding = computed(() => funding.value.filter(f => f.type === 'Previous'))
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

.funding-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
}

.funding-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.funding-agency {
  font-size: 0.975rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.funding-title {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.funding-amount {
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 0.25rem;
}

.funding-pi {
  font-size: 0.8rem;
  line-height: 1.5;
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