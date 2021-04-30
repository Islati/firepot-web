import Vue from 'vue';
import Vuex from 'vuex';

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
                    title: "Sundae Driver",
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
                            name: "1g",
                            cost: 10
                        },

                        {
                            id: 103,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 104,
                            name: "7g",
                            cost: 45
                        },

                        {
                            id: 105,
                            name: "14g",
                            cost: 80
                        },
                        {
                            id: 106,
                            name: "28g",
                            cost: 140
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
                            name: "1g",
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
                            name: "28g",
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
            return state.viewerAge !== null && state.viewerAge >= 19;
        }
    },
    mutations: {
        setViewerAge(state,age) {
            state.viewerAge = age;
        }
    },
    actions: {
        setAge({commit}, age) {
            console.log(`Dispatching commit:: setViewerAge(${age}) `);
            commit('setViewerAge', age);
        },
        removeFromCart({commit}, productId) {
            console.log(`Dispatching commit:: removeCartItem x Product ID ${productId}`);
            commit(`removeCartItem`, productId);
        },
        submitOrder(context) {
            //todo submit call to backend.
            //todo create endpoint which calls this method.
            console.log(`Submitting Order with cart ${JSON.stringify(context.state.cart)}`)
            // context.commit('clearCart'); //todo reimplement this when the cart is saved on the backend.
        },
    }

})