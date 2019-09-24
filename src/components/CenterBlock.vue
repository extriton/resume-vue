<template>
<div v-if="isOpenedCenterBlock" class="center-block-wrapper">
    <ScannerBlock />
    <MainBlock />
</div>
</template>

<script>
import ScannerBlock from '@/components/ScannerBlock.vue'
import MainBlock from '@/components/MainBlock.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'CenterBlock',
    components: {
        ScannerBlock,
        MainBlock
    },
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters(['isOpenedCenterBlock'])
    }
}
</script>

<style lang="scss">
.center-block-wrapper {
    margin: 0 auto;
    background: #171d23;
    background: url(../assets/img/bg-center.jpg);
    border-top: 3px #14191f solid;
    padding: 30px 0;
}
</style>