const { storage } = require('../data/storage');
class Store {
    static async listProducts() {
        return storage.get("products").value();
    }
    static async fetchByID(id) {
        const product = storage.get("products").find({id: Number(id)}).value();
        if(product) return product;
    }
}

module.exports = Store;