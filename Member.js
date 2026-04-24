const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    profileImage: { type: String, required: true }
});

module.exports = mongoose.model('Member', MemberSchema);
