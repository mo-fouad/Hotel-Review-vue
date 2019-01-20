<template>
  <div class="">

    <div class="gallery-img">
      <!-- Adding Hotel Gallery Big Image -->
      <img :src="imgUrl" alt="">
    </div>

    <div class="gallery-bar">

      <!-- check if the number is the thumbs more than 8 ( width of the bar ) then create the Controles and Bar -->
      <div v-if="gallery.length > 8" class="left fas" @click="goLeft()"></div>

      <div ref="longBar" id="longBar" class="gallery-bar-long" :style="cehckWidth()">
        <!-- Looping to get the thumbs in the bar  -->
        <img
          v-for="(img, index) of gallery"
          :src="img.thumbnail"
          :key="index"
          @click="changeImg(index)"
          alt="">
      </div>
      <!-- check if the number is the thumbs more than 8 ( width of the bar ) then create the Controles and Bar -->
      <div v-if="gallery.length > 8" class="right fas"  v-bind:class="{ active: arrowClass=='noRight' }" @click="goRight()"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hotelGallery',
    components: {},
    props: ['gallery'],
    data() {
      return {
        variance: 0,  // Width of step .. depends on the width of the image
        difference: 0, // difference between the bar width & container.
        hotelGalleryImages: [],
        imgUrl: this.gallery[0].photo,
        arrowClass:''
      }
    },
    watch: {
      '$props': {
        handler: function () {
          this.changeImg(0);
        },
        deep: true
      }
    },
    methods: {

      changeImg(id) { // adding URL to the Big image in the galler
        this.imgUrl = this.gallery[id].photo;
      },

      // Check if the pixs in the data more than 8 .. to render the long bar with controls.
      cehckWidth() {
        if (this.gallery.length < 8) {
          return ""
        } else {
          return ("width :" + (this.gallery.length * 120) + "px")
        }
      },

      //  on click to move the bar to the left
      goLeft() {
        if ( this.difference > 0) {
          this.variance -= 117;
          this.$refs["longBar"].style.left = this.variance + "px";
          this.difference -= 117;
        }
        else {
          this.arrowClass='noLefr'; // todo: add inactive class to the controller when inactive
        }
      },

      //  on click to move the bar to the Right
      goRight() {
        if (parseInt(this.$refs["longBar"].style.left ) < 0){
          this.variance += 117;
          this.$refs["longBar"].style.left = this.variance + "px";
          this.difference += 117;
        }
        else {
          this.arrowClass='noRight'; // todo: add inactive class to the controller when inactive
        }
      }
    },
    mounted: function () {
      // when mounted
      this.difference = parseInt(this.$refs["longBar"].style.width) - 1110;  // set the initial for the controllers and log bar
      this.$refs["longBar"].style.left = 0 + 'px';
    },
    created: function () {
    }
  }
</script>

<style lang="scss">
  .gallery {
    &-img {
      border-radius: 25px;
      overflow: hidden;
      width: 600px;
      height: 600px;
      margin: 0 auto;
      margin-bottom: 15px;
      border: 2px solid #333;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 48%;
        top: 40%;
        width: 40px;
        height: 40px;
        border-style: solid;
        border-color: black;
        border-top-color: transparent;
        border-width: 4px;
        border-radius: 50%;
        animation: spin .8s linear infinite;
        z-index: -1;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    &-bar {
      padding: 10px 0px;
      border-bottom: 1px solid #333;
      margin-bottom: 10px;
      position: relative;
      height: 130px;
      width: 100%;
      overflow: hidden;

      .left, .right {
        position: absolute;
        font-family: Font Awesome\ 5 Free;
        height: 100%;
        background: #fff;
        padding: 38px 5px;
        z-index: 10;
        cursor: pointer;

        &:before {
          font-size: 32px;
        }
      }

      .left {
        left: 0;

        &:before {
          content: "\f104";
        }
      }

      .right {
        right: 0;

        &:before {
          content: "\f105";
        }
      }

      &-long {
        position: absolute;
        transition: all 200ms ease-out;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;
        z-index: 1
      ;
        img {
          cursor: pointer;
          transition: box-shadow 200ms ease-out;
          margin-left: 17px;

          &:first-child {
            margin-left: 10px;
          }

          &:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
          }
        }
      }
    }

  }


  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
