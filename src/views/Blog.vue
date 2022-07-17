<template>
  <div class="hero">
    <h1 class="mb-3">My blog posts</h1>
    <slot v-if="isLoading">
      <loading-skeleton
        :key="n"
        v-for="n in 5"
      />
    </slot>
    <slot
      v-if="!isLoading && !!posts.length"
    >
      <post
        @read-more="readMore(post.url)"
        class="mb-4 cursor"
        :date="post.readable_publish_date"
        :description="post.description"
        :key="post.id"
        :title="post.title"
        v-for="post in posts"
      />
    </slot>
    <no-post
      v-else
    />
  </div>
</template>

<script>
import splitbee from '@splitbee/web';

import axios from 'axios';

import Post from '@/components/blog/Post.vue';
import NoPost from '@/components/blog/NoPost.vue';
import LoadingSkeleton from '@/components/blog/LoadingSkeleton.vue';

const BASE_URL = 'https://dev.to/api/articles?username=mmontsheng';

export default {

  components: {
    LoadingSkeleton,
    NoPost,
    Post,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    async loadPosts() {
      try {
        this.isLoading = true;
        const { data } = await axios.get(BASE_URL);
        this.posts = data;
      } catch (error) {
        let message;
        if (error.response) {
          message = error.response.data.message;
        }
        message = message || 'An error occured while loading posts';
        splitbee.track('BLOG_POST_LOAD_FAILER', {
          error,
          message,
        });
        console.log(message);
      } finally {
        this.isLoading = false;
      }
    },
    readMore(url) {
      splitbee.track('BLOG_POST_READ', {
        url,
      });
      window.open(url, '_blank');
    },
  },
  mounted() {
    this.loadPosts();
  },
  name: 'Blog',
};
</script>

<style scoped>
small {
  font-size: 10px !important;
}
</style>
