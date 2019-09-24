<template>
<div class="bottom-block-wrapper">
    <div class="bottom-block">
        <div class="personal-vcard left">Personal vCard</div>
        <div class="created right" ref="created">Created on VueJS</div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Velocity from 'velocity-animate'

export default {
    name: 'BottomBlock',
    computed: {
        ...mapGetters(['isShowMain'])
    },
    watch: {
        isShowMain (value) {
            if (value) {
                Velocity(this.$refs['created'], 'fadeIn', { duration: 1500, delay: 2000 })
            }


        }
    }
}
</script>

<style lang="scss">
.bottom-block-wrapper {
    height: 100px;
    margin: 0;
    background:url(../assets/img/bg-bottom.png) repeat-x top;
    .bottom-block {
        width: 820px;
        height: 100px;
        margin: 0 auto;
        position: relative;
        font-weight: 400;
        .personal-vcard {
            height: 100px;
            font-size: 36px;
            text-shadow: #000 5px 7px 4px;
            padding: 30px 0 0 0;
        }
        .created {
            padding: 38px 0 0 0;
            font-size: 14px;
            text-shadow: #000 5px 7px 4px;
            opacity: 0;
        }
    }
}
</style>