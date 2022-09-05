const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://i_m_datt:<password>@cluster0.1ve9b8c.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = () => {
    mongoose.connect(mongoURL, ()=>{
        console.log('Connected to MongoDB');
    })
};

module.exports = connectToMongo;