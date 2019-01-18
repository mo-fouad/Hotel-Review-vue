<template>
  <div class="">
    {{reviews}}
  </div>
</template>

<script>
  export default {
    name: 'hotelReviews',
    components: {
    },
    props:['reviews'],
    data() {
      return {
      }
    },
    methods: {
      // fetching Hotel-Reviews Data from the API

    },
    created: function () {
      //calling to get the data
    }
  }
</script>

<style>

</style>
