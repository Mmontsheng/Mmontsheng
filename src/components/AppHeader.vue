<template>
  <header>
    <div class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li
          :class="classes(link.to)"
          :key="index"
          v-for="(link, index) in links"
        >
          <router-link class="nav-link" :to="link.to">
            <icon :name="link.fa" />
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    links() {
      return [
        {
          fa: 'fa fa-home',
          to: '/',
          text: 'Home',
        },
        {
          fa: 'fa fa-address-card',
          to: '/about',
          text: 'About Me',
        },
      ];
    },
  },
  methods: {
    classes(to) {
      const classes = ['nav-item'];
      if (to === this.$route.path) {
        classes.push('current');
      }
      return classes;
    },
  },
  name: 'AppHeader',
};
</script>

<style></style>
