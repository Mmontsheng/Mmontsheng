<template>
  <div>
    <div class="mb-2">Skills</div>
    <icon
      :key="index"
      :name="icon.name"
      :title="icon.title"
      v-for="(icon, index) in skillsIcons"
    />
  </div>
</template>

<script>
export default {
  computed: {
    skillsIcons() {
      return [
        {
          name: 'devicon-java-plain-wordmark',
          title: 'Java',
        },
        {
          name: 'devicon-javascript-plain',
          title: 'JavaScript',
        },
        {
          name: 'devicon-vuejs-plain-wordmark',
          title: 'Vue',
        },
        {
          name: 'devicon-docker-plain-wordmark',
          title: 'Docker',
        },
        {
          name: 'devicon-nodejs-plain-wordmark',
          title: 'Node Js',
        },
        {
          name: 'devicon-postgresql-plain-wordmark',
          title: 'Postgre SQL',
        },
        {
          name: 'devicon-git-plain-wordmark',
          title: 'GIT',
        },
        {
          name: 'devicon-mysql-plain-wordmark',
          title: 'My SQL',
        },
        {
          name: 'devicon-bash-plain',
          title: 'Bash',
        },
      ];
    },
  },
  name: 'Skills',
};
</script>
<style scoped>
i {
  padding-right: 10px;
  font-size: 40px;
}
@media screen and (max-width: 500px) {
  i {
    font-size: 30px;
  }
}
@media screen and (max-width: 468px) {
  i {
    padding-right: 5px;
    font-size: 25px;
  }
}
</style>
