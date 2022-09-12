<template>
    <div class="header">
        <Logo></Logo>
        <p>
            <span>SOLIDARIDAD ACTIVA</span>
        </p>
        <Menu></Menu>
    </div>
</template>
<script setup>
import Menu from './menu.vue';
import Logo from './logo.vue';


</script>
<style>
.header {
    display: flex;
    
}

p {
	letter-spacing: .5em;
	border: 4px double rgba(255,255,255,.25);
	border-width: 4px 0;
	padding: 1.5em 0em;
	top: 4%;
	width: 92vw;
	margin: 0 0 0 0em;
    text-align: center;
}
  
  span {

  	font:  4em "Oswald", sans-serif;
  	letter-spacing: 0;
  	padding: .25em 0 .325em;
	  display: block;
	  margin: 0 auto;
  	text-shadow: 0 0 80px rgba(255,255,255,.5);

/* Clip Background Image */

	  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
	  -webkit-background-clip: text;
	  background-clip: text;

/* Animate Background Image */

	  -webkit-text-fill-color: transparent;
	  -webkit-animation: aitf 80s linear infinite;

/* Activate hardware acceleration for smoother animations */

	  -webkit-transform: translate3d(0,0,0);
	  -webkit-backface-visibility: hidden;

  }


/* Animate Background Image */

@-webkit-keyframes aitf {
	0% { background-position: 0% 50%; }
	100% { background-position: 100% 50%; }
}
</style>