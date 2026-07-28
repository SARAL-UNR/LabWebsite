<template>
  <v-app :theme="theme">

    <!-- Sidebar — permanent on desktop, temporary (drawer) on mobile -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isMobile"
      :temporary="isMobile"
      color="primary"
      width="220"
    >
      <div class="d-flex flex-column fill-height">

        <v-divider class="opacity-30 mb-0 flex-shrink-0" />

        <!-- Nav Links — scrollable if content overflows -->
        <div class="nav-scroll-area">
          <v-list nav density="compact" class="px-2" base-color="primary" active-color="primary" style="background: transparent;">
            <v-list-item :to="{ name: 'home' }"         title="Home"         rounded="lg" class="nav-item mb-2" @click="closeDrawer" />
            <v-list-item :to="{ name: 'people' }"       title="People"       rounded="lg" class="nav-item mb-2" @click="closeDrawer" />
            <v-list-item :to="{ name: 'research' }"     title="Research"     rounded="lg" class="nav-item mb-2" @click="closeDrawer" />
            <v-list-item :to="{ name: 'publications' }" title="Publications" rounded="lg" class="nav-item mb-2" @click="closeDrawer" />
            <v-list-item :to="{ name: 'funding' }"      title="Funding"      rounded="lg" class="nav-item mb-2" @click="closeDrawer" />
            <v-list-item :to="{ name: 'teaching' }"     title="Teaching"     rounded="lg" class="nav-item mb-2" @click="closeDrawer" />
            <v-list-item :to="{ name: 'outreach' }"     title="Outreach"     rounded="lg" class="nav-item mb-2" @click="closeDrawer" />
          </v-list>
        </div>

        <!-- Footer info at bottom of sidebar — always visible -->
        <div class="pa-4 flex-shrink-0">
          <v-divider class="opacity-30 mb-3" />
          <div class="sidebar-footer-text mb-1">
            <a href="https://www.unr.edu" target="_blank" class="footer-link">University of Nevada, Reno</a>
          </div>
        </div>

      </div>
    </v-navigation-drawer>

    <!-- Top app bar — only shown on mobile -->
    <v-app-bar v-if="isMobile" flat border="b" color="primary" height="56">
      <v-app-bar-title class="mobile-title">UNR SARAL</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <!-- Page Content with slide transition -->
    <v-main>
      <div class="page-wrapper">
        <router-view v-slot="{ Component }">
          <Transition :name="transitionName" mode="out-in">
            <component :is="Component" :key="$route.name" />
          </Transition>
        </router-view>
      </div>
    </v-main>

  </v-app>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const theme = ref('light')
const route = useRoute()
const transitionName = ref('slide-left')
const drawer = ref(window.innerWidth >= 768)
const windowWidth = ref(window.innerWidth)

// Breakpoint — below 768px is considered mobile
const isMobile = computed(() => windowWidth.value < 768)

function onResize() {
  windowWidth.value = window.innerWidth
  if (!isMobile.value) {
    drawer.value = true  
  }
}

function closeDrawer() {
  if (isMobile.value) drawer.value = false
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

const pageOrder = ['home', 'publications', 'research', 'research-individual', 'people', 'people-individual', 'funding', 'outreach', 'teaching']

watch(route, (to, from) => {
  const toIndex   = pageOrder.indexOf(to.name)
  const fromIndex = pageOrder.indexOf(from.name)
  transitionName.value = toIndex >= fromIndex ? 'slide-left' : 'slide-right'
})
</script>

<style scoped>
.mobile-title {
  font-size: 1rem;
  font-weight: 700;
}

.nav-item {
  min-height: 48px;
  margin-right: 12px;
  background: white !important;
  overflow: visible !important;
}

.nav-item :deep(.v-list-item-title) {
  font-size: 1rem;
  font-weight: 600;
  overflow: visible !important;
  line-height: 1.6;
}

.nav-item :deep(.v-list-item__content) {
  overflow: visible !important;
}

.nav-scroll-area {
  flex: 1 1 0;
  overflow-y: auto;
  min-height: 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.nav-scroll-area::-webkit-scrollbar {
  width: 4px;
}

.nav-scroll-area::-webkit-scrollbar-track {
  background: transparent;
}

.nav-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
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
.page-wrapper {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 900ms ease, opacity 900ms ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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