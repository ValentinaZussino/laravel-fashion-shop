import { reactive } from 'vue';

export const store = reactive({

    apiUrl: 'http://127.0.0.1:8000/api',
    imagePath: 'http://127.0.0.1:8000/storage/',

    menuItems: [
        {
            label: 'Home',
            routeName: 'home',
        },
        {
            label: 'Products',
            routeName: 'products',
        },
        {
            label: 'Team',
            routeName: 'home',
        },
        {
            label: 'About Us',
            routeName: 'home',
        },
    ],

});