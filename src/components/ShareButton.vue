<template>
  <div class="share-button">
    <!-- Use a button element to trigger the share method when clicked -->
    <button @click="share">Share</button>
    <!-- Use v-if to show the share options only if the share flag is true -->
    <div class="share-options" v-if="shareFlag">
      <!-- Use v-for to loop through the share platforms array -->
      <div class="share-option" v-for="platform in sharePlatforms" :key="platform.name">
        <!-- Use a link element to open the share URL in a new window -->
        <a :href="platform.url" target="_blank">{{ platform.name }}</a>
      </div>
    </div>
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
  data() {
    return {
      // Initialize a boolean flag for the share options
      shareFlag: false,
      // Initialize an array of share platforms with their names and URLs
      sharePlatforms: [
        {
          name: "Facebook",
          url: `https://www.facebook.com/sharer/sharer.php?u=${this.post.image}`,
        },
        {
          name: "Twitter",
          url: `https://twitter.com/intent/tweet?url=${this.post.image}&text=${this.post.content}`,
        },
        {
          name: "LinkedIn",
          url: `https://www.linkedin.com/shareArticle?mini=true&url=${this.post.image}&title=${this.post.content}`,
        },
        {
          name: "Email",
          url: `mailto:?subject=${this.post.content}&body=${this.post.image}`,
        },
      ],
    };
  },
  methods: {
    // Define a method to toggle the share options
    share() {
      // Use the logical NOT operator to flip the share flag
      this.shareFlag = !this.shareFlag;
    },
  },
};
</script>

<style scoped>
.share-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.share-button button {
  border: none;
  background-color: #0095f6;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.share-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.share-option {
  margin: 5px;
}

.share-option a {
  text-decoration: none;
  color: white;
  background-color: gray;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
