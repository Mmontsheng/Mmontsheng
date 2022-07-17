<template>
  <div>
    <app-header class="fixed-top container-fluid "/>
    <router-view
      id="main"
      class="container-fluid"
    />
    <app-footer
      class="container-fluid footer-height  bg-primary fixed-bottom navbar-expand"
    />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppFooter,
    AppHeader,
  },
  name: 'MainLayout',
};
</script>
