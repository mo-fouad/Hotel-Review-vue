<template>
  <div class="hotelinfo-container">

    <!-- Celebrating Gallery and Reviews, just to organize the flow of the App,,  -->
    <hotelGallery v-if="hotelInfoGallery.length > 0" :gallery="hotelInfoGallery"></hotelGallery>
    <hotelReviews v-if="hotelInfoReviews.length > 0" :reviews="hotelInfoReviews"></hotelReviews>

  </div>
</template>

<script>
  import hotelGallery from './hotelinfo/hotel-gallery'
  import hotelReviews from './hotelinfo/hotel-reviews'

  export default {
    name: 'hotelInfo',
    components: {
      // Getting the child components
      hotelGallery,
      hotelReviews
    },
    props: ['hotelId'], // Getting Hotel ID from Props to be used in this component
    watch: { // Watching for any change to HotelId in Props to be updated and passed in to the child components
      '$props': {
         handler:function (val, oldVal) {
          this.getHotelinfo(val.hotelId) // Updating Hotel ID
        },
        deep: true
      }
    },
    data() {
      return {
        hotelInfo: [],
        hotelInfoGallery: [],
        hotelInfoReviews: []
      }
    },
    methods: {
      // fetching Hotel Data from the API based on it's ID
      getHotelinfo(id) {
        axios.get(`http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/` + id)
          .then(res => {
            this.hotelInfoGallery = res.data.pictures; //  passing the Array of the Pictures
            this.hotelInfoReviews = res.data.reviews; // Passing The Array of Reviews
          });
      }

    },
    mounted() {
      // calling to get the ID
      this.getHotelinfo(this.hotelId);
    },
    created: function () {
      //calling to get the data
    },
    updated:function () {

    }
  }
</script>

<style>

</style>
