<template>
    <div>
        <div class="Description">
            
            <h1 class="description-header">Artist based in the Black Forest.</h1>
            
            <h4 class="description-subheader">
                Sarah Giesler is an young artist based in the Black Forest in Germany.<br/>
                Inspired by various things, she creates her paintings.<br/>
                This page gives you a short impression of her art.
            </h4>

        </div>
        
        <div class="image-gallery">
            <div class="image hoverwrap" v-for="image in images" :key="image">
                <!-- <img :src="image.src" style="height: 50vh;" /> -->
                <img :src="image.src" style="width: 100%;" />
                <!-- <div class="hovercap">Test</div> -->
            </div>
        </div>

        <transition name="fade">
            <div v-show="dialogopen" class="preview-dialog">
                <span class="preview-close" @click="onClosePreivew()">&times;</span>
                <img :src="dialogsrc" class="preview-image"/>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    data:() => ({
        images: [
            // { src: require('@/assets/1.jpg') },
            { src: require('@/assets/2.jpg') },
            { src: require('@/assets/3.jpg') },
            { src: require('@/assets/4.jpg') },
            { src: require('@/assets/5.jpg') },
            { src: require('@/assets/6.jpg') },
            // { src: require('@/assets/7.jpg') },
            { src: require('@/assets/8.jpg') },
            { src: require('@/assets/9.jpg') },
            { src: require('@/assets/10.jpg') },
            { src: require('@/assets/11.jpg') },
            { src: require('@/assets/12.jpg') },
            { src: require('@/assets/13.jpg') },
        ],

        dialogopen: false,
        dialogsrc: ''
    }),

    methods: {
        onOpenPreview(image) {
            this.dialogopen = true
            this.dialogsrc = image.src
        },

        onClosePreivew() {
            this.dialogopen = false;
        }
    }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');

.image-gallery {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

.image {
    /* margin: 1vh; */
    margin-right: 3vh;
    margin-bottom: 3vh;
    padding: 0;
    /* height: 50vh; */
    /* background-color: green; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* cursor: pointer; */
    pointer-events: none;
}

.hoverwrap img { width: 100%; }

.hoverwrap {
    position: relative;
}

.hovercap {
    position: absolute; bottom: 0; left: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 5vh;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: none;
    opacity: 0;
    transition: opacity 0.5s;
}
.hoverwrap:hover .hovercap {
    visibility: visible; opacity: 1;
}

.Description {
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 10vh;
}
.description-header {
    color: #2d2d2d;
    font-family: Raleway, sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: .01em;
    font-size: 60px;
    margin-top: 0;
}

.description-subheader {
    color: #4f4e4e;
    font-family: Raleway, sans-serif;
    font-weight: 400;
    line-height: 1.8em;
    letter-spacing: .02em;
    fill: #4f4e4e;
    font-size: 18px;
}

.preview-dialog {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    /* background-color: rgb(0,0,0); */
    /* background-color: rgb(0,0,0,0.9); */
    backdrop-filter: blur(30px);
}

.preview-image {
    margin: auto;
    display: block;
    max-height: 90vh;
}

.preview-close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: black;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
}
</style>