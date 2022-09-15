<template>
 
      <div class="dropdown show nav " >
        <a class="dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">MENU
          <span class="p-0 m-0">--</span>
                    <span class="p-0 m-0">--</span>
          <span class="p-0 m-0">--</span>
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuLink">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/Nosotros">Nosotros</RouterLink>
          <RouterLink to="/Normas">Normas</RouterLink>
          
        </div>
      </div>
</template>
<script setup>
</script>
<style lang="css" scoped>
.nav {
  width: 5%;
  margin-top: 2rem;
}

a.router-link-exact-active {
  color: var(--color-text);
}

a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

a:first-of-type {
  border: 0;
}
span{
  height: 10%;
  line-height: 0%;
  font-weight: bold;

}
</style>