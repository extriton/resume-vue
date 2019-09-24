<template>
<div class="top-block-wrapper">
    <div class="top-block">
        <a href="/" class="logo"># {{ person.fullName.toLowerCase() }}</a>
        <transition name="button-block" appear>
        <div v-if="!isOpenedCenterBlock" >
            <div class="bg-button"></div>
            <div class="bg-e-button"></div>
            <div class="open" @click="onOpen()">
                <img src="../assets/img/flash.png" />
            </div>
        </div>
        </transition>
    </div>
    <transition name="energy" appear>
        <div v-if="!isOpenedCenterBlock" class="energy"></div>
    </transition>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TopBlock',
    data () {
        return {}
    },
    computed: {
        ...mapGetters(['person', 'isOpenedCenterBlock'])
    },
    methods: {
        onOpen () {
            this.$store.commit('openCenterBlock')
            setTimeout(() => { this.$store.commit('endScan') }, 4000)
            setTimeout(() => { this.$store.commit('showMain') }, 7000)
        },
    }
}
</script>

<style lang="scss">
.top-block-wrapper {
    height: 100px;
    margin: 0;
    background: url(../assets/img/bg-top.png) repeat-x bottom;
    position: relative;
    .top-block {
        width: 820px;
        height: 100px;
        margin: 0 auto;
        position: relative;
        .logo {
            font-size: 56px;
            padding: 0;
            font-weight:400;
            line-height: 100px;
            background: -webkit-linear-gradient(rgb(131, 211, 28), rgb(60, 97, 20));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
        }
        .bg-button {
            width: 130px;
            height: 130px;
            background: url(../assets/img/bg-button.png) 0 0 no-repeat;
            display: block;
            position: absolute;
            bottom: -65px;
            right: 0;
            z-index: 500;
        }
        .bg-e-button {
            width: 130px;
            height: 130px;
            background: url(../assets/img/bg-e-button.png) 0 0 no-repeat;
            display: block;
            position: absolute;
            bottom: -65px;
            right: 0;
            z-index: 510;
            transition: opacity .3s linear .5s;
        }
        .open {
            width:130px;
            height:130px;
            background: url(../assets/img/start.png) 0 0 no-repeat;
            display: block;
            position: absolute;
            bottom: -65px;
            right: 0;
            cursor: pointer;
            z-index: 1000;
            &:hover {
                cursor: pointer;
                background: url(../assets/img/start.png) 0 -130px no-repeat;
            }
            img {
                transition: opacity .75s linear;
                animation: blink-animation 1.5s linear infinite .5s;
                opacity: 0;
            }
        }
    }
    .energy {
        width: 100%;
        height: 20px;
        margin: 0;
        background: url(../assets/img/strip-e.png) top center repeat-x;
        position: absolute;
        bottom: -10px;
        z-index: 510;
    }
    /* Animate energy */
    .energy-enter-active { transition: width 1s ease-out; }
    .energy-enter { width: 0px; }
    .energy-enter-to { width: 100%; }
    .energy-leave-active { transition: opacity .3s linear; }
    .energy-leave { opacity: 1; }
    .energy-leave-to { opacity: 0; }
    /* Animate button-block */
    .button-block-enter-active {
        transition: opacity .7s linear .5s;             /* Fake style for adding classes by vue */
     }
    .button-block-enter {
        .bg-e-button { opacity: 0; }
    }
    .button-block-enter-to {
        .bg-e-button { opacity: 1; }
    }
    .button-block-leave-active { transition: opacity .3s linear; }
    .button-block-leave { opacity: 1; }
    .button-block-leave-to { opacity: 0; }
}
</style>