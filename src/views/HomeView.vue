<template>
    <div>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <Intro></Intro>
        <Video></Video>
        <HomeText></HomeText></div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import Intro from '../components/Intro.vue';
import Video from '../components/Video.vue';
import HomeText from '../components/HomeText.vue';
import Carousel from '../components/Carousel.vue';
export default {
    components: { NavBar, Intro, Video, HomeText, Carousel }
}
</script>
<style >
    
</style>