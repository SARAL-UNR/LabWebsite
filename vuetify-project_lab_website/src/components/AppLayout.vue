<template>
  <v-app :theme="theme">

    <!-- Left Sidebar Navigation -->
    <v-navigation-drawer permanent color="primary" width="220">

      <div class="d-flex flex-column fill-height">

        <!-- Logo -->
        <div class="pa-0 pt-6 d-flex justify-center">
          <img src="/images/unr_logo.png" alt="UNR Logo" height="48" style="display: block;" />
        </div>

        <!-- Site Name -->
        <h1 class="px-4 pb-0 text-center">UNR SARAL</h1>

        <v-divider class="opacity-30 mb-0" />

        <!-- Nav Links -->
        <v-list nav density="compact" class="px-2">
          <v-list-item :to="{ name: 'home' }" title="Home" rounded="lg" class="nav-item mb-1" />
          <v-list-item :to="{ name: 'publications' }" title="Publications" rounded="lg" class="nav-item mb-1" />
          <v-list-item :to="{ name: 'projects' }" title="Projects" rounded="lg" class="nav-item mb-1" />
          <v-list-item :to="{ name: 'people' }" title="People" rounded="lg" class="nav-item mb-1" />
          <v-list-item :to="{ name: 'funding' }" title="Funding" rounded="lg" class="nav-item mb-1" />
          <v-list-item :to="{ name: 'outreach' }" title="Outreach" rounded="lg" class="nav-item mb-1" />
          <v-list-item :to="{ name: 'teaching' }" title="Teaching" rounded="lg" class="nav-item mb-1" />
        </v-list>

        <v-spacer />

        <!-- Footer info at bottom of sidebar -->
        <div class="pa-4">
          <v-divider class="opacity-30 mb-3" />
          <div class="sidebar-footer-text mb-2">
            University of Nevada, Reno<br />
            Dept. of Computer Science and Engineering
          </div>
          <div class="sidebar-footer-text mb-1">
            <a href="https://www.unr.edu" target="_blank" class="footer-link">unr.edu</a>
          </div>
          <div class="sidebar-footer-text">
            <a href="https://www.unr.edu/cse" target="_blank" class="footer-link">unr.edu/cse</a>
          </div>
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

// Must match your nav order top to bottom
const pageOrder = ['home', 'publications', 'projects', 'people', 'funding']

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
  transition: transform 350ms ease, opacity 350ms ease;
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