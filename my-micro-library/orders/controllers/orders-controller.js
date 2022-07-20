let Orders = require('../models/Orders');
let monguz = require('mongoose');
const { default: axios } = require('axios');

var getOrders = async (req, resp, next) => {
    try {
        let orders = await Orders.find();
        if(!orders) {
            resp.status(404).send('no orders found');
            return;
        }
        resp.status(200).send(orders);
    } catch (error) {
        next(error);
    }
}

var createOrder = async (req, resp, next) => {
    try {
        let newOrder = {
            "CustomerId": monguz.Types.ObjectId(req.body.CustomerId),
            "BookId": monguz.Types.ObjectId(req.body.BookId),
            "initialDate": req.body.initialDate,
            "deliveryDate": req.body.deliveryDate
        }
        let order = await Orders.create(newOrder);
        resp.status(200).send(order);
    } catch (error) {
        next(error);
    }
}

var getOrderDetails = async (req, resp, next) => {
    try {
        let order = await Orders.findById(req.params.id);
        if(!order) {
            resp.status(404).send('no order found');
            return;
        }
        let response1 = await getServiceData("http://localhost:4000/customer/", order.CustomerId);
        let response2 = await getServiceData("http://localhost:3000/book/", order.BookId);
        let result = await Promise.all([response1, response2]);
        if(result.errCode) {
            resp.status(result.errCode).send(result.err);
            return;
        }
        let customer = result[0].data;
        let book = result[1].data;
        console.log(customer, book);
        if(!(book && customer)) {
            resp.status(404).send('book title or customer name missing');
            return;
        }
        let finalResult = {
            customerName: customer.name,
            bookTitle: book.title
        }
        resp.status(200).send(finalResult);
    } catch (error) {
        console.log('My error => ', error);
        next(error);
    }
}

async function getServiceData(url, param) {
    try {
        return await axios.get(url+param);
    } catch (error) {
        let errCode = 0;
        let err = '';
        if(error.response) {
            errCode = error.response.status || 422;
            err = error.response.data || 'axios issue';
        }
        return {errCode, err};
    }
}

module.exports = {getOrders, createOrder, getOrderDetails};