<template>
  <div class="hero">
    <h1 class="mb-2">Hi, I'm</h1>
    <h1 class="mb-2">Mmontsheng Maoto</h1>
    <Summary />
    <skills id="skills"/>
  </div>
</template>

<script>
import Skills from '@/components/Skills.vue';
import Summary from '@/components/Summary.vue';

export default {
  components: {
    Skills,
    Summary,
  },
  name: 'landing',
};
</script>

<style scoped>
#skills {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: #000;
  width: 100%;
}
</style>
