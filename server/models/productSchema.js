const mongoose = require("mongoose");
const express = require('express');
const app = express();
const UserSchema = new mongoose.Schema({
  
  formContain: {
    type: String,
    default: 0,
  },
  productName: {
    type: String,
    default: 0,
  },
  barcode: {
    type: String,
    default: 0,
  },
  createdDate: {
    type: String,
    default: 0,
  },
  expiredDate: {
    type: String,
    default: 0,
  },
  price: {
    type: String,
    default: 0,
  },
  quantity: {
    type: String,
    default: 0,
  }
});

const User = mongoose.model("product", UserSchema);

module.exports = User;