const mongoose = require( 'mongoose' );

const dbUrl = process.env.DB_URL;




mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}, ( err ) => {
        if ( !err ) {
            console.log('Db connection is successfull');
        } else {
            console.log('Db connection failed');
        }
})