<template>
  <div class="home">
    <!-- Use v-for to loop through the posts array and pass each post as a prop to the Post component -->
    <FeedPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import axios from "axios"; // Import axios to make HTTP requests
import FeedPost from "../components/FeedPost.vue"; // Import the Post component

export default {
  components: {
    FeedPost, // Register the Post component
  },
  data() {
    return {
      posts: [], // Initialize an empty array for the posts
    };
  },
  mounted() {
    // Fetch the posts from the api when the component is mounted
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      // Use a try-catch block to handle errors
      try {
        // Make a GET request to the api endpoint
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // Assign the response data to the posts array
        this.posts = response.data;
        // Loop through the posts array and add some extra properties
        for (let post of this.posts) {
          // Add a random image url
          post.image = `https://picsum.photos/id/${post.id}/600/600`;
          // Add a random user name and avatar
          post.user = {
            name: `User ${post.userId}`,
            avatar: `https://randomuser.me/api/portraits/thumb/men/${post.userId}.jpg`,
          };
          // Add a random timestamp
          post.timestamp = `${Math.floor(Math.random() * 24) + 1} hours ago`;
          // Add some random comments
          post.comments = [];
          const commentCount = Math.floor(Math.random() * 5);
          for (let i = 0; i < commentCount; i++) {
            post.comments.push({
              id: i + 1,
              user: {
                name: `User ${i + 11}`,
                avatar: `https://randomuser.me/api/portraits/thumb/women/${i + 11}.jpg`,
              },
              text: `Comment ${i + 1} text`,
            });
          }
        }
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 600px;
  margin: 0 auto;
}
</style>
