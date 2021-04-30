import Vue from 'vue';
import Vuex from 'vuex';
import VueCookies from "vue-cookies";

// import {config} from "config"

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        viewerAge: null,
        store: {
            inventoryLoaded: true,
            inventory: [
                {
                    id: 102, //Item ID <- Not PRODUCT ID
                    title: "Nuken",
                    description: "Beautiful crystal nugs with hues of rich blue, green, and orange. Each of these babies packs 23% THC & 1.5% CBD.",
                    images: {
                        cover: require("./assets/sundae-driver.jpg"),
                        gallery: [
                            {
                                src: require('./assets/sundae-driver.jpg')
                            }
                        ]
                    },
                    tags: ["Hybrid", "Flower"],
                    products: [
                        {
                            id: 102,
                            name: "g",
                            cost: 8
                        },

                        {
                            id: 103,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 104,
                            name: "7g",
                            cost: 40
                        },

                        {
                            id: 105,
                            name: "14g",
                            cost: 70
                        },
                        {
                            id: 106,
                            name: "Oz",
                            cost: 120
                        }
                    ]
                },
                {
                    id: 103, //Item ID <- Not PRODUCT ID
                    title: "Vanilla Kush",
                    description: "Beautiful crystal nugs with hues of rich blue, green, and orange. Each of these babies packs 23% THC & 1.5% CBD.",
                    images: {
                        cover: require("./assets/sundae-driver.jpg"),
                        gallery: [
                            {
                                src: require('./assets/sundae-driver.jpg')
                            }
                        ]
                    },
                    tags: ["Hybrid", "Flower"],
                    products: [
                        {
                            id: 107,
                            name: "g",
                            cost: 10
                        },

                        {
                            id: 108,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 109,
                            name: "7g",
                            cost: 45
                        },

                        {
                            id: 110,
                            name: "14g",
                            cost: 80
                        },
                        {
                            id: 111,
                            name: "Oz",
                            cost: 140
                        }
                    ]
                },
                {
                    id: 104, //Item ID <- Not PRODUCT ID
                    title: "White Poison",
                    description: "Beautiful crystal nugs with hues of rich blue, green, and orange. Each of these babies packs 23% THC & 1.5% CBD.",
                    images: {
                        cover: require("./assets/sundae-driver.jpg"),
                        gallery: [
                            {
                                src: require('./assets/sundae-driver.jpg')
                            }
                        ]
                    },
                    tags: ["Hybrid", "Flower"],
                    products: [
                        {
                            id: 112,
                            name: "1g",
                            cost: 10
                        },

                        {
                            id: 113,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 114,
                            name: "7g",
                            cost: 45
                        },

                        {
                            id: 115,
                            name: "14g",
                            cost: 80
                        },
                        {
                            id: 116,
                            name: "28g",
                            cost: 140
                        }
                    ]
                },
            ]
        }
    },
    getters: {
        isAgeVerified: (state) => {
            let age = 0;
            if (Vue.$cookies.isKey('viewerAge')) {
                age = Vue.$cookies.get('viewerAge');
                console.log(`Retrieved user age from cookies ${age}`)
            }

            if (state.viewerAge !== null) {
                age = state.viewerAge
            }

            return age >= 19;
        }
    },
    mutations: {
        setViewerAge(state, age) {
            state.viewerAge = age;
            Vue.$cookies.set('viewerAge', age, '24h');
        }
    },
    actions: {
        setAge({commit}, age) {
            console.log(`Dispatching commit:: setViewerAge(${age}) `);
            commit('setViewerAge', age);
        }
    }

})