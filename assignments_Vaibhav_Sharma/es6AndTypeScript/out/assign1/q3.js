var Order = {
    id: 1,
    title: "Laptop",
    price: 2.05,
    printOrder: function () {
        console.log("Order is - ", this.title);
    },
    getPrice: function () {
        return this.price;
    }
};
var newOrder = Object.assign({}, Order);
;
newOrder.printOrder();
console.log(newOrder.getPrice());
//# sourceMappingURL=q3.js.map