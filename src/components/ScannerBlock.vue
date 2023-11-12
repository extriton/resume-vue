<template>
<div v-if="!isShowMain" class="scanner clearfix">
    <div class="scanner-block">
        <div class="scanner-box left">
            <transition name="search-line" appear>
                <div class="scanner-line"></div>
            </transition>
        </div>
        <ul class="data left">
            <li v-if="!isEndScan" class="search">
                <vue-typer
                    :text='["# wait... identity..."]'
                    :repeat='0'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2000'
                    :erase-delay='250'
                    erase-style='select-all'
                    :erase-on-complete='false'
                    caret-animation='blink'
                ></vue-typer>
            </li>
            <li class="search-d" :class="{ show: isEndScan }"># / > {{ person.profession.toLowerCase() }}</li>
            <li class="search-d" :class="{ show: isEndScan }"># / > {{ person.fullName.toLowerCase() }}</li>
            <li class="search-d" :class="{ show: isEndScan }"># / > access received...</li>
        </ul>
    </div>
</div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import { mapState } from 'vuex'

export default {
    name: 'ScannerBlock',
    components: {
        VueTyper
    },
    computed: {
        ...mapState({
            person: state => state.person,
            isEndScan: state => state.isEndScan,
            isShowMain: state => state.isShowMain
        })
    }
}
</script>

<style lang="scss">
.scanner {
    width: 760px;
    height: 190px;
    margin: 0 auto;
    padding: 30px 0;
    .scanner-block {
        width: 460px;
        margin: 0 auto;
        padding: 0;
        .scanner-box {
            width: 130px;
            height: 130px;
            margin: 0;
            background: url(../assets/img/scanner.png) top center no-repeat;
            position: relative;
            .scanner-line {
                width: 124px;
                height: 20px;
                background: url(../assets/img/strip-e.png) repeat-x;
                position: absolute;
                left: 3px;
                opacity: 0;
            }
            /* Animate search-line */
            .search-line-enter-active { transition: top 2.5s linear 1s; opacity: 1; }
            .search-line-enter { top: 0; }
            .search-line-enter-to { top: 110px; }
            /* End: Animate search-line */
        }
        .data {
            width: 300px;
            margin: 3px 0 0 30px;
            li {
                padding: 0 0 5px 0;
                color: #79c113;
                text-shadow: 1px 1px 0px #000000;
                font-size: 1.3em;
                &.search {
                    animation: blink-animation 1.5s linear infinite;
                }
                &.search-d {
                    opacity: 0;
                    margin-bottom: 15px;
                    &:nth-child(1) {
                        transition: opacity .5s linear;
                    }
                    &:nth-child(2) {
                        transition: opacity .5s linear 1s;
                    }
                    &:nth-child(3) {
                        transition: opacity .5s linear 2s;
                    }
                    &.show {
                        opacity: 1;
                    }
                }
                span {
                    color: #5b8e16;
                }
            }
        }
    }
}
</style>