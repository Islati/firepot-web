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
                    title: "Girl Scout Cookies",
                    description: "GSC, also called Girl Scout Cookies, is an hybrid marijuana strain made by crossing OG Kush with Durban Poison. GSC produces euphoric effects followed by full-body relaxation. This strain typically features a high level of THC, so it is best reserved for consumers with a high THC tolerance. GSC is loved for its sweet and pungent flavor profile with notes of mint, cherry and lemon.",
                    images: {
                        cover: require("./assets/girlscoutcookies.jpg"),
                        gallery: [
                            {
                                src: require('./assets/girlscoutcookies.jpg')
                            },
                            {
                                src: require('./assets/gscpile.jpg')
                            }
                        ]
                    },
                    tags: ["Hybrid", "Flower"],
                    products: [
                        {
                            id: 102,
                            name: "g",
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
                            cost: 70
                        },
                        {
                            id: 106,
                            name: "oz",
                            cost: 125
                        }
                    ]
                },
                {
                    id: 103, //Item ID <- Not PRODUCT ID
                    title: "Ice Cream Cake",
                    description: "Ice Cream Cake is an indica marijuana strain made by crossing Wedding Cake with Gelato #33. This strain offers sedating effects that leave your mind and body completely relaxed. Ice Cream Cake features a creamy flavor profile with sweet hints of vanilla and sugary dough. Medical marijuana patients choose this strain to help relieve symptoms associated with chronic pain, insomnia, and anxiety. Ice Cream Cake is ideal for night time use when you have nothing important to do except watch TV and fall asleep. Growers say this strain has light green and purple buds that are completely flushed with icy trichomes. ",
                    images: {
                        cover: require("./assets/icecreamcake.jpg"),
                        gallery: [
                            {
                                src: require('./assets/icecreamcake.jpg')
                            },
                            {
                                src: require('./assets/Ice Cream Cake Pile.jpg')
                            }
                        ]
                    },
                    tags: ["Indica", "Hybrid", "Flower"],
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
                            cost: 70
                        },
                        {
                            id: 111,
                            name: "oz",
                            cost: 125
                        }
                    ]
                },
                {
                    id: 104, //Item ID <- Not PRODUCT ID
                    title: "Platinum Kush",
                    description: "Platinum Kush is an indica marijuana strain made by crossing OG Kush with Afghani. This strain takes on a platinum-silver shade due to its thick coat of crystal resin. With purple hues and bright orange hairs, its buds grow dense with a sweet fruity and hashy aroma. The buzz from Platinum Kush has been described as strongly cerebral and body-numbing.",
                    images: {
                        cover: require("./assets/platinumkush.jpg"),
                        gallery: [
                            {
                                src: require('./assets/platinumkush.jpg')
                            },
                            {
                                src: require('./assets/Platinum Kush Pile.jpg')
                            }
                        ]
                    },
                    tags: ["Indica", "Flower"],
                    products: [
                        {
                            id: 112,
                            name: "g",
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
                            cost: 70
                        },
                        {
                            id: 116,
                            name: "28g",
                            cost: 125
                        }
                    ]
                },
                {
                    id: 105, //Item ID <- Not PRODUCT ID
                    title: "Rockstar",
                    description: "Rockstar is an indica marijuana strain made by crossing Rockbud and Sensi Star. This strain produces powerful mind and body effects that are euphoric and sedating. Rockstar smells like sweet grapes with undertones of spice. Medical marijuana patients choose this strain to relieve symptoms associated with headaches, pain and sleep disorders. Growers say Rockstar grows best outdoors.",
                    images: {
                        cover: require("./assets/rockstar.jpg"),
                        gallery: [
                            {
                                src: require('./assets/rockstar.jpg')
                            },
                            {
                                src: require('./assets/Rockstar Kush.jpg')
                            }
                        ]
                    },
                    tags: ["Indica", "Flower"],
                    products: [
                        {
                            id: 117,
                            name: "g",
                            cost: 10
                        },

                        {
                            id: 118,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 119,
                            name: "7g",
                            cost: 45
                        },

                        {
                            id: 120,
                            name: "14g",
                            cost: 70
                        },
                        {
                            id: 121,
                            name: "28g",
                            cost: 125
                        }
                    ]
                },
                {
                    id: 106, //Item ID <- Not PRODUCT ID
                    title: "Sour Amnesia",
                    description: "Sour Amnesia has an earthy, floral aroma that is enhanced by the citrus, diesel zest of Sour Diesel. After taking 2nd place in the Sativa Cup at the High Times Cannabis Cup in 2012, this strain has been celebrated for its soaring, uplifting effects, and is appreciated by commercial breeders and connoisseur growers alike.",
                    images: {
                        cover: require("./assets/souramnesia.jpg"),
                        gallery: [
                            {
                                src: require('./assets/souramnesia.jpg')
                            },
                            {
                                src: require('./assets/souramnesiapile.jpg')
                            }
                        ]
                    },
                    tags: ["Sativa", "Flower"],
                    products: [
                        {
                            id: 122,
                            name: "g",
                            cost: 10
                        },

                        {
                            id: 123,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 124,
                            name: "7g",
                            cost: 45
                        },

                        {
                            id: 125,
                            name: "14g",
                            cost: 70
                        },
                        {
                            id: 126,
                            name: "oz",
                            cost: 125
                        }
                    ]
                },
                {
                    id: 107, //Item ID <- Not PRODUCT ID
                    title: "Orange Dream",
                    description: "Sour Amnesia has an earthy, floral aroma that is enhanced by the citrus, diesel zest of Sour Diesel. After taking 2nd place in the Sativa Cup at the High Times Cannabis Cup in 2012, this strain has been celebrated for its soaring, uplifting effects, and is appreciated by commercial breeders and connoisseur growers alike.",
                    images: {
                        cover: require("./assets/orangedream.jpg"),
                        gallery: [
                            {
                                src: require('./assets/orangedream.jpg')
                            },
                            {
                                src: require('./assets/orangedreampile.jpg')
                            }
                        ]
                    },
                    tags: ["Sativa", "Flower"],
                    products: [
                        {
                            id: 127,
                            name: "g",
                            cost: 10
                        },

                        {
                            id: 128,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 129,
                            name: "7g",
                            cost: 45
                        },

                        {
                            id: 130,
                            name: "14g",
                            cost: 70
                        },
                        {
                            id: 131,
                            name: "oz",
                            cost: 125
                        }
                    ]
                },
                {
                    id: 108, //Item ID <- Not PRODUCT ID
                    title: "Chunky Cheese",
                    description: "Chunky Cheese is an indica dominant hybrid strain created through a cross of the powerfully pungent Big Buddha Cheese X Skunk #1 strains. Although the exact indica to sativa ratio of this bud is unknown, it is thought to be heavily indica because of its powerful body-centric effects. The Chunky Cheese high starts with a subtle cerebral lift that boosts your mood and builds into an energetic and creative blissful state. As your head high builds, your body will slowly be overtaken by a creeping body buzz that leaves you utterly relaxed and completely pain-free. This body buzz is tingly and soon will have you helplessly couch-locked and unable to move willfully as your mind runs free. Because of these effects and its moderate 15-18% average THC level, Chunky Cheese is great for treating conditions such as depression, chronic stress or anxiety, MS, chronic pain, and muscle spasms. The Chunky Cheese aroma is really what gets you – super strong rotting cheese accompanied by a heavy dose of dank skunk. The taste is just as potent, with a powerful sharp cheesy flavor accented by dank skunk and spices.",
                    images: {
                        cover: require("./assets/chunky cheese.jpg"),
                        gallery: [
                            {
                                src: require('./assets/chunky cheese.jpg')
                            },
                            {
                                src: require('./assets/chunky cheese pile.jpg')
                            }
                        ]
                    },
                    tags: ["Indica", "Hybrid", "Flower"],
                    products: [
                        {
                            id: 132,
                            name: "g",
                            cost: 10
                        },

                        {
                            id: 133,
                            name: "3.5g",
                            cost: 25
                        },

                        {
                            id: 134,
                            name: "7g",
                            cost: 45
                        },

                        {
                            id: 135,
                            name: "14g",
                            cost: 70
                        },
                        {
                            id: 136,
                            name: "oz",
                            cost: 125
                        }
                    ]
                },
                {
                    id: 109, //Item ID <- Not PRODUCT ID
                    title: "Fire OG",
                    description: "Fire OG is an indica dominant hybrid (70% indica/30% sativa) strain that is a potent cross between the hugely popular OG Kush X San Fernando Valley OG Kush. This dank bud is said to be the most powerful of the OG Kush family and boasts an insanely high THC level ranging from 20-25% on average. Users describe the Fire OG high as having an instant creative uplifting sense of motivation and determination. You’ll feel a rush of energy that leaves you euphoric and stimulated. This slowly fades into an intense couch lock with an insane case of the munchies and complete and utter sedation. As the high starts to wane, you’ll be eased into a deep and peaceful sleep. Due to these potent effects, Fire OG is said to be an ideal strain for treating patients suffering from conditions such as chronic pain due to injury or illness, stress, mild to moderate cases of depression, and sleep disorders, including insomnia and night terrors. Fire OG buds have a pungent earthy taste with a hint of woody kush and an aroma of sweet burning pine. This bud has leafy airy neon green nugs with a lot of long thin fiery orange hairs, rich purple undertones, and a frosty white layer of trichomes.",
                    images: {
                        cover: require("./assets/fireogshatter.jpg"),
                        gallery: [
                            {
                                src: require('./assets/fireogshatter.jpg')
                            }
                        ]
                    },
                    tags: ["Indica", "Concentrate"],
                    products: [
                        {
                            id: 137,
                            name: "g",
                            cost: 25
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
            commit('setViewerAge', age);
        }
    }

})