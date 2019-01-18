<template>
  <div id="app" class="container">
    <header>
      <h2>Welcome to our Hotel Review App - Vue</h2>
    </header>
    <div class="hotels-app">
      <hotelList></hotelList>
    </div>
  </div>
</template>


<script>
  import hotelList from './components/hotel-list'

  export default {
    name: 'App',
    components: {
      hotelList
    }
  }
</script>

<style lang="scss">
  // Reseter
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote {
    &:before, &:after {
      content: '';
      content: none;
    }
  }

  q {
    &:before, &:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,400i,600,600i,700,700i');
  body {
    font-family: 'Titillium Web', sans-serif;
  }

  h2 {
    text-align: center;
  }

  header {
    position: fixed;
    width: 100%;
    padding: 30px;
    text-align: center;
    background: #f1f1f1;
    left: 0;
    top: 0;
    border-bottom: 1px solid #333;
    z-index: 100;

    h2 {
      font-size: 34px;
    }
  }

  .hotels-app {
    padding-top: 100px;
  }

</style>
