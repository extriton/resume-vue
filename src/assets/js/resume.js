export default {
    fullName: 'Andrey Kozik',
    fullNameRu: 'Андрей Козик',
    profession: 'Web-developer',
    professionRu: 'Веб-разработчик',
    about: {
        title: 'Инфо',
        paragraphs: [
            `В данный момент ищу удалённую работу в сфере Веб-разработки на позицию Junior/Middle VueJS.<br />` +
            `Интересующее направление - разработка SPA/PWA на VueJS.`,
            `Имеющиеся сопутствующе навыки:<br />` +
            `Vue, Vuex, Vue-router, Vue-socket.io, CSS3 (animation/transition), SCSS, Bootstrap, Webpack, ES6, Velocity, NodeJS, express, Mongoose.`,
            `Так же рассматриваю вакансии Angular 4+ на позицию Junior (мало практического опыта)<br/>`,
            `Есть опыт практического применения/использования:<br />` + 
            `PHP, Symphony, Drupal, MODx, Python/Django, C++, Java.<br />` + 
            `БД: MySQL, PostgreSQL, MongoDB.`,
            'Так же есть опыт разработки смарт-контрактов Ethereum на Solidity.'
        ],
        experience: {
            title: 'Опыт',
            paragraphs: [
                `Разработкой ПО на разных технологиях занимаюсь более 10лет`,
                `2008-2013 / BTC / Инженер-программист`,
                `2013-2014 / CINIMEX / Ведущий разработчик ПО`,
                `2014-2019 / Веб-разработка, фриланс, соло-проекты`
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
            { name: 'VueJS/Vuex/Vue-Router', level: 70 },
            { name: 'AngularJS', level: 80 },
            { name: 'Angular 4+', level: 20 },
            { name: 'AJAX/JSON', level: 80 },
            { name: 'HTML/CSS3', level: 85 },
            { name: 'SCSS', level: 70 },
            { name: 'Bootstrap', level: 60 },
            { name: 'Python/Django', level: 40 },
            { name: 'PHP', level: 30 },
            { name: 'MODx', level: 35 },
            { name: 'Solidity', level: 70 },
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
                name: 'WorldFlashmob',
                description: 'HTML5, CSS3/SCSS, JS, Vue, Vuex, Vue-router',
                imageFilename: 'worldflashmob-vue.png',
                link: 'https://flashmobworld.com/',
                isNew: true
            },
            {
                name: 'Dice',
                description: 'HTML5, CSS3/SCSS, JS, Vue, Nuxt.js',
                imageFilename: 'dice-vue.png',
                link: 'https://dice2.herokuapp.com/',
                isNew: true
            },
            {
                name: 'SmartLotto',
                description: 'HTML5, CSS3/SCSS, JS, Vue, Vuex, Vue-router, Vue-socket.io, Mongoose, NodeJS, Express, web3js, Solidity (ethereum smart-contract)',
                imageFilename: 'smartlotto-vue.png',
                link: 'https://smart-lotto.org/',
                isNew: true
            },
            {
                name: 'Snake',
                description: 'HTML5, CSS3, JS, VueJS',
                imageFilename: 'snake-vue.png',
                link: '/snake',
                isNew: true
            },
            {
                name: 'Maxigames',
                description: 'HTML5, CSS3, JS, AngularJS, Express, Mongoose, NodeJS, Socket.io',
                imageFilename: 'maxigames-angularjs.png',
                link: '#',
                isNew: true
            },
            {
                name: 'Maxidrop',
                description: 'HTML5, CSS3, JS, jQuery, Python, Django',
                imageFilename: 'maxidrop-django.png',
                link: '#',
                isNew: true
            },
            {
                name: 'KK Service',
                description: 'HTML5, CSS3, JS, AngularJS, Python, Django',
                imageFilename: 'kks-angularjs.png',
                link: '#',
                isNew: false
            },
            {
                name: 'Multirezonans',
                description: 'HTML5, CSS3, JS, Bootstrap',
                imageFilename: 'multirezonans.png',
                link: '#',
                isNew: false
            },
            {
                name: 'Autohub',
                description: 'HTML5, CSS3, JS, Bootstrap',
                imageFilename: 'autohub-html.png',
                link: '#',
                isNew: false
            },
            {
                name: 'Ab',
                description: 'HTML5, CSS3, JS, Bootstrap',
                imageFilename: 'ab-html.png',
                link: '#',
                isNew: false
            }
        ]
    },
    contacts: {
        title: 'Контакты',
        paragraphs: [
            'Если вас заинтересовала моя кандидатура просьба связаться со мной по E-mail.'
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
                name: 'Телефон:',
                value: 'нет'
            },
            {
                name: 'Сайт:',
                value: '<a href="https://akresume.herokuapp.com" title="Резюме Козик А.М." target="_blank">https://akresume.herokuapp.com</a>'
            },
            {
                name: 'Email:',
                value: '<a href="mailto:etextriton@gmail.com" title="Написать письмо">etextriton@gmail.com</a>'
            },
            {
                name: 'Скачать',
                value: '<a href="/files/резюме_козика_а_м.doc" title="Скачать резюме" download>резюме</a>'
            }
        ]
    },
}