<template>
  <b-card
    bg-variant="transparent"
    body-class="border-all"
  >
    <b-skeleton
      animation="fade"
      width="35%"
    />
    <b-skeleton
      animation="fade"
      width="10%"
    />
    <b-skeleton
      animation="fade"
      width="85%"
      variant="white"
    />
  </b-card>
</template>

<script>

import {
  BCard,
  BSkeleton,
} from 'bootstrap-vue';

export default {
  components: {
    BCard,
    BSkeleton,
  },
  name: 'LoadingSkeleton',
};
</script>

<style scoped>
.b-skeleton {
  background-color: rgb(30, 32, 41)!important;
}
</style>
