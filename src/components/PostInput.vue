<template>
  <div class="post-input">
    <!-- Use v-model to bind the input value to the newComment computed property -->
    <input type="text" v-model="newComment.text" placeholder="Add a comment..." />
    <!-- Use v-on:click or @click to trigger the submit method when the button is clicked -->
    <button @click="submit">Post</button>
  </div>
</template>

<script>
export default {
  // Use props to receive the post data from the parent component
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Define a computed property to create a new comment object for each post
    newComment() {
      return {
        // Use a random name and avatar for the user
        user: {
          name: `User ${Math.floor(Math.random() * 10) + 1}`,
          avatar: `https://randomuser.me/api/portraits/thumb/men/${Math.floor(
            Math.random() * 10
          ) + 1}.jpg`,
        },
        // Use the post id and the length of the comments array to generate a unique comment id
        id: `${this.post.id}-${this.post.comments.length + 1}`,
        // Initialize an empty string for the comment text
        text: "",
      };
    },
  },
  methods: {
    // Define a method to submit the comment
    submit() {
      // Use v-if to check if the comment text is not empty
      if (this.newComment.text) {
        // Use $emit to emit a custom event with the post and comment data as arguments
        this.$emit("submit", this.post, this.newComment);
        // Clear the comment text
        this.newComment.text = "";
      }
    },
  },
};
</script>

<style scoped>
.post-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.post-input input {
  flex: 1;
  border: none;
  outline: none;
}

.post-input button {
  margin-left: 10px;
  border: none;
  background-color: #0095f6;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
