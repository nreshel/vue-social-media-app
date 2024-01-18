<template>
  <div class="post">
    <!-- Display the user info -->
    <div class="user-info">
      <!-- Add a class name to the user image -->
      <img :src="post.user.avatar" class="user-image" />
      <span>{{ post.user.name }}</span>
      <span>{{ post.timestamp }}</span>
    </div>
    <!-- Display the post image -->
    <div class="post-image">
      <img :src="post.image" />
    </div>
    <!-- Display the post content -->
    <div class="post-content">
      <p>{{ post.content }}</p>
      <!-- Use v-if to show the comments only if they exist -->
      <div class="comments" v-if="post.comments">
        <!-- Use v-for to loop through the comments array -->
        <div class="comment" v-for="comment in post.comments" :key="comment.id">
          <!-- Add a class name to the comment image -->
          <img :src="comment.user.avatar" class="comment-image" />
          <span>{{ comment.user.name }}</span>
          <span>{{ comment.text }}</span>
        </div>
      </div>
    </div>
    <!-- Add a post-input component to allow the user to comment on the post -->
    <post-input :post="post" @submit="addComment" />
    <!-- Add a share-button component to allow the user to share the post on other platforms -->
    <share-button :post="post" />
  </div>
</template>

<script>
import axios from "axios";
// Change the relative path to ./components/PostInput.vue
import PostInput from "./PostInput.vue"; // Import the PostInput component
// Change the relative path to ./components/ShareButton.vue
import ShareButton from "./ShareButton.vue"; // Import the ShareButton component

export default {
  // Use props to receive the post data from the parent component
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    PostInput, // Register the PostInput component
    ShareButton, // Register the ShareButton component
  },
  methods: {
    // Define a method to add a comment to a post
    addComment(post, comment) {
      // Use a try-catch block to handle errors
      try {
        // Make a POST request to the api endpoint with the comment data
        axios.post("https://jsonplaceholder.typicode.com/comments", comment);
        // Push the comment to the post's comments array
        post.comments.push(comment);
        // Emit an input event to update the post data in the parent component
        this.$emit("input", post);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.post {
  border: 1px solid #ddd;
  margin: 10px 0;
  background-color: white;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* Add some style to the user image */
.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info span {
  font-weight: bold;
}

.user-info span:last-child {
  margin-left: auto;
  font-weight: normal;
  color: gray;
}

.post-image {
  width: 100%;
  height: auto;
}

.post-content {
  padding: 10px;
}

.comments {
  margin-top: 10px;
  border-top: 1px solid #ddd;
}

.comment {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

/* Add some style to the comment image */
.comment-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment span {
  font-weight: bold;
}

.comment span:last-child {
  font-weight: normal;
}
</style>
