<template>
    <div class="image"  :style="cssprops">
        <p style="border: 1px solid grey"> {{imagename}} </p>
        <a :href="imageurl"  :alt="imagename" target="_blank"><img :src="imageurl" :id="imageurl"></a>
    </div>
</template>

<script>
export default {
    name:"Image",
    props: {
        imageurl: String,
        imagename: String,
        imageheight: Number
    },
    computed: {
        cssprops(){
            return{
                '--image-height': this.imageheight + "vw"
            }
        }
    }
  }
</script>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
}

.gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
}
p {
    font-size: 1.25vmin;
    text-align: center;
}
img {
    transition: transform .1s; /* Animation */
    height: var(--image-height);
}
img:hover {
    transform: scale(1.05);
}
</style>