const express = require('express');
const mongoose = require('mongoose');

const app = express()


mongoose.connect(
    //'mongodb+srv://Matheus:Matheus@inline-ami3p.mongodb.net/Inline?retryWrites=true&w=majority',
    'mongodb+srv://GabrielDourado:GD15358987@cluster0-zs5xf.gcp.mongodb.net/PetCareDay?retryWrites=true&w=majority',
    {useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true}
)

module.exports = app