<template>
<div v-show="isShowMain" class="main">
    <div class="load" ref="load"></div>
    <div class="shut-left" ref="shut-left"></div>
    <div class="shut-right" ref="shut-right"></div>
    <div class="page" ref="page">
        <!-- foto / social block begin here -->
        <div class="box-left left">
            <div class="info">
                <div class="photo"></div>
                <ul class="left who">
                    <li># {{ person.fullNameRu }}</li>
                    <li># {{ person.professionRu }}</li>
                </ul>
            </div>
            <!-- foto / social block end here -->
            <!-- menu begin here -->
            <ul id="menu" class="right">
                <li><router-link to="/about">{{ person.about.title }}</router-link></li>
                <li><router-link to="/resume">{{ person.resume.title }}</router-link></li>
                <li><router-link to="/portfolio">{{ person.portfolio.title }}</router-link></li>
                <li><router-link to="/contacts">{{ person.contacts.title }}</router-link></li>
            </ul>
        </div>
        <div class="cont left">
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Velocity from 'velocity-animate'

export default {
    name: 'MainBlock',
    computed: {
        ...mapState({
            person: state => state.person,
            isShowMain: state => state.isShowMain,
            currentPage: state => state.currentPage
        })
    },
    methods: {
        ...mapMutations([
            'setCurrentPage'
        ])
    },
    watch: {
        isShowMain (value) {
            if (value) {
                Velocity(this.$refs['load'], 'fadeIn', { duration: 2500 })
                Velocity(this.$refs['load'], 'fadeOut', { duration: 1000, delay: 500 })
                Velocity(this.$refs['shut-left'], { width: '0px' }, { duration: 3000, delay: 500 })
                Velocity(this.$refs['shut-right'], { width: '0px' }, { duration: 3000, delay: 500 })
                Velocity(this.$refs['page'], 'fadeIn', { duration: 500, delay: 500 })
                setTimeout(() => {
                    this.setCurrentPage(this.$route.name)
                }, 1000)

            }
        },
    }
}
</script>

<style lang="scss">
.main {
    width: 820px;
    height: 450px;
    margin: 0 auto;
    position: relative;
    padding: 0;
    .load {
        width: 64px;
        height:64px;
        background: url(../assets/img/loader.gif) 0 0 no-repeat;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -32px 0 0 -32px;
        z-index:9999;
    }
    .shut-left {
        width: 600px;
        height: 450px;
        background: url(../assets/img/shut-left.png) top right no-repeat;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 300;
    }
    .shut-right {
        width: 700px;
        height: 450px;
        background: url(../assets/img/shut-right.png) top left no-repeat;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 290;
    }
    .page {
        width: 820px;
        height: 450px;
        margin: 0 auto;
        padding: 0;
        background: url(../assets/img/bg-page.png) top center no-repeat;
        display: none;
        .box-left {
            width: 230px;
            height: 450px;
            position: relative;
            margin: 0 auto;
            padding: 0;
            .info {
                width: 200px;
                height: 210px;
                padding: 30px 0 30px 30px;
                margin: 0;
                .photo {
                    width: 138px;
                    height: 150px;
                    background: url(../assets/img/photo.jpg) top center no-repeat;
                    background-size: cover;
                }
                .who { 
                    margin: 25px 0 0 0; 
                    li {
                        padding: 0 0 6px 0;
                        color: #79c113;
                        text-shadow: 1px 1px 0px #000000;
                    }
                }
            }
            #menu {
                width: 220px;
                height: 170px;
                padding: 10px;
                margin: 12px 0 0 0;
                background: url(../assets/img/bg-menu.png) top left no-repeat;
                li {
                    padding: 0;
                    margin: 0 0 10px 0;
                    a {
                        width: 200px;
                        height: 30px;
                        color: #518e2e;
                        text-shadow: 1px 1px 1px #090d06;
                        display: block;
                        margin: 0;
                        background: url(../assets/img/bg-menu-a.png) 0 0 no-repeat;
                        padding: 0;
                        /* font-family: 'UbuntuMonoRegular'; */
                        font-size: 18px;
                        text-align: center;
                        cursor: pointer;
                        text-decoration: none;
                        line-height: 30px;
                        &:hover {
                            color: #79c113;
                            text-shadow: 1px 1px 1px #090d06;
                            background: url(../assets/img/bg-menu-a.png) 0 -30px no-repeat;
                        }
                        &.router-link-active {
                            color: #79c113;
                            text-shadow: 1px 1px 1px #090d06;
                            background: url(../assets/img/bg-menu-a.png) 0 -30px no-repeat;
                        }
                    }
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
        .cont {
            width: 570px;
            height: 390px;
            margin: 0;
            padding: 30px 20px 30px 0;
            /* Vue-custom-scrollbar styles */
            .ps__rail-y {display: block; opacity: 1; width: 4px; height: 390px; background: #101519; right: 2px; position: absolute;}
            .ps--active-y > .ps__rail-y,
            .ps:hover > .ps__rail-y {display: block; opacity: 1; background: #101519;}
            .ps__thumb-y { background: url('../assets/img/scroll.png'); width: 10px; height: 103px!important; right: -4px; position: absolute;}
            .ps__rail-y:hover > .ps__thumb-y,
            .ps__rail-y:focus > .ps__thumb-y,
            .ps__rail-y.ps--clicking .ps__thumb-y {background: url('../assets/img/scroll.png'); width: 10px; height: 103px!important;}
            .ps__thumb-y:hover {cursor: pointer;}
            /* Page styles */
            .box {
                width: 570px;
                height: 390px;
                position: relative;
                margin: 0 auto;
                padding: 0;
                .box-content {
                    height: 390px;
                    position: relative;
                    margin: 0 auto;
                    padding: 0 30px 0 30px;
                    overflow: hidden;
                    h3 {
                        font-size: 22px;
                        color: #79c113;
                        text-shadow: 1px 1px 0px #000000;
                        font-weight: 400;
                        margin: 2px 0 0 0;
                        /* font-family: 'UbuntuMonoRegular'; */
                        padding: 0;
                        display: block;
                    }
                    p { 
                        margin: 0 0 10px 0;
                        font-size: 11px;
                        color: #aaa;
                        &.sub {
                            margin: 0 0 22px 0;
                            border-bottom: 1px #2b3e20 solid;
                            padding: 0 0 4px 0;
                            color: #518e2e;
                        }
                    }
                    /* Gallery styles */
                    .gallery-block {
                        margin: 0;
                        padding: 10px 0 0 0;
                        .gallery {
                            display: inline-block;
                            width: 231px;
                            height: 130px;
                            padding: 5px;
                            background: url(../assets/img/bg-gallery.png) top center no-repeat;
                            position: relative;
                            margin: 0 45px 20px 0;
                            position: relative;
                            &.last {
                                margin-right: 0;
                            }
                            .img {
                                display: block;
                                width: 216px;
                                height: 105px;
                                margin: 0;
                            }
                            .des {
                                width: 80px;
                                height: 14px;
                                font-size: 11px;
                                color: #518e2e;
                                position: absolute;
                                bottom: 4px;
                                right: 0px;
                                text-align: center;
                                padding: 0 10px 0 0;
                                z-index: 100;
                            }
                            .block-zoom {
                                width: 224px;
                                height: 0;
                                overflow: hidden;
                                top: 1px;
                                left: 1px;
                                background: url(../assets/img/bg-zoom.png) no-repeat top center;
                                position: absolute;
                                z-index: 150;
                                transition: height .7s linear;
                                .zoom {
                                    width: 30px;
                                    height: 30px;
                                    background: url(../assets/img/zoom-icon.png) no-repeat top center;
                                    display: block;
                                    position: absolute;
                                    top: 41px;
                                    left: 0px;
                                    z-index: 155;
                                    transition: left .7s linear;
                                    &:hover {
                                        cursor: pointer;
                                    }
                                }
                                .link {
                                    width: 30px;
                                    height: 30px;
                                    background: url(../assets/img/link.png) no-repeat top center;
                                    display: block;
                                    position: absolute;
                                    top: 41px;
                                    right: 0px;
                                    z-index: 155;
                                    transition: right .7s linear;
                                }
                            }
                            &:hover {
                                .block-zoom {
                                    height: 113px;
                                    .zoom {
                                        left: 70px;
                                    }
                                    .link {
                                        right: 70px;
                                    }
                                }
                            }
                        }
                    }
                }
                /* Modal styles */
                .v--modal-overlay {
                    background: rgba(0, 0, 0, 0.8);
                }
                .modal-content {
                    padding: 20px;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    background-color: #000;
                    border: 1px solid #518e2e;
                    .img {
                        width: 100%;
                        height: 440px;
                        min-height: 440px;
                        max-height: 440px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .desc {
                        position: absolute;
                        width: 100%;
                        height: 120px;
                        padding: 20px;
                        background-color: #000;
                        opacity: 1;
                        color: #AAA;
                        bottom: 0px;
                        left: 0px;
                        .tech {
                            display: inline-block;
                            height: 30px;
                            border: 1px solid #AAA;
                            border-radius: 30px;
                            margin-right: 20px;
                            padding: 5px 10px;
                            margin-bottom: 20px;
                        }
                        a {
                            color: #518e2e;
                        }
                    }
                }
    
            } /* End .box */
            /* Transition animation */
            .slide-enter-active { 
                transition: all 1.5s linear;
                .box-content {
                    transition: height .5s linear;
                }
            }
            .slide-enter {
                .box-content { height: 0px; }
            }
            .slide-enter-to {
                .box-content { height: 390px; }
            }
        } /* End .cont */
    }
}
/* MS supports */
@supports (-ms-overflow-style: none) {
    .ps {overflow: auto !important;}
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .ps {overflow: auto !important;}
}
</style>