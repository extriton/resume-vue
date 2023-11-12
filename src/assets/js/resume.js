export default {
    fullName: 'Andrey Kozik',
    fullNameRu: 'Андрей Козик',
    profession: 'Web-developer',
    professionRu: 'Веб-разработчик',
    about: {
        title: 'Инфо',
        paragraphs: [
            `В данный момент ищу удалённую работу в сфере Веб-разработки на позицию Middle Frontend/Fullstack developer (VueJS, NodeJS).<br />` +
            `Интересующее направление - разработка SPA/PWA на VueJS / Vue 3.`,
            `Имеющиеся сопутствующе навыки:<br />` +
            `Vue, Vuex, Vue-router, Vue-socket.io, CSS3 (animation/transition, flex), SCSS, Bootstrap, Webpack, ES6, Velocity, NodeJS, express, Mongoose, Sequilize.`,
            `Есть опыт практического применения/использования:<br />` + 
            `PHP, Symphony, Drupal, MODx, Python/Django, C++, Java.<br />` + 
            `БД: MySQL, PostgreSQL, MongoDB.`,
            'Так же есть опыт разработки смарт-контрактов Ethereum (Solidity), EOS (C++).'
        ],
        experience: {
            title: 'Опыт',
            paragraphs: [
                `Разработкой ПО на разных технологиях занимаюсь более 10лет`,
                `2008-2013 / BTC / Инженер-программист`,
                `2013-2014 / CINIMEX / Ведущий разработчик ПО`,
                `2014-2023 / Веб-разработка, фриланс, соло-проекты и т.д.`
            ]
        },
        new_projects: {
            title: 'Новые проекты',
        }
    },
    resume: {
        title: 'Навыки',
        paragraphs: [],
        skills: [
            { name: 'Javascript/ES6', level: 80 },
            { name: 'NodeJS', level: 75 },
            { name: 'ExpressJS', level: 70 },
            { name: 'VueJS/Vuex/Vue-Router', level: 80 },
            { name: 'Nuxt', level: 60 },
            { name: 'AJAX/JSON', level: 90 },
            { name: 'HTML/CSS3/SCSS', level: 85 },
        ],
        education: {
            title: 'Образование',
            paragraphs: [
                '1996-2001 / БГУ / Инженер-физэлектроник'
            ],
        }
    },
    portfolio: {
        title: 'Портфолио',
        projects: [
            {
                name: 'Goldenhills (game)',
                description: 'HTML5, CSS3, JS, Vue JS, NodeJS, Sequilize, C++, EOS',
                imageFilename: 'playing-goldenhills.jpg',
                link: 'https://playing.goldenhills.io/',
                isNew: true
            },
            {
                name: 'Goldenhills (landing)',
                description: 'HTML5, CSS3, JS, VueJS',
                imageFilename: 'goldenhills.jpg',
                link: 'https://goldenhills.io/',
                isNew: true
            },
            {
                name: 'Tokenlands (game)',
                description: 'HTML5, CSS3, JS, Vue JS, C++, EOS',
                imageFilename: 'playing-tokenlands.jpg',
                link: 'https://playing.tokenlands.io/en/play',
                isNew: true
            },
            {
                name: 'Tokenlands (landing)',
                description: 'HTML5, CSS3, JS, VueJS',
                imageFilename: 'tokenlands.jpg',
                link: 'https://tokenlands.io/',
                isNew: true
            },
            {
                name: 'Snake',
                description: 'HTML5, CSS3, JS, Vue 3',
                imageFilename: 'snake-vue.jpg',
                link: 'https://snake-vue3.onrender.com',
                isNew: true
            },
            {
                name: 'WorldFlashmob',
                description: 'HTML5, CSS3/SCSS, JS, Vue, Vuex, Vue-router',
                imageFilename: 'worldflashmob-vue.jpg',
                link: 'https://flashmobworld.com/',
                isNew: true
            },
            {
                name: 'Dice',
                description: 'HTML5, CSS3/SCSS, JS, VueJS, Nuxt.js',
                imageFilename: 'dice-vue.jpg',
                link: 'https://dice2.herokuapp.com/',
                isNew: false
            },
            {
                name: 'SmartLotto',
                description: 'HTML5, CSS3/SCSS, JS, VueJS, Vuex, Vue-router, Vue-socket.io, Mongoose, NodeJS, Express, web3js, Solidity (ethereum smart-contract)',
                imageFilename: 'smartlotto-vue.jpg',
                link: 'https://smart-lotto.org/',
                isNew: false
            },
            {
                name: 'Maxigames',
                description: 'HTML5, CSS3, JS, AngularJS, Express, Mongoose, NodeJS, Socket.io',
                imageFilename: 'maxigames-angularjs.jpg',
                link: '#',
                isNew: false
            },
            {
                name: 'Maxidrop',
                description: 'HTML5, CSS3, JS, jQuery, Python, Django',
                imageFilename: 'maxidrop-django.jpg',
                link: '#',
                isNew: false
            },
            {
                name: 'KK Service',
                description: 'HTML5, CSS3, JS, AngularJS, Python, Django',
                imageFilename: 'kks-angularjs.jpg',
                link: '#',
                isNew: false
            },
            {
                name: 'Multirezonans',
                description: 'HTML5, CSS3, JS, Bootstrap',
                imageFilename: 'multirezonans.jpg',
                link: '#',
                isNew: false
            },
            {
                name: 'Autohub',
                description: 'HTML5, CSS3, JS, Bootstrap',
                imageFilename: 'autohub-html.jpg',
                link: '#',
                isNew: false
            },
            {
                name: 'Ab',
                description: 'HTML5, CSS3, JS, Bootstrap',
                imageFilename: 'ab-html.jpg',
                link: '#',
                isNew: false
            }
        ]
    },
    contacts: {
        title: 'Контакты',
        paragraphs: [
            'Если вас заинтересовала моя кандидатура просьба связаться со мной по E-mail или Skype.'
        ],
        info: [
            {
                name: 'ФИО:',
                value: 'Козик Андрей Михайлович'
            },
            {
                name: 'Адрес:',
                value: 'Республика Беларусь, г. Минск'
            },
            {
                name: 'GitHub:',
                value: 'https://github.com/extriton'
            },
            {
                name: 'WWW:',
                value: '<a href="https://akresume.herokuapp.com" title="Andrey Kozik | CV" target="_blank">https://akresume.herokuapp.com</a>'
            },
            {
                name: 'Email:',
                value: '<a href="mailto:etextriton@gmail.com" title="Написать письмо">etextriton@gmail.com</a>'
            },
            {
                name: 'Skype:',
                value: 'single_wolf3'
            },
            {
                name: 'Download',
                value: '<a href="/files/резюме_козика_а_м.docx" title="Скачать резюме" download>Andrey Kozik | CV</a>'
            }
        ]
    },
}