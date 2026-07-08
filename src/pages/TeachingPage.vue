<template>
  <v-container max-width="900" class="py-12">

    <!-- Page Header -->
    <div class="mb-10">
      <h1 class="page-title mb-2">Teaching</h1>
    </div>

    <!-- Courses Section -->
    <div class="mb-12">
      <div class="d-flex align-center mb-4" style="gap: 16px;">
        <span class="section-label">Courses Offered</span>
        <v-divider />
      </div>

      <v-card
        v-for="course in courses"
        :key="course.id"
        flat border
        class="course-card mb-3 pa-5"
      >
        <div class="d-flex align-start flex-wrap" style="gap: 16px;">

          <!-- Course code badge -->
          <div class="course-code-badge flex-shrink-0">
            {{ course.code }}
          </div>

          <!-- Content -->
          <div class="flex-grow-1">
            <div class="course-name mb-1">{{ course.name }}</div>
            <div class="course-meta text-medium-emphasis mb-2">{{ course.term }}</div>
            <div v-if="course.description" class="course-description text-medium-emphasis">
              {{ course.description }}
            </div>
          </div>

        </div>
      </v-card>
    </div>

    <!-- Past Courses Section -->
    <div class="mb-12">
      <div class="d-flex align-center mb-4" style="gap: 16px;">
        <span class="section-label">Past Courses</span>
        <v-divider />
      </div>

      <v-card
        v-for="course in pastCourses"
        :key="course.id"
        flat border
        class="course-card past-course-card mb-3 pa-5"
      >
        <div class="d-flex align-start flex-wrap" style="gap: 16px;">

          <!-- Course code badge -->
          <div class="course-code-badge past-badge flex-shrink-0">
            {{ course.code }}
          </div>

          <!-- Content -->
          <div class="flex-grow-1">
            <div class="course-name mb-1">{{ course.name }}</div>
            <div class="course-meta text-medium-emphasis mb-2">{{ course.term }}</div>
            <div v-if="course.description" class="course-description text-medium-emphasis">
              {{ course.description }}
            </div>
          </div>

        </div>
      </v-card>
    </div>

    <!-- Resources Section -->
    <div class="mb-10">
      <div class="d-flex align-center mb-4" style="gap: 16px;">
        <span class="section-label">Resources</span>
        <v-divider />
      </div>

      <v-row>
        <v-col
          v-for="resource in resources"
          :key="resource.id"
          cols="12"
          sm="6"
        >
          <v-card
            :href="resource.link"
            target="_blank"
            flat border
            class="resource-card pa-4"
          >
            <div class="d-flex align-center" style="gap: 12px;">
              <v-icon :icon="resource.icon" size="24" color="primary" class="flex-shrink-0" />
              <div class="flex-grow-1">
                <div class="resource-name">{{ resource.name }}</div>
                <div class="resource-description text-medium-emphasis">{{ resource.description }}</div>
              </div>
              <v-icon size="16" color="primary" class="flex-shrink-0">mdi-open-in-new</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'

// ── Course data ───────────────────────────────────────────────────────────────
const courses = ref([
  {
    id: 1,
    code: 'CPE 470/670',
    name: 'Introduction to Robotics',
    term: 'Fall 2026',
    description: 'Design, implementation and programming of autonomous mobile robots; sensors, effectors, basic control theory, fundamental elements of mobile robot control, introduction to advanced topics, illustrations of state-of-the-art. Teamwork: final project tested in a robot contest.',
  },
])

// ── Past Course data ──────────────────────────────────────────────────────────
const pastCourses = ref([
  {
    id: 1,
    code: 'CS 477',
    name: 'Analysis of Algorithms',
    term: 'Term Here',
    description: 'Analysis and design of algorithms on sequences, sets, graphs and trees. Geometric, algebraic and numeric algorithms, FFTs, reductions. Parallel algorithms.',
  },
  {
    id: 2,
    code: 'CS 491',
    name: 'Advanced Mobile Robots',
    term: 'Term Here',
    description: 'Description here',
  }
])

// ── Resource data ─────────────────────────────────────────────────────────────
const resources = ref([
  {
    id: 1,
    name: 'Name Here',
    description: 'Description here',
    link: 'https://docs.ros.org',
    icon: 'mdi-robot-outline',
  }
])
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

/* Course cards */
.course-card {
  border-radius: 10px !important;
  transition: box-shadow 0.15s ease;
}

.course-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.course-code-badge {
  background-color: rgb(var(--v-theme-primary));
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 6px 12px;
  border-radius: 6px;
  white-space: nowrap;
}

/* Past course badge uses a muted style */
.past-badge {
  background-color: rgba(var(--v-theme-primary), 0.15);
  color: rgb(var(--v-theme-primary));
}

.course-name {
  font-size: 0.975rem;
  font-weight: 600;
  line-height: 1.4;
}

.course-meta {
  font-size: 0.825rem;
  line-height: 1.4;
}

.course-description {
  font-size: 0.875rem;
  line-height: 1.6;
}

/* Resource cards */
.resource-card {
  border-radius: 10px !important;
  text-decoration: none !important;
  color: inherit !important;
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
}

.resource-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
  border-color: rgba(var(--v-theme-primary), 0.4) !important;
}

.resource-name {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
}

.resource-description {
  font-size: 0.8rem;
  line-height: 1.4;
}
</style>