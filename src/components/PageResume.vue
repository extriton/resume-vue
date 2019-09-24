<template>
<div id="resume" class="box left">
    <vue-custom-scrollbar class="box-content" :settings="scrollSettings" ref="scroll-area">
        <h3># {{ person.resume.title }}</h3>
        <p class="sub"></p>
        <div v-for="(item, index) in person.resume.paragraphs" :key="index">
            <p>
                <span v-show="item != 'br'">{{ item }}</span>
            </p>
        </div>
        <div class="skills">
            <div v-for="(skill, index) in person.resume.skills" :key="'s' + index" class="bar">
                <div class="block-pr" :style="{ backgroundSize: min(percent, skill.level) + '% 100%' }">
                    <div class="text"><span>{{ min(percent, skill.level) }}</span>%</div>
                </div>
                <div class="last">{{skill.name}}</div>
            </div>
        </div>
        <br />
        <h3># {{ person.resume.education.title }}</h3>
        <p class="sub"></p>
        <div v-for="(item, index) in person.resume.education.paragraphs" :key="'e' + index">
            <p>
                <span v-show="item != 'br'">{{ item }}</span>
            </p>
        </div>
        <br />
    </vue-custom-scrollbar>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
    name: 'PageResume',
    components: {
        vueCustomScrollbar
    },
    data() {
        return {
            scrollSettings: {
                tagname: 'div',
                wheelSpeed: .4,
                minScrollbarLength: 103,
                maxScrollbarLength: 103,
                suppressScrollX: true,
                swipeEasing: false
            },
            progressInterval: null,
            percent: 0
        }
    },
    computed: {
        ...mapGetters(['person', 'currentPage'])
    },
    methods: {
        min(n1, n2) {
            if (n1 < n2) return n1
            else return n2
        },
        runProgress () {
            if (this.progressInterval !== null) {
                clearInterval(this.timerInterval)
                this.timerInterval = null
            }
        
            this.progressInterval = setInterval(() => {
                if (this.percent > 100) {
                    clearInterval(this.progressInterval)
                    this.progressInterval = null
                    return
                }
                this.percent++
            }, 20)
        }
    },
    mounted () {
        this.runProgress()
    },
    beforeDestroy () {
        if(this.progressInterval !== null) clearInterval(this.progressInterval)
    },
    watch: {
       currentPage (val) {
           if (val == 'PageResume') { 
               this.percent = 0
               this.runProgress()
           }
       } 
    }

}
</script>

<style lang="scss">
.skills {
    width: 100%;
    margin: 5px 0 20px 0;
    display: inline-block;
    .bar {
        width: 100%;
        min-height: 21px;
        line-height: 21px;
        margin: 0 10px 20px 0;
        padding: 0;
        background: url(../assets/img/progressbar.png) top left no-repeat;
        .block-pr {
            display: inline-block;
            width: 241px;
            min-height: 21px;
            line-height: 21px;
            background: url(../assets/img/progress1.png) top left no-repeat;
            background-size: 0% 100%;
            margin-right: 20px;
            .hidden {
                display: none;
            }
            .text {
                min-height: 21px;
                line-height: 21px;
                text-align: center;
                color: #79c113;
                font-size: 16px;
                text-shadow: 1px 1px 1px #000000;
            }
        }
        .last {
            display: inline-block;
            min-height: 21px;
            line-height: 21px;
            margin: 0;
            padding: 0;
            font-weight: 400;
            color: #aaa;
            font-size: 16px;
            text-shadow: 1px 1px 0px #000000;
        }
    }
}
</style>