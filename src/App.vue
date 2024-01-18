<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <div class="container">
        <h1>My Social App</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/user/1">My Profile</router-link> <!-- Replace '1' with the user ID -->
        </nav>
      </div>
    </header>
    
    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2024 My Social App</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
}

header {
  background-color: #405de6;
  color: white;
  padding: 10px 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
}

nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
}

main {
  margin: 20px 0;
}

footer {
  background-color: #f0f0f0;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
