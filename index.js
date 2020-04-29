// https://cors-anywhere.herokuapp.com/
// fetch('https://balaji1202.github.io/GeoTask/income.json').then(res => res.json()).then(res => console.log(res));
// fetch('https://balaji1202.github.io/GeoTask/expenditure.json').then(res => res.json()).then(res => console.log(res));
// fetch('https://balaji1202.github.io/GeoTask/pincode.json').then(res => res.json()).then(res => console.log(res));
// fetch('https://balaji1202.github.io/GeoTask/locality.json').then(res => res.json()).then(res => console.log(res));

import Vue from 'vue'
import App from './src/App.vue';

new Vue({
    data() {
        return {
            store: {
                searchBy: '',
                searchValue: '',
                GeoData: {
                    Pincode: [],
                    Locality: []
                }
            }
        }
    },
    render: h => h(App)
}).$mount('#geo-app');