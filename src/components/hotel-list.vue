<template>
  <div class="container">
    <div class="hotel-container row" >

      <!-- start with binding data when the API calles, then looping on them to render the hotel Card  -->
      <div
        v-bind:class="{ active:  activeEl === index }"
        ref="hotelList"
        v-for="(hotel,index) of hotelInfo"
        class="hotels-card col"
        :key="index"
      >
        <h1 class="hotels-card-name">{{hotel.name}}</h1>
        <p class="hotels-card-review">{{hotel.totalReviews}}</p>
        <p class="hotels-card-score">{{hotel.totalScore}}<sup>/10</sup></p>
        <p class="hotels-card-price">{{hotel.pricePerNight * priceforNight}}<sup>$$</sup></p>

        <!-- Adding Sow more links >> firing function to pass the hotel ID -->
        <span class="hotels-card-more"
              v-bind:data-id="hotel.id"
              v-on:click="passId(hotel.id , index)"
        >View Details</span>

        <img class="hotels-card-img" v-bind:src="hotel.photo" v-bind:alt="hotel.name">
      </div>
    </div>

    <div class="row hotels-night">
      <!-- Adding Input to change the Price per night for every hotel, this input only accepts Numbers -->
      <label for="">nights number </label>
      <input min="1" max="99" oninput="validity.valid||(value='1');" @change="updateNights" @keyup="updateNights" class="hotels-night" type="number" value="1">

    </div>
    <div class="row">
      <!-- calling a child component that only passes the Hotel ID to Gallery and Reviews -->
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

        // Declaring some initial values to work with them on the app.
        hotelInfo: [],
        hotelId:'',
        renderInfo : false,
        activeEl: -1, /// to add class active in our Hotel Card
        priceforNight:1
      }
    },
    methods: {

      // fetching all Hotels Data from the API
      getHotelinfo() {
        axios.get('http://my-json-server.typicode.com/fly365com/code-challenge/hotels')
          .then(res => (this.hotelInfo = res.data));
      },

      // passing ID to the sub components (reviews & Gallery)
      passId(id,index) {
        this.hotelId = id;
        this.renderInfo = true;
        this.activeEl = index;
      },

      // Updating prince per night for every hotel
      updateNights({target}){
        this.priceforNight = target.value;
      }
    },
    created: function () {
      //calling to get the data when this component is created
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

      &:hover,&.active {
        background: #f1f8ff;
        border-color: #5672ff;
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

    &-night {
      label {
        font-size: 22px;
        margin-right: 20px;
        padding-top: 10px;
      }
      input {
      width: 250px;
      height: 40px;
      border: 1px solid #333;
      font-size: 22px;
      margin-bottom: 20px;
      }
    }
  }
</style>
