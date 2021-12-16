import Vue from 'vue'

import { createInertiaApp } from '@inertiajs/inertia-vue'

createInertiaApp({
    resolve: (name) => {
        return require(`./pages/${name}`).default
    },
    setup({ el, App, props }) {
        new Vue({
            render: (h) => h(App, props),
        }).$mount(el)
    },
})

