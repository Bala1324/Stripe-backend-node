var express = require('express');
const stripe = require('stripe')('sk_test_51JU7zhSJFCCnwNP2Ore92CfvCuGFlKBvswATvpwL22qDN1h4E98FUqiYpuyTqrM5MGq82URK0UV81iIXzAqXGYLg00OjTWS1o4');
var app = express();

app.listen(6000, function () {
    console.log("server running");
});

//create new customer

var createCustomer = function () {
    var param ={};
    param.email ="mike@gmail.com";
    param.name="Mike";
    param.description ="from node";

    stripe.customers.create(param, function (err,customer) {
        if(err)
        {
            console.log("err: "+err);
        }if(customer)
        {
            console.log("success: "+customer)
        }else{
            console.log("Something wrong")
        }
    })

}

createCustomer();

var retrieveCustomer = function () {

    stripe.customers.retrieve("cus_K99r4p1Ssgg1jt", function (err,customer) {
        if(err)
        {
            console.log("err: "+err);
        }if(customer)
        {
            console.log("success: "+JSON.stringify(customer, null, 2));
        }else{
            console.log("Something wrong")
        }
    })
}
retrieveCustomer();
