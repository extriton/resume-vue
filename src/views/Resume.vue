<template>
  <div id="wrappage">
    <div class="container" :style="{ marginTop: containerMarginTop }">
      <TopBlock />
      <CenterBlock />
      <BottomBlock />
    </div>
  </div>
</template>

<script>
import TopBlock from '@/components/TopBlock.vue'
import CenterBlock from '@/components/CenterBlock.vue'
import BottomBlock from '@/components/BottomBlock.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Resume',
  components: {
    TopBlock,
    CenterBlock,
    BottomBlock
  },
  computed: {
    containerMarginTop () {
      let marginTop = 0

      if (!this.isOpenedCenterBlock) 
        marginTop = '-100px'
      else
        if (!this.isShowMain) marginTop = '-220px'
        else marginTop = '-355px'
      
      return marginTop
    },
    ...mapGetters(['person', 'isOpenedCenterBlock', 'isShowMain'])
  },
}
</script>

<style lang="scss">
#wrappage {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Trebuchet MS","Arial","Helvetica",sans-serif;
  position: relative;
  color: #e2e2e2;
  text-align: left;
  line-height: 1.3em;
  background: #36393d url(../assets/img/bg-body.jpg);
  .container { 
    width: 100%; 
    margin: -100px auto auto 0; 
    position: fixed; 
    top: 50%;
    transition: margin-top 2s linear;
  }
  
  /* Init styles */
  .left { float:left;}
  .right {float:right;}
  .center{ text-align:center;}
  .divider{ width:100%; margin-bottom:30px; float:left;}
  a, img , button { outline: none; }
  ul{overflow:hidden;}
  .clear {clear: both; display: block; overflow: hidden; visibility: hidden; width: 0; height: 0;}
  .clearfix:after {clear: both; content: ' '; display: block; font-size: 0; line-height: 0; visibility: hidden; width: 0; height: 0;}
  .clearfix {display: inline-block;}
  * html .clearfix {height: 1%;}
  .clearfix {display: block;}
  
  button::-moz-focus-inner,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner {border: 0;}
  button:focus,
  input[type="reset"]:focus,
  input[type="button"]:focus,
  input[type="submit"]:focus {border: 0;}

  h1 {font-size:36px;}
  h2 {font-size:30px;}
  h3 {font-size:24px;}
  h4 {font-size:18px;}
  h5 {font-size:16px;}
  h6 {font-size:14px;}
  /* h1, h2, h3, h4, h5, h6 {margin: 0; padding: 0;} */
  p {font-size: 14px; height: auto; line-height: 1.3em;}
}

/* @keyframes */
@keyframes blink-animation {
    0%   { opacity: 0; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
}
</style>
