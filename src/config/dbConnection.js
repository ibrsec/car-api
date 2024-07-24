


const mongoose = require('mongoose');



const dbConnect = async() => {
try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('##DB CONNECTED', connect.connection.host, connect.connection.name)
} catch (error) {
    console.log("## DB NOT CONNECTED ##",error.message);
}


// mongoose.connect(process.env.CONNECTION_STRING)
// .then((connect)=> {
//     console.log('##DB CONNECTED', connect.connection.host, connect.connection.name)
// }).catch((err)=>{
//     console.log("## DB NOT CONNECTED ##" ,err.message);
// })


}

module.exports = dbConnect