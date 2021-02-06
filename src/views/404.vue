<template>
  <div class="container-fluid">
    <div class="text-center justify-content-center align-self-center">
          <img width="400" height="400" class="img-fluid" src="@/assets/404.svg" alt="" />
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

<style scoped>
  .btn {
    color: #fff;
    border:  1px solid #fff;
    transition: all 0.5s ease-out;
  }

  .btn:hover {
    background-color: #fff;
    color: #000;
  }
</style>
