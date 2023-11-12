<template>
<div id="contacts" class="box left">
    <vue-custom-scrollbar class="box-content" :settings="scrollSettings" ref="scroll-area">
        <h3># {{ person.contacts.title }}</h3>
        <p class="sub"></p>
        <div class="content-block left">
            <div class="top-block">
                <div v-for="(item, index) in person.contacts.paragraphs" :key="index">
                    <p v-html="item"></p>
                </div>
            </div>
            <div class="bottom-block">
                <div v-for="(item, index) in person.contacts.info" :key="'c' + index">
                    <p>
                        <span class="name">{{ item.name }}</span>&nbsp;
                        <span class="value" v-html="item.value"></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="content-block right">
            <div class="contactusb">
                <form action="#" id="contactus" method="post">
                    <div>
                        <label for="name">Имя</label>
                        <input type="text" name="name" class="textfield" id="name" value="" required />
                        <label for="email">E-mail</label>
                        <input type="email" name="email" class="textfield" id="email" value="" required />
                        <label for="message">Сообщение</label>
                        <textarea name="message" id="message" class="textarea" cols="8" rows="12" required></textarea>
                        <button id="send" type="text" @click="onSubmit()">отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </vue-custom-scrollbar>
</div>
</template>

<script>
import { mapState } from 'vuex'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
    name: 'PageContacts',
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
            }
        }
    },
    computed: {
        ...mapState({
            person: state => state.person
        })
    },
    methods: {
        onSubmit() {
            alert('Отправка сообщения временно недоступна\nВоспользуйтесь иными почтовыми сервисами или месенджерами.')
        }
    }
}
</script>

<style lang="scss">
#contacts {
    .content-block {
        &.left {
            width: 50%;
            margin-right: 5%;
        }
        &.right {
            width: 45%;
        }
        .top-block {
            min-height: 190px;
        }
        .bottom-block {
            p {
                margin-bottom: 5px;
                .value { color: #79c113; font-size: 12px;}
                a { color: #79c113; }
            }
        }
    }
}
#contactus {
    margin:0;
    label {
        font-size: 15px;
        display: block;
        margin: 0 0 10px 0;
        clear: both;
        float: left;
        color: #79c113;
        text-shadow: 1px 1px 0px #000000;
    }
    .textfield {
        background: url(../assets/img/bg-form.png) top center no-repeat;
        margin-bottom: 10px;
        padding: 5px 10px;
        color: #aaa;
        width: 245px;
        min-height: 22px;
        border: 1px solid #2b3e20;
        clear: both;
        float: left;
        border-radius: 5px;
        font-size: 14px;
    }
    .textarea {
        background: url(../assets/img/bg-form.png) top center no-repeat;
        padding: 5px 10px;
        color: #aaa;
        width: 245px;
        height: 100px;
        font-size: 14px;
        border: 1px solid #2b3e20;
        clear: both;
        float: left;
        border-radius: 5px;
        overflow: hidden;
    }
    button {
        width: 245px;
        height: 30px;
        background: url(../assets/img/but-send.png) 0 0 no-repeat;
        /* background-size: 223px 30px; */
        color: #518e2e;
        text-shadow: 1px 1px 1px #090d06;
        font-size: 16px;
        display: block;
        padding: 0;
        margin: 20px 0 0 0;
        border: none;
        cursor: pointer;
        float: left;
        &:hover {
            background: url(../assets/img/but-send.png) 0 -30px no-repeat;
            color: #79c113;
            text-shadow: 1px 1px 1px #090d06;
        }
    }
}
</style>