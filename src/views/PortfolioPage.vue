<template>
<div id="portfolio" class="box left">
    <vue-custom-scrollbar class="box-content" :settings="scrollSettings" ref="scroll-area">
        <h3># {{ person.portfolio.title }}</h3>
        <p class="sub"></p>
        <!-- gallery begin here -->
        <div class="gallery-block">
            <div class="gallery" v-for="(project, index) in projects" :key="'p' + index" :class="{ last: (index + 1) % 2 == 0 }">
                <div class="img">
                    <img :src="imageUrl(project)" :title="project.description" width="216" height="105" />
                </div>
                <div class="des">{{ project.name }}</div>
                <div class="block-zoom">
                    <div class="zoom" @click="showModal(index)"></div>
                    <a :href="project.link" :title="project.description" class="link" target="_blank"></a>
                </div>
            </div>   
        </div>
        <!-- gallery end here -->
    </vue-custom-scrollbar>
    <modal name="project-detail" :width="800" :height="600">
        <div v-if="selectedProject !== null" class="modal-content">
            <img :src="imageUrl(selectedProject)" />
            <div class="desc">
                <span class="tech" v-for="(item, index) in selectedProject.description.split(', ')" :key="'m' + index">
                    {{ item }}
                </span>
                <br />
                Web: <a :href="selectedProject.link" target="_blank">{{ selectedProject.link }}</a>
            </div>
        </div>
    </modal>
</div>
</template>

<script>
import { mapState } from 'vuex'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
    name: 'PageAbout',
    components: {
        vueCustomScrollbar
    },
    data() {
        return {
            imagePath: '/img/projects/',
            scrollSettings: {
                tagname: 'div',
                wheelSpeed: .4,
                minScrollbarLength: 103,
                maxScrollbarLength: 103,
                suppressScrollX: true,
                swipeEasing: false
            },
            selectedProject: null
        }
    },
    computed: {
        ...mapState({
            person: state => state.person
        }),
        projects () {
            return this.person.portfolio.projects
        }
    },
    methods: {
        imageUrl (project) {
            if (project === null) return ''
            return this.imagePath + project.imageFilename
        },
        showModal (index) {
            this.selectedProject = this.projects[index]
            this.$modal.show('project-detail')
        }
    }
}
</script>

<style lang="scss">
</style>