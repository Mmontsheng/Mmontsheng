<template>
  <i
    aria-hidden="true"
    :class="name"
    data-placement="top"
    data-toggle="tooltip"
    :title="title"/>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      required: true,
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
  },
};
</script>
