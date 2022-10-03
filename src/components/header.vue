<template>
    <div class="header p-3">
        <Logo></Logo>
        <p class="title">
PEQUEÑOS GESTOS        </p>
    </div>
</template>
<script>
import Logo from './logo.vue';
export default {
    components: { Logo }
}
</script>
<style>
    .header {
    display: flex;
	height: 20vh;
    max-width: 100vw;
    min-width: 100vw;
    
}
.title{
   font-family: 'Ubuntu', sans-serif;
   font-size: 200%;
   letter-spacing: 1em;
	border: 2px double rgba(2, 2, 2, 0.829);
	border-width: 5px 0;
	padding: 1em 0em;
	top: 2%;
	width: 100%;
	margin: 0 0 0 0em;
    text-align: center;
    max-width: 100%;
}
</style>