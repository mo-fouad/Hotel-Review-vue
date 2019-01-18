<template>
  <div class="">
    <div class="big-images"  >
      <!--<img :src="gallery[0].photo" alt="">-->
    </div>

    <div class="gallery-bar">
      <div class="gallery-bar-long">
        <img v-for="img of gallery" :src="img.thumbnail" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hotelGallery',
    components: {
    },
    props:['gallery'],
    data() {
      return {
        hotelGalleryImages:[]
      }
    },
    methods: {

    },
    mounted: function() {


    },
    created: function (  ) {

    }
  }
</script>

<style>

</style>
