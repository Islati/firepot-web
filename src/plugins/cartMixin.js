var cartMixin = {
    methods: {
        genCartDisplayData(cart, inventory) {
            var items = [];

            for (let _cartItem of cart) {
                /* Find the store item that has their product id */
                for (let _storeItem of inventory) {
                    /* Look for their item ids */
                    for (let _product of _storeItem.products) {

                        /*
                        If this product is not the one the user has selected
                        then we're not going to process
                        */
                        if (_cartItem.id !== _product.id) {
                            continue;
                        }


                        /* Build an object for the item in their cart */
                        items.push({
                            title: `${_storeItem.title}`,
                            weight: `${_product.name}`,
                            unitCost: `${_product.cost}`,
                            amount: `${_cartItem.amount}`,
                            description: `${_storeItem.description}`,
                            images: _storeItem.images,
                            productId: _product.id,
                            itemId: _storeItem.id,
                            tags: _storeItem.tags,

                        });
                        break;
                    }
                }
            }
            return items;
        },
        genCartTotal(cart, inventory) {
            let amount = 0;
            for (let _item of this.genCartDisplayData(cart, inventory)) {
                amount += _item.unitCost * _item.amount;
            }
            return amount;
        }
    }
}

export default cartMixin;