const express = require("express");
const Router = express.Router();
var db = require('../config/connection');

app.get('/logout',(request, response) => {
    if (request.session.member) {
                delete request.session.member;
        response.json({result: 'Successfully logged Out!'});
    } else {
        response.json({result: 'ERROR', message: 'User is not logged in.'});
    }
});