<template>
  <div class="container">
    <div class="hotel-container row">
      <div v-for="(hotel,index) of hotelInfo" class="hotels-card col" :key="index">
        <h1 class="hotels-card-name">{{hotel.name}}</h1>
        <p class="hotels-card-review">{{hotel.totalReviews}}</p>
        <p class="hotels-card-score">{{hotel.totalScore}}<sup>/10</sup></p>
        <p class="hotels-card-price">{{hotel.pricePerNight}}<sup>/$$</sup></p>

        <span class="hotels-card-more"
              v-bind:data-id="hotel.id"
              v-on:click="passId(hotel.id)"
        >View Details</span>

        <img class="hotels-card-img" v-bind:src="hotel.photo" v-bind:alt="hotel.name">
      </div>
    </div>
    <div class="row">
      <hotelInfo v-if="renderInfo" :hotelId="hotelId"></hotelInfo>
    </div>
  </div>
</template>

<script>
  import hotelInfo from './hotel-info'

  export default {
    name: 'hotelList',
    components: {
      hotelInfo
    },
    data() {
      return {
        hotelInfo: [],
        hotelId:'',
        renderInfo : false
      }
    },
    methods: {
      // fetching Hotel Data from the API
      getHotelinfo() {
        axios.get('http://my-json-server.typicode.com/fly365com/code-challenge/hotels')
          .then(res => (this.hotelInfo = res.data));
      },
      passId(id) {

        this.hotelId = id;
        this.renderInfo = true;
      }
    },
    created: function () {
      //calling to get the data
      this.getHotelinfo()
    },

  }
</script>

<style lang="scss">
  .hotels {
    &-container {
      padding: 20px 0;
    }

    &-card {
      height: 102px;
      position: relative;
      margin: 15px;
      padding-left: 120px;
      border: 1px solid #000;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      transition: all 200ms ease-out;

      $c: &;

      &:hover {
        background: #f1f8ff;

        #{$c}-img {
          transition: all 200ms ease-out;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
        }
      }

      &-img {
        position: absolute;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 25px;
        top: 0;
        left: 0;
        transition: all 200ms ease-out;
      }

      &-name {
        margin: 5px 0;
        font-size: 22px;
        font-weight: bold;
        color: #223225;
      }


      &-review, &-score, &-price {
        margin: 5px 0;

        &:before {
          font-family: "Font Awesome 5 Free";
          margin-right: 10px;
          color: #ff0000;
        }

        sup {
          font-size: 11px;
        }
      }

      &-review {
        &:before {
          content: '\f4ad';
        }
      }

      &-score {
        &:before {
          content: '\f004';
        }

      }

      &-price {
        &:before {
          content: '\f3d1';
        }
      }

      &-more {
        position: absolute;
        cursor: pointer;
        bottom: 8px;
        right: 15px;
        color: #111111;
      }
    }
  }
</style>
