<template>
  <v-app :theme="theme">

    <!-- Left Sidebar Navigation -->
    <v-navigation-drawer permanent color="primary" width="220">

      <div class="d-flex flex-column fill-height">

        <v-divider class="opacity-30 mb-0 flex-shrink-0" />

        <!-- Nav Links — scrollable if content overflows -->
        <div class="nav-scroll-area">
          <v-list nav density="compact" class="px-2">
            <v-list-item :to="{ name: 'home' }" title="Home" rounded="lg" class="nav-item mb-1" />
            <v-list-item :to="{ name: 'people' }" title="People" rounded="lg" class="nav-item mb-1" />
            <v-list-item :to="{ name: 'research' }" title="Research" rounded="lg" class="nav-item mb-1" />
            <v-list-item :to="{ name: 'publications' }" title="Publications" rounded="lg" class="nav-item mb-1" />
            <v-list-item :to="{ name: 'funding' }" title="Funding" rounded="lg" class="nav-item mb-1" />
            <v-list-item :to="{ name: 'teaching' }" title="Teaching" rounded="lg" class="nav-item mb-1" />
            <v-list-item :to="{ name: 'outreach' }" title="Outreach" rounded="lg" class="nav-item mb-1" />
          </v-list>
        </div>

        <!-- Footer info at bottom of sidebar — always visible -->
        <div class="pa-4 flex-shrink-0">
          <v-divider class="opacity-30 mb-3" />
          <div class="sidebar-footer-text mb-1">
            <a href="https://www.unr.edu" target="_blank" class="footer-link">University of Nevada, Reno</a>
          </div>
          <!-- <div class="sidebar-footer-text">
            <a href="https://www.unr.edu/cse" target="_blank" class="footer-link">unr.edu/cse</a>
          </div> -->
        </div>

      </div>
    </v-navigation-drawer>

    <!-- Page Content with slide transition -->
    <v-main style="overflow: hidden;">
      <router-view v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="$route.name" />
        </Transition>
      </router-view>
    </v-main>

  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const theme = ref('light')
const route = useRoute()
const transitionName = ref('slide-left')

const pageOrder = ['home', 'publications', 'research', 'research-individual', 'people', 'people-individual', 'funding', 'outreach', 'teaching']

watch(route, (to, from) => {
  const toIndex   = pageOrder.indexOf(to.name)
  const fromIndex = pageOrder.indexOf(from.name)
  transitionName.value = toIndex >= fromIndex ? 'slide-left' : 'slide-right'
})
</script>

<style scoped>
.nav-item {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Takes up remaining space and scrolls if nav links overflow */
.nav-scroll-area {
  flex: 1 1 0;
  overflow-y: auto;
  min-height: 0;
  /* Thin scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.nav-scroll-area::-webkit-scrollbar {
  width: 4px;
}

.nav-scroll-area::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
}

.nav-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0);
  border-radius: 4px;
}

.sidebar-footer-text {
  font-size: 0.72rem;
  line-height: 1.5;
  opacity: 0.75;
}

.footer-link {
  color: inherit;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

/* ── Slide transitions ───────────────────────────────────────────────────── */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 900ms ease, opacity 900ms ease;
  position: absolute;
  width: 100%;
}

.slide-left-enter-from  { transform: translateX(100%);  opacity: 0; }
.slide-left-enter-to    { transform: translateX(0);      opacity: 1; }
.slide-left-leave-from  { transform: translateX(0);      opacity: 1; }
.slide-left-leave-to    { transform: translateX(-100%);  opacity: 0; }

.slide-right-enter-from { transform: translateX(-100%); opacity: 0; }
.slide-right-enter-to   { transform: translateX(0);     opacity: 1; }
.slide-right-leave-from { transform: translateX(0);     opacity: 1; }
.slide-right-leave-to   { transform: translateX(100%);  opacity: 0; }
</style>