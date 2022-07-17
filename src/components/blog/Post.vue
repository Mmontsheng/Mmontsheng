<template>
  <b-card
    class="post-card"
    @click="$emit('read-more')"
    bg-variant="transparent"
    body-class="border-all"
  >
    <b-card-title class="mb-0 h6 post-title">
      {{ title }}
    </b-card-title>
      <small class="text-muted">
        Posted on {{ date}}
      </small>
    <b-card-text class="mt-2">
      {{ description }}
    </b-card-text>
  </b-card>
</template>

<script>

import {
  BCard,
  BCardText,
  BCardTitle,
} from 'bootstrap-vue';

export default {
  components: {
    BCard,
    BCardText,
    BCardTitle,
  },
  name: 'Post',
  props: {
    date: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style>
  .post-card:hover  .post-title {
    transition: all ease-in-out 0.35s;
    color: var(--secondary) !important;
  }
</style>
