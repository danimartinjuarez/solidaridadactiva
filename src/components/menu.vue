<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
</template>
<script setup>
</script>
<style lang="css" scoped>
    nav {
  width: 20%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  

  

  
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    float: right;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>