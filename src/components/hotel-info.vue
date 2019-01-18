<template>
  <div class="hotelinfo-container">

    <hotelGallery :gallery ="hotelInfoGallery"></hotelGallery>
    <hotelReviews :reviews ="hotelInfoReviews"></hotelReviews>

  </div>
</template>

<script>
  import hotelGallery from './hotelinfo/hotel-gallery'
  import hotelReviews from './hotelinfo/hotel-reviews'

  export default {
    name: 'hotelInfo',
    components: {
      hotelGallery,
      hotelReviews
    },
    props:['hotelId'],

    data() {
      return {
        hotelInfo: [],
        hotelInfoGallery: [],
        hotelInfoReviews: []
      }
    },
    methods: {
      // fetching Hotel Data from the API
      getHotelinfo() {
        axios.get(`http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/` + this.hotelId )
          .then(res => {
            this.hotelInfoGallery = res.data.pictures;
            this.hotelInfoReviews = res.data.reviews;
          });
      }

    },
    mounted(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        this.getHotelinfo();

      })
    },
    created: function () {
      //calling to get the data
    },
    updated() {

    }
  }
</script>

<style>

</style>
