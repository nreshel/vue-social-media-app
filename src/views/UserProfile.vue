<!-- UserProfile.vue -->
<template>
  <div class="user-profile">
    <div class="profile-header">
      <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture">
      <div class="user-info">
        <h2>{{ user.userName }}</h2>
        <p>{{ user.bio }}</p>
      </div>
    </div>
    
    <div class="post-grid">
      <div v-for="post in userPosts" :key="post.id" class="post">
        <img :src="post.imageUrl" alt="Post Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      user: {
        id: 1,
        userName: 'User1',
        profilePicture: 'https://placekitten.com/150/150',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      userPosts: [
        { id: 1, imageUrl: 'https://placekitten.com/502/502' },
        { id: 2, imageUrl: 'https://placekitten.com/503/503' },
        { id: 3, imageUrl: 'https://placekitten.com/504/504' },
        // Add more posts as needed
      ],
    };
  },
};
</script>

<style scoped>
.user-profile {
  max-width: 800px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.profile-picture {
  border-radius: 50%;
  margin-right: 20px;
}

.user-info {
  flex: 1;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 20px;
}

.post {
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
}

.post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
