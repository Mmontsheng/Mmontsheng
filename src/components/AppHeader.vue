<template>
  <b-navbar
    class="border-bottom"
    type="dark"
    toggleable="sm"
    variant="primary"
  >
    <b-navbar-brand
      to="/"
    >
      <h3 class="text-secondary">
        {{ title }}
      </h3>
    </b-navbar-brand>

    <b-navbar-toggle
      class="bg-primary"
      target="nav-collapse"
    />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          :active="isLinkActive(link.to)"
          :to="link.to"
          :key="index"
          :target="_black"
          v-for="(link, index) in links"
        >
          {{ link.text }}
        </b-nav-item>
        <b-nav-item
          target="_black"
          href="https://store.mmontshengmaoto.dev/"
        >
          Store
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BCollapse,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavItem,
  BNavbarNav,
} from 'bootstrap-vue';

export default {
  components: {
    BCollapse,
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavItem,
    BNavbarNav,
  },
  computed: {
    links() {
      return [
        {
          to: '/',
          text: 'Home',
        },
        {
          to: '/blog',
          text: 'Blog',
        },
      ];
    },
    title: () => '< mm />',
  },
  methods: {
    isLinkActive(to) {
      return to === this.$route.path;
    },
  },
  name: 'AppHeader',
};
</script>

<style scoped>

a {
  color: #fff !important;
}
.nav-link.active {
  color: var(--secondary) !important;
}
</style>
