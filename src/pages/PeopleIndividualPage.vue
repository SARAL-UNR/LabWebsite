<template>
  <v-container max-width="900" class="py-12">

    <div v-if="person">

      <!-- Back button -->
      <v-btn
        variant="text"
        color="primary"
        prepend-icon="mdi-arrow-left"
        :to="{ name: 'people' }"
        class="mb-6 back-btn"
      >
        Back to People
      </v-btn>

      <!-- Header: photo + name/role/links -->
      <div class="d-flex align-start gap-8 flex-wrap" style="gap: 16px;">

        <!-- Portrait -->
        <div class="person-portrait-wrapper flex-shrink-0">
          <img
            v-if="person.photo"
            :src="person.photo"
            :alt="person.name"
            class="person-portrait"
          />
          <div v-else class="person-portrait-fallback d-flex align-center justify-center">
            <span class="fallback-initials">{{ initials(person.name) }}</span>
          </div>
        </div>

        <!-- Name / role / external links -->
        <div class="flex-grow-1" >
          <h1 class="person-name mb-1">{{ person.name }}</h1>
          <div class="person-role text-medium-emphasis" >{{ person.role }}</div>
          <div class = "person-year text-medium-emphasis mb-4">{{ person.year }}</div>

          <!-- External links -->
          <div class="d-flex flex-wrap" style="gap: 4px;">
            <v-btn
              v-if="person.links.email"
              :href="`mailto:${person.links.email}`"
              variant="tonal"
              color="primary"
              size="small"
              prepend-icon="mdi-email-outline"
              class="link-btn"
            >
              Email
            </v-btn>
            <v-btn
              v-if="person.links.website"
              :href="person.links.website"
              target="_blank"
              variant="tonal"
              color="primary"
              size="small"
              prepend-icon="mdi-web"
              class="link-btn"
            >
              Website
            </v-btn>
            <v-btn
              v-if="person.links.scholar"
              :href="person.links.scholar"
              target="_blank"
              variant="tonal"
              color="primary"
              size="small"
              prepend-icon="mdi-school-outline"
              class="link-btn"
            >
              Google Scholar
            </v-btn>
            <v-btn
              v-if="person.links.github"
              :href="person.links.github"
              target="_blank"
              variant="tonal"
              color="primary"
              size="small"
              prepend-icon="mdi-github"
              class="link-btn"
            >
              GitHub
            </v-btn>
            <v-btn
              v-if="person.links.linkedin"
              :href="person.links.linkedin"
              target="_blank"
              variant="tonal"
              color="primary"
              size="small"
              prepend-icon="mdi-linkedin"
              class="link-btn"
            >
              LinkedIn
            </v-btn>
          </div>
        </div>

      </div>

      <!-- Bio -->
      <div v-if="person.bio" class="mb-8">
        <div class="section-heading d-flex align-center mb-3">
          <span class="section-label pushed-text mr-4">About</span>
          <v-divider />
        </div>
        <p class="body-text">{{ person.bio }}</p>
      </div>

      <!-- Research Interests -->
      <div v-if="person.interests && person.interests.length > 0" class="mb-8">
        <div class="section-heading d-flex align-center mb-3">
          <span class="section-label mr-4">Research Interests</span>
          <v-divider />
        </div>
        <div class="d-flex flex-wrap" style="gap: 4px;">
          <v-chip
            v-for="interest in person.interests"
            :key="interest"
            color="primary"
            variant="tonal"
            size="small"
            label
          >
            {{ interest }}
          </v-chip>
        </div>
      </div>

      <!-- Publications -->
      <div v-if="person.publications && person.publications.length > 0" class="mb-8">
        <div class="section-heading d-flex align-center mb-3">
          <span class="section-label mr-4">Publications</span>
          <v-divider />
        </div>
        <v-card
          v-for="pub in person.publications"
          :key="pub.title"
          flat border
          class="pub-card mb-3 pa-4"
        >
          <div class="pub-title mb-1">{{ pub.title }}</div>
          <div class="pub-authors text-medium-emphasis mb-2">{{ pub.authors }}</div>
          <div class="d-flex align-center flex-wrap" style="gap: 4px;">
            <v-chip size="small" color="primary" variant="tonal" label class="venue-chip">
              {{ pub.venue }}
            </v-chip>
            <v-btn v-if="pub.pdfUrl" :href="pub.pdfUrl" target="_blank" variant="text" size="small" color="primary" prepend-icon="mdi-file-pdf-box" class="link-btn">PDF</v-btn>
            <v-btn v-if="pub.arxivUrl" :href="pub.arxivUrl" target="_blank" variant="text" size="small" color="primary" prepend-icon="mdi-open-in-new" class="link-btn">arXiv</v-btn>
          </div>
        </v-card>
      </div>

      <!-- Projects -->
      <div v-if="person.projects && person.projects.length > 0" class="mb-8">
        <div class="section-heading d-flex align-center mb-3">
          <span class="section-label mr-4">Projects</span>
          <v-divider />
        </div>
        <div class="d-flex flex-wrap" style="gap: 4px;">
          <v-btn
            v-for="project in person.projects"
            :key="project.name"
            :to="{ name: 'research' }"
            variant="tonal"
            color="primary"
            size="small"
            class="link-btn"
          >
            {{ project.name }}
          </v-btn>
        </div>
      </div>

    </div>

    <!-- 404 fallback -->
    <div v-else class="text-center py-16">
      <div class="text-h5 mb-2">Person not found</div>
      <v-btn :to="{ name: 'people' }" color="primary" variant="tonal">Back to People</v-btn>
    </div>

  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// ── People data ───────────────────────────────────────────────────────────────
// Each person needs a unique `slug` that matches the URL.
// e.g. /people/jane-smith → slug: 'jane-smith'
// Add a new entry here for each lab member.
const people = [
  {
    slug: 'parikshit-maini',
    name: 'Dr. Parikshit Maini',
    role: 'Principal Investigator',
    group: 'PI',
    year: '2018 - Present',
    photo: `${import.meta.env.BASE_URL}images/people/parikshit-maini.png`,
    bio: `TEXT HERE`,
    interests: ['Mobile Manipulation', 'Motion Planning', 'Deep Reinforcement Learning', 'Robot Perception'],
    links: {
      email: 'jsmith@unr.edu',
      website: 'https://www.unr.edu',
      scholar: 'https://scholar.google.com',
      github: 'https://github.com',
      linkedin: '',
    },
  },
  {
    slug: 'arif-ahmed',
    name: 'Arif Ahmed',
    role: 'PhD Student',
    group: 'PhD Students',
    photo: `${import.meta.env.BASE_URL}images/people/arif-ahmed.png`,
    bio: `TEXT HERE`,
    interests: ['Imitation Learning', 'Skill Learning', 'Manipulation'],
    links: {
      email: 'apatel@unr.edu',
      website: '',
      scholar: '',
      github: 'https://github.com',
      linkedin: '',
    },
    publications: [
      {
        title: 'Task-Parameterized Skill Learning from a Single Demonstration',
        authors: 'A. Patel, J. Smith',
        venue: 'CoRL 2024 Workshop',
        pdfUrl: '#',
        arxivUrl: null,
      },
    ],
    projects: [
      { name: 'RoboHydra' },
    ],
  },
  {
    slug: 'nathaniel-rose',
    name: 'Nathaniel Rose',
    role: 'PhD Student',
    group: 'PhD Students',
    photo: `${import.meta.env.BASE_URL}images/people/nathaniel-rose.png`,
    bio: `TEXT HERE`,
    interests: ['Imitation Learning', 'Skill Learning', 'Manipulation'],
    links: {
      email: 'apatel@unr.edu',
      website: '',
      scholar: '',
      github: 'https://github.com',
      linkedin: '',
    },
    publications: [
      {
        title: 'Task-Parameterized Skill Learning from a Single Demonstration',
        authors: 'A. Patel, J. Smith',
        venue: 'CoRL 2024 Workshop',
        pdfUrl: '#',
        arxivUrl: null,
      },
    ],
    projects: [
      { name: 'RoboHydra' },
    ],
  },
  {
    slug: 'hannah-chuang',
    name: 'Hannah Chung',
    role: 'Master\'s Student',
    group: 'Master\'s Students',
    photo: `${import.meta.env.BASE_URL}images/people/hannah-chung.png`,
    bio: `TEXT HERE`,
    interests: ['Imitation Learning', 'Skill Learning', 'Manipulation'],
    links: {
      email: 'apatel@unr.edu',
      website: '',
      scholar: '',
      github: 'https://github.com',
      linkedin: '',
    },
    publications: [
      {
        title: 'Task-Parameterized Skill Learning from a Single Demonstration',
        authors: 'A. Patel, J. Smith',
        venue: 'CoRL 2024 Workshop',
        pdfUrl: '#',
        arxivUrl: null,
      },
    ],
    projects: [
      { name: 'RoboHydra' },
    ],
  },
  {
    slug: 'emanuel-gutierrez-cornejo',
    name: 'Emanuel Gutierrez-Cornejo',
    role: 'Master\'s Student',
    group: 'Master\'s Students',
    photo: `${import.meta.env.BASE_URL}images/people/emanuel-gutierrez-cornejo.png`,
    bio: `TEXT HERE`,
    interests: ['Imitation Learning', 'Skill Learning', 'Manipulation'],
    links: {
      email: 'apatel@unr.edu',
      website: '',
      scholar: '',
      github: 'https://github.com',
      linkedin: '',
    },
    publications: [
      {
        title: 'Task-Parameterized Skill Learning from a Single Demonstration',
        authors: 'A. Patel, J. Smith',
        venue: 'CoRL 2024 Workshop',
        pdfUrl: '#',
        arxivUrl: null,
      },
    ],
    projects: [
      { name: 'RoboHydra' },
    ],
  },
  {
    slug: 'jairo-cadena-mendez',
    name: 'Jairo Cadena-Mendez',
    role: 'Master\'s Student',
    group: 'Master\'s Students',
    photo: `${import.meta.env.BASE_URL}images/people/jairo-cadena-mendez.png`,
    bio: `TEXT HERE`,
    interests: ['Imitation Learning', 'Skill Learning', 'Manipulation'],
    links: {
      email: 'apatel@unr.edu',
      website: '',
      scholar: '',
      github: 'https://github.com',
      linkedin: '',
    },
    publications: [
      {
        title: 'Task-Parameterized Skill Learning from a Single Demonstration',
        authors: 'A. Patel, J. Smith',
        venue: 'CoRL 2024 Workshop',
        pdfUrl: '#',
        arxivUrl: null,
      },
    ],
    projects: [
      { name: 'RoboHydra' },
    ],
  },
  {
    slug: 'dominic-palmieri',
    name: 'Dominic Palmieri',
    role: 'Master\'s Student',
    group: 'Master\'s Students',
    photo: `${import.meta.env.BASE_URL}images/people/dominic-palmieri.png`,
    bio: `TEXT HERE`,
    interests: ['Imitation Learning', 'Skill Learning', 'Manipulation'],
    links: {
      email: 'apatel@unr.edu',
      website: '',
      scholar: '',
      github: 'https://github.com',
      linkedin: '',
    },
    publications: [
      {
        title: 'Task-Parameterized Skill Learning from a Single Demonstration',
        authors: 'A. Patel, J. Smith',
        venue: 'CoRL 2024 Workshop',
        pdfUrl: '#',
        arxivUrl: null,
      },
    ],
    projects: [
      { name: 'RoboHydra' },
    ],
  },
  {
    slug: 'yovan-hirales',
    name: 'Yovan Hirales',
    role: 'Undergraduate Student',
    group: 'Undergraduate Students',
    photo: `${import.meta.env.BASE_URL}images/people/yovan-hirales.png`,
    bio: `TEXT HERE`,
    interests: ['Imitation Learning', 'Skill Learning', 'Manipulation'],
    links: {
      email: 'apatel@unr.edu',
      website: '',
      scholar: '',
      github: 'https://github.com',
      linkedin: '',
    },
    publications: [
      {
        title: 'Task-Parameterized Skill Learning from a Single Demonstration',
        authors: 'A. Patel, J. Smith',
        venue: 'CoRL 2024 Workshop',
        pdfUrl: '#',
        arxivUrl: null,
      },
    ],
    projects: [
      { name: 'RoboHydra' },
    ],
  }
]

// Look up person by slug from the URL
const person = computed(() =>
  people.find(p => p.slug === route.params.slug) ?? null
)

function initials(name) {
  return name.split(' ').filter(Boolean).map(n => n[0]).slice(0, 2).join('').toUpperCase()
}
</script>

<style scoped>
.back-btn {
  font-size: 0.875rem;
  text-transform: none;
  letter-spacing: 0;
}

.person-portrait-wrapper {
  width: 180px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(var(--v-theme-primary), 0.15);
  background-color: rgba(0, 0, 0, 0.04);
}

.person-portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.person-portrait-fallback {
  width: 100%;
  height: 100%;
  background-color: rgb(var(--v-theme-primary));
}

.fallback-initials {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}

.person-name {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
}

.person-role {
  font-size: 1rem;
  font-weight: 500;
}

.section-label {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: nowrap;
  color: rgb(var(--v-theme-primary));
}

.body-text {
  font-size: 0.9rem;
  line-height: 1.7;
  white-space: pre-line;
}

.pub-card {
  border-radius: 10px !important;
}

.pub-title {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
}

.pub-authors {
  font-size: 0.825rem;
}

.venue-chip {
  font-size: 0.75rem !important;
  font-weight: 600 !important;
}

.link-btn {
  font-size: 0.8rem !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}
.pushed-text {
  margin-top: 20px; 
}
</style>