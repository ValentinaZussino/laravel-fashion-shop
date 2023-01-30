import { reactive } from 'vue';

export const store = reactive({

    apiUrl: 'http://127.0.0.1:8000/api',
    imagePath: 'http://127.0.0.1:8000/storage/',

    


    mainMenuItem: [

        'Contact US',
        'Help Center / FAQs',
        'Shipping',
        'Returns',
        'Cult Concierge',
        'Contact US',
        'Contact US',

    ],



    dropDownMenuItem: [

        {

            title: 'About',

            voices: [

                'About',
                'Careers',
                'Glossary',
                'People and Planet',

            ],

            menuOpen: false,

        },


        {

            title: 'Legal',

            voices: [

                'Terms & Conditions',
                'Privacy Policy',
                'Coockie Policy',
                'Modern Slavery Policy',
                'Accessibility',

            ],

            menuOpen: false,


        },


        {


            title: 'Find Out More',

            voices: [

                'Cult Status',
                'Promotions',
                'Affiliates',
                'Refer A Friend',

            ],

            menuOpen: false,

        },

    ],

    cart : []


});