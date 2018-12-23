const mongoose = require('mongoose');
mongoose.connect('mongodb://mcdonald:anhlocanh97@ds141674.mlab.com:41674/mcdonald_db', {
    useNewUrlParser: true
});
/* var StoreSchema = new mongoose.Schema({
    id: Number,
    time: ['08:00', '08:15', '08:30', '08:45', '09:00'],
    today: {
        tb1: {
            id: String,
            user: ['hoanganh', 'hoanganh',],
            status : [true, true, true, true, false]
        },
        tb2: {},
        tb3: {},
    },
    tomorrow: Object,
    thatday: Object
});


var booking = [
    {
        id : String,
        user : String,
        id_store : String,
        time: '',
    },{}
] */