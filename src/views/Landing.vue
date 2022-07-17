<template>
  <div class="hero">
    <h1 class="mb-2">Hi, I'm</h1>
    <h1 class="mb-2">Mmontsheng Maoto</h1>
    <Summary />
    <social />
  </div>
</template>

<script>
import Summary from '@/components/Summary.vue';
import Social from '@/components/Social.vue';

export default {
  components: {
    Summary,
    Social,
  },
  name: 'landing',
};
</script>
