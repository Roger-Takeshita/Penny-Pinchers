const mongoose = require('mongoose');       //! Require mongoose
const Schema = mongoose.Schema;             //! Shorthand for mongoose.Schema

const productSchema = new Schema (
    {
        barCode: {
            type: String,
            unique: true
        },
        description: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        kgPoundEa: {
            type: String,
            enum: ["", "$/Kg", "$/Lb", "$Ea"],
            default: ""
        },
        pricePerKgPound: {
            type: Number
        },
        tax: {
            type: Number
        },
        store: {
            type: Schema.Types.ObjectId,
            ref: 'Store',
            required: true
        },
        frequency: {
            type: String,
            enum: ["Monthly", "One Time"],
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        subCategory: {
            type: Schema.Types.ObjectId,
            ref: 'SubCategory',
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);