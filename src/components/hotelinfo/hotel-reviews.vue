<template>
  <div class="">

    <!-- looping to add Reviews in the page -->
    <div v-if="currReviews" class="reviews-item" v-for="(review,index) of currReviews" :key="index">
      <span>{{review.score}}</span>
      <p>{{review.review}}</p>
    </div>

    <!-- Adding pager -->
    <div class="paging-container" v-if="reviews.length > 5">
      <span v-bind:class="{ active:  activeEl === index }"
            class="paging-btn"
            @click="changePage(index)"
            v-for="index of pages">
        {{index}}
      </span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'hotelReviews',
    components: {},
    props: ['reviews'], // getting reviews from props
    data() {
      return {
        pages: 0,
        currReviews: [],
        activeEl:1,
      }
    },
    watch: {
      // watching data to be changed to re build the reviews
      '$props': {
        handler: function (val, oldVal) {
          this.buildPager(val.reviews);
          this.changePage(1);
        },
        deep: true
      }
    },
    methods: {
      // getting numbers of reviews and davide it by 5 to make 5 reviews / page
      buildPager(reviews) {
        this.pages = Math.ceil(reviews.length / 5);
      },
      changePage(index) { // change the current reviews, and change the page ad well
        let end = index * 5;
        let start = end - 5;
        this.currReviews = this.reviews.slice( start, end);
        this.activeEl= index ;
      },
    },
    mounted: function () {
      // resenting the reviews and pages to 1
      this.buildPager(this.reviews);
      this.changePage(1);

    },
    created: function () {
      //calling to get the data
    }
  }
</script>

<style lang="scss">

  .reviews {
    &-item {
      position: relative;
      padding: 10px;
      min-height: 61px;
      padding-left: 100px;
      border-bottom: 1px solid #eee;

      span {
        position: absolute;
        font-size: 32px;
        left: 10px;
        top: 10px;
        text-align: center;
        display: block;
        width: 76px;
        border-left: 4px solid #c5c9cd;
      }

      p {
        font-size: 18px;
        line-height: 20px;
      }
    }
  }

  .paging {
    &-container {
      padding: 20px;
      text-align: center;
    }

    &-btn {
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 10px;
      background: #eeeeee;
      border: 1px solid #333;
      margin: 0 10px;
      &.active {
        background: #abadbd;
      }
    }
  }
</style>
