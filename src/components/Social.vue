<template>
  <ul class="social pl-0">
    <li
      class="pl-4"
      :key="index"
      v-for="(link, index) in links"
    >
      <a
        :href="link.href"
        target="_blank">
        <icon :name="link.fa" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    links() {
      return [
        {
          fa: 'fab fa-github',
          href: 'https://github.com/Mmontsheng',
        },
        {
          fa: 'fab fa-linkedin-in',
          href: 'https://www.linkedin.com/in/mmontsheng-maoto-77204571/',
        },
      ];
    },
  },
  name: 'Social',
};
</script>

<style scoped>
ul {
  list-style: none;
}
ul li {
  display: inline;
}
ul li a {
  text-decoration: none;
}
a {
  color: #fff !important;
}
ul li a i {
    font-size: 20px;
    line-height: 25px;
    margin: 0 1px;
}
</style>
