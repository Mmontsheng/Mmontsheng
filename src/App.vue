<template>
  <router-view />
</template>

<script>
import cssVars from 'css-vars-ponyfill/dist/css-vars-ponyfill';

export default {
  name: 'App',
  mounted() {
    cssVars();
  },
};
</script>

<style src="@fortawesome/fontawesome-free/css/all.min.css">
</style>
