<template>
  <div>
    <app-header />
    <social id="social"/>
    <div class="container-fluid" id="main">

      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Social from '@/components/Social.vue';

export default {
  components: {
    AppHeader,
    Social,
  },
  name: 'MainLayout',
};
</script>
<style  scoped>
  #social {
    position: absolute;
    right: 15px;
    top: 15px;
  }
</style>
