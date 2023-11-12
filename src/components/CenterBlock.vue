<template>
<div v-if="isOpenedCenterBlock" class="center-block-wrapper">
    <scanner-block></scanner-block>
    <main-block></main-block>
</div>
</template>

<script>
import ScannerBlock from '@/components/ScannerBlock.vue'
import MainBlock from '@/components/MainBlock.vue'
import { mapState } from 'vuex'

export default {
    name: 'CenterBlock',
    components: {
        ScannerBlock,
        MainBlock
    },
    computed: {
        ...mapState({
            isOpenedCenterBlock: state => state.isOpenedCenterBlock
        })
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