import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {message: 'Too many requests, please try again later.'},
});

/**
 * GET /meals
 * Returns a list of available meals as JSON.
 * Reads data from data/available-meals.json.
 * Rate limited to 100 requests per 15 minutes per IP.
 */
app.get('/meals', rateLimiter, async (req, res) => {
    const meals = await fs.readFile('./data/available-meals.json', 'utf8');
    res.json(JSON.parse(meals));
});

/**
 * POST /orders
 * Receives a new order and saves it.
 * Expects an order object in the request body with customer and items info.
 * Returns 400 if required data is missing or invalid.
 * Rate limited to 100 requests per 15 minutes per IP.
 */
app.post('/orders', rateLimiter, async (req, res) => {
    const orderData = req.body.order;

    if (orderData === null || orderData.items === null || orderData.items.length === 0) {
        return res
            .status(400)
            .json({message: 'Missing data.'});
    }

    if (
        orderData.customer.email === null ||
        !orderData.customer.email.includes('@') ||
        orderData.customer.fullName === null ||
        orderData.customer.fullName.trim() === '' ||
        orderData.customer.street === null ||
        orderData.customer.street.trim() === '' ||
        orderData.customer.postalCode === null ||
        orderData.customer.postalCode.trim() === '' ||
        orderData.customer.city === null ||
        orderData.customer.city.trim() === ''
    ) {
        return res.status(400).json({
            message:
                'Missing data: Email, name, street, postal code or city is missing.',
        });
    }

    const newOrder = {
        ...orderData,
        id: (Math.random() * 1000).toString(),
    };
    const orders = await fs.readFile('./data/orders.json', 'utf8');
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);
    await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
    res.status(201).json({message: 'Order created!'});
});

app.use((req, res) => {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    res.status(404).json({message: 'Not found'});
});

app.listen(3000);
