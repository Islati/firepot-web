var inventoryMixin = {
    methods: {
        getItemInfoByProductId(inventory, productId) {
            let _foundItem = null;
            for (let _item of inventory) {

                if (_foundItem !== null) {
                    break;
                }

                for (let _product of _item.products) {
                    if (_product.id !== productId) {
                        continue;
                    }

                    _foundItem = _item;
                }
            }

            return _foundItem;
        },
        getWeightForProductId(inventory, productId) {
            let _foundInfo = null;
            for (let _item of inventory) {

                if (_foundInfo !== null) {
                    break;
                }

                for (let _product of _item.product) {
                    if (_product.id !== productId) {
                        continue;
                    }
                    _foundInfo = _product.name;
                    break;
                }
            }

            return _foundInfo;
        }
    }
}

export default inventoryMixin;