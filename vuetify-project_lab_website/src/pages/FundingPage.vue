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
        <div class="d-flex align-center mb-4">
          <span class="year-label mr-4">Current Funding</span>
          <v-divider />
        </div>
        <div class="d-flex flex-column gap-3">
          <v-card v-for="fund in currentFunding" :key="fund.id" class="funding-card" flat border>
            <v-card-text class="pa-4">
              <div class="d-flex align-center gap-4">

                <!-- Logo -->
                <div class="funding-logo-wrapper flex-shrink-0">
                  <img
                    v-if="fund.logo"
                    :src="fund.logo"
                    :alt="fund.agency"
                    class="funding-logo"
                  />
                  <!-- Fallback if no logo -->
                  <div v-else class="funding-logo-fallback d-flex align-center justify-center">
                    <v-icon size="28" color="primary">mdi-currency-usd</v-icon>
                  </div>
                </div>

                <!-- Text -->
                <div class="flex-grow-1">
                  <div class="funding-agency">{{ fund.agency }}</div>
                  <div v-if="fund.title" class="funding-title">{{ fund.title }}</div>
                  <div v-if="fund.amount" class="funding-amount text-medium-emphasis">{{ fund.amount }}</div>
                  <div v-if="fund.principalInvestigator" class="funding-pi text-medium-emphasis">PI: {{ fund.principalInvestigator }}</div>
                </div>

              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>

      <!-- Previous Funding Section -->
      <div v-if="previousFunding.length > 0" class="mb-10">
        <div class="d-flex align-center mb-4">
          <span class="year-label mr-4">Previous Funding</span>
          <v-divider />
        </div>
        <div class="d-flex flex-column gap-3">
          <v-card v-for="fund in previousFunding" :key="fund.id" class="funding-card" flat border>
            <v-card-text class="pa-4">
              <div class="d-flex align-center gap-4">

                <!-- Logo -->
                <div class="funding-logo-wrapper flex-shrink-0">
                  <img
                    v-if="fund.logo"
                    :src="fund.logo"
                    :alt="fund.agency"
                    class="funding-logo"
                  />
                  <div v-else class="funding-logo-fallback d-flex align-center justify-center">
                    <v-icon size="28" color="error">mdi-currency-usd</v-icon>
                  </div>
                </div>

                <!-- Text -->
                <div class="flex-grow-1">
                  <div class="funding-agency">{{ fund.agency }}</div>
                  <div v-if="fund.title" class="funding-title">{{ fund.title }}</div>
                  <div v-if="fund.amount" class="funding-amount text-medium-emphasis">{{ fund.amount }}</div>
                  <div v-if="fund.principalInvestigator" class="funding-pi text-medium-emphasis">PI: {{ fund.principalInvestigator }}</div>
                </div>

              </div>
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

// ── Funding data ──────────────────────────────────────────────────────────────
// Add a logo field pointing to an image in public/images/funding/
// Leave logo as '' to show the fallback icon instead.
const funding = ref([
  {
    id: 1,
    type: 'Current',
    agency: 'National Science Foundation',
    title: 'Collaborative Research: Program Title',
    amount: '$500,000 (2024-2027)',
    principalInvestigator: 'Dr. Name',
    logo: '/images/funding/testfd1.jpeg',
  },
  {
    id: 2,
    type: 'Current',
    agency: 'NSF - IIS',
    title: 'Award Title',
    amount: '$250,000 (2025-2028)',
    principalInvestigator: 'Dr. Name',
    logo: '/images/funding/nsf.png',
  },
  {
    id: 3,
    type: 'Previous',
    agency: 'Department of Energy',
    title: 'Previous Research Project',
    amount: '$350,000 (2021-2024)',
    principalInvestigator: 'Dr. Name',
    logo: '/images/funding/doe.png',
  },
])

const currentFunding = computed(() => funding.value.filter(f => f.type === 'Current'))
const previousFunding = computed(() => funding.value.filter(f => f.type === 'Previous'))
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

.funding-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
}

.funding-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

/* Logo container — fixed size so all cards align consistently */
.funding-logo-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.funding-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}

.funding-logo-fallback {
  width: 100%;
  height: 100%;
  background-color: rgba(var(--v-theme-primary), 0.08);
}

.funding-agency {
  font-size: 0.975rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.25rem;
}

.funding-title {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0.25rem;
}

.funding-amount {
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 0.2rem;
}

.funding-pi {
  font-size: 0.8rem;
  line-height: 1.5;
}
</style>