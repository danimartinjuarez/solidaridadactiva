<template>

<div id="carousel" >
  <h1 class="text-center text-success">PEQUEÑOS TRIUNFOS</h1>
  <figure id="spinner" >
    
    <img src="carrusel1.jpg" alt class="img-fluid w-100 h-100">
    
    <img src="carrusel2.jpg" alt class="img-fluid w-100 h-100">
    <img src="carrusel3.jpg" alt class="img-fluid w-100 h-100">
    <img src="carrusel4.webp" alt class="img-fluid w-100 h-100">
    <img src="carrusel5.jpg" alt class="img-fluid w-100 h-100">
    <img src="carrusel6.jpg" alt class="img-fluid w-100 h-100">
    <img src="carrusel7.webp" alt class="img-fluid w-100 h-100">
    <img src="carrusel8.jfif" alt class="img-fluid w-100 h-100">
  </figure>
</div>
<span style="float:left" class="ss-icon" @click="galleryspin('-')">&lt;</span>
<span style="float:right" class="ss-icon" @click="galleryspin('')">&gt;</span>
</template>
<script>
  export default{
    data: () => ({
    angle: 0,
  }),     

    

 methods: {
  
 
  
galleryspin(sign) { 
 
if (!sign) { this.angle = this.angle + 45; } else { this.angle = this.angle - 45; }

document.querySelector("#spinner").setAttribute("style","-webkit-transform: rotateY("+ this.angle +"deg); -moz-transform: rotateY("+ this.angle +"deg); transform: rotateY("+ this.angle +"deg);");
}
},
}
</script>
<style>
  div#carousel { 
  perspective: 1200px; 
  background: #F1FBEA; 
  padding-top: 1%; 
  font-size:0; 
  margin-bottom: 3rem; 
  overflow: hidden; 
}
figure#spinner { 
  transform-style: preserve-3d; 
  height: 300px; 
  transform-origin: 50% 50% -500px; 
  transition: 1s; 
} 
figure#spinner img { 
  width: 40%; max-width: 425px; 
  position: absolute; left: 30%;
  transform-origin: 50% 50% -500px;
  outline:1px solid transparent; 
}
figure#spinner img:nth-child(1) { transform:rotateY(0deg); 
}
figure#spinner img:nth-child(2) { transform: rotateY(-45deg); }
figure#spinner img:nth-child(3) { transform: rotateY(-90deg); }
figure#spinner img:nth-child(4) { transform: rotateY(-135deg); }
figure#spinner img:nth-child(5){ transform: rotateY(-180deg); }
figure#spinner img:nth-child(6){ transform: rotateY(-225deg); }
figure#spinner img:nth-child(7){ transform: rotateY(-270deg); }
figure#spinner img:nth-child(8){ transform: rotateY(-315deg); }
div#carousel ~ span { 
  color: rgb(3, 3, 3); 
  margin: 5%; 
  display: inline-block; 
  text-decoration: none; 
  font-size: 2rem; 
  transition: 0.6s color; 
  position: relative; 
  margin-top: -6rem; 
  border-bottom: none; 
  line-height: 0; }
div#carousel ~ span:hover { color: rgb(84, 224, 53); cursor: pointer; }
</style>