import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        authToken: null,
        name: "User",
        cart: [
            {
                id: 106, // PRODUCT ID <-- (Includes AMT in some cases) (example, 101 is 1g of silver haze, 102 is 3.5g of silver haze)
                amount: 1
            },
        ],
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
        isLoggedIn: (state) => {
            if (state.authToken == null) {
                return false;
            }

            return state.authToken.length > 0;
        }
    },
    mutations: {
        setAuthToken(state, token) {
            console.log(`Authentication token set: ${token}`);
            state.authToken = token;
            localStorage.authToken = token;
        },
        logout(state) {
            console.log("Logging Out")
            state.authToken = null;
        },
        addCartItem(state, productId, amount = 1) {
            console.log(`User added product ${amount}x${productId} to their cart`)
            state.cart.push({id: productId, amount: amount});
        }
    },
    actions: {
        addToCart(context, productId, amount = 1) {
            console.log(`Dispatching commit:: addCartItem `);
            context.commit('addCartItem', productId, amount);
        }
    }

})