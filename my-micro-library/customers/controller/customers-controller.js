let Customers = require('../models/Customers');

let customers_post = async (req, resp, next) => {
    console.log(req.body);
    try {
        let customer = await Customers.create(req.body);
        resp.status(200).send(customer);
    } catch (error) {
        next(error);
    }
}

let customers_get = async (req, resp, next) => {
    try {
        let customers = await Customers.find();
        resp.status(200).send(customers);
    } catch (error) {
        next(error);
    }
}

let get_customer = async (req, resp, next) => {
    try {
        console.log(req.params);
        let customer = await Customers.findById(req.params.id);
        if(!customer) {
            resp.status(404).send('Customer not found');
            return;
        }
        if(!(customer.name === req.params.name)) {
            resp.status(400).send('Customer author not matching');
            return;
        }
        resp.status(200).send(customer);
    } catch (error) {
        // console.log(error);
        next(error)
    }
}

let get_customer_by_id = async (req, resp, next) => {
    try {
        console.log(req.params);
        let customer = await Customers.findById(req.params.id);
        if(!customer) {
            resp.status(404).send('Customer not found');
            return;
        }
        resp.status(200).send(customer);
    } catch (error) {
        // console.log(error);
        next(error)
    }
}

let delete_customer = async (req, resp, next) => {
    try {
        let customerDel = await Customers.findByIdAndRemove(req.params.id);
        resp.status(200).send(customerDel);
    } catch (error) {
        next(error);
    }
}
module.exports = {customers_post, customers_get, get_customer, delete_customer, get_customer_by_id};