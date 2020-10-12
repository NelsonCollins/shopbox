const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hb7dfAbqWokr4jsN1F7g3M3ZJ0NyxKmB7Pf1cZZqprMTrCI0ihzQpLLiJU1O6W4gecW9HMfrThFyY2aYuMs2cHY00g1abln1X');

//API SETUP

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!! for this amount >>>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of the currency
        currency: "usd",
    });

    //OK -Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/shopbox-8c5f7/us-central1/api
