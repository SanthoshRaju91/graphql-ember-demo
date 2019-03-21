const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    problem: {
        type: String,
        required: true
    },
    problemDescription: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Ticket", TicketSchema);