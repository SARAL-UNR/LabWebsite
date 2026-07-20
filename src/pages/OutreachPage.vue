<template>
  <v-container max-width="900" class="py-12">

    <!-- Page Header -->
    <div class="mb-10">
      <h1 class="page-title mb-2">Outreach</h1>
      <p class="text-medium-emphasis" style="font-size: 1.05rem;">
        Community engagement and outreach events from the SARAL lab.
      </p>
    </div>

    <!-- Upcoming Events -->
    <div v-if="upcomingEvents.length > 0" class="mb-10">
      <div class="d-flex align-center mb-4">
        <span class="section-label mr-4">Upcoming Events</span>
        <v-divider />
      </div>

      <v-card
        v-for="event in upcomingEvents"
        :key="event.id"
        flat border
        class="event-card mb-3 pa-5"
      >
        <div class="d-flex align-start flex-wrap" style="gap: 8px;">

          <!-- Date badge -->
          <div class="event-date-badge flex-shrink-0 text-center">
            <div class="event-month">{{ month(event.date) }}</div>
            <div class="event-day">{{ day(event.date) }}</div>
            <div class="event-year">{{ year(event.date) }}</div>
          </div>

          <!-- Content -->
          <div class="flex-grow-1">
            <div class="event-name mb-1">{{ event.name }}</div>
            <div class="event-location text-medium-emphasis mb-2">
              <v-icon size="14" class="mr-1">mdi-map-marker-outline</v-icon>
              {{ event.location }}
            </div>
            <div v-if="event.description" class="event-description text-medium-emphasis">
              {{ event.description }}
            </div>
          </div>

        </div>
      </v-card>
    </div>

    <!-- No upcoming events fallback -->
    <div v-else class="mb-10">
      <div class="d-flex align-center mb-4">
        <span class="section-label mr-4">Upcoming Events</span>
        <v-divider />
      </div>
      <p class="text-medium-emphasis" style="font-size: 0.9rem;">No upcoming events at this time. Check back soon!</p>
    </div>

    <!-- Past Events -->
    <!--
    <div v-if="pastEvents.length > 0" class="mb-10">
      <div class="d-flex align-center mb-4">
        <span class="section-label mr-4">Past Events</span>
        <v-divider />
      </div>

      <v-card
        v-for="event in pastEvents"
        :key="event.id"
        flat border
        class="event-card event-card--past mb-3 pa-5"
      >
        <div class="d-flex align-start flex-wrap" style="gap: 8px;">


          <div class="event-date-badge event-date-badge--past flex-shrink-0 text-center">
            <div class="event-month">{{ month(event.date) }}</div>
            <div class="event-day">{{ day(event.date) }}</div>
            <div class="event-year">{{ year(event.date) }}</div>
          </div>


          <div class="flex-grow-1">
            <div class="event-name mb-1">{{ event.name }}</div>
            <div class="event-location text-medium-emphasis mb-2">
              <v-icon size="14" class="mr-1">mdi-map-marker-outline</v-icon>
              {{ event.location }}
            </div>
            <div v-if="event.description" class="event-description text-medium-emphasis">
              {{ event.description }}
            </div>
          </div>

        </div>
      </v-card>
    </div>
  -->

  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

// ── Event data ────────────────────────────────────────────────────────────────
// type: 'upcoming' | 'past'
// date: 'YYYY-MM-DD' format
const events = ref([
  {
    id: 1,
    type: 'upcoming',
    name: 'College of Engineering Summer Camp',
    description: 'Outreach event at the College of Engineering summer camp for local youth.',
    location: 'University of Nevada, Reno',
    date: '2026-06-24',
  },
  {
    id: 2,
    type: 'upcoming',
    name: '4-H Summer Camp',
    description: 'Outreach event at the 4-H summer camp for local youth.',
    location: '4-H Camp',
    date: '2026-07-29',
  }
])

const upcomingEvents = computed(() =>
  events.value
    .filter(e => e.type === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
)

const pastEvents = computed(() =>
  events.value
    .filter(e => e.type === 'past')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
)

// Date helpers
function month(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleString('default', { month: 'short' }).toUpperCase()
}
function day(dateStr) {
  return new Date(dateStr + 'T00:00:00').getDate()
}
function year(dateStr) {
  return new Date(dateStr + 'T00:00:00').getFullYear()
}
</script>

<style scoped>
.page-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.1;
}

.section-label {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: nowrap;
  color: rgb(var(--v-theme-primary));
}

.event-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
}

.event-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.event-card--past {
  opacity: 0.8;
}

/* Date badge */
.event-date-badge {
  width: 60px;
  background-color: rgb(var(--v-theme-primary));
  border-radius: 8px;
  padding: 6px 4px;
  color: white;
}

.event-date-badge--past {
  background-color: rgba(var(--v-theme-on-surface), 0.15);
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.event-month {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.event-day {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.1;
}

.event-year {
  font-size: 0.65rem;
  font-weight: 500;
  line-height: 1.4;
  opacity: 0.85;
}

.event-name {
  font-size: 0.975rem;
  font-weight: 600;
  line-height: 1.4;
}

.event-location {
  font-size: 0.825rem;
  line-height: 1.4;
}

.event-description {
  font-size: 0.875rem;
  line-height: 1.6;
}
</style>