<template>
  <div class="container-fluid">
    <div class="text-center justify-content-center align-self-center">
          <img width="300" height="300" class="img-fluid" src="@/assets/404.svg" alt="" />
      <h4 class="mt-5">This page is outside of the Universe</h4>
    <div class="d-flex justify-content-center mt-2">
      <button
        @click="toHome"
        class="btn btn-primary"
      >
        Take Me Home
      </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/');
    },
  },
  name: 'PageNotFound',
};
</script>
