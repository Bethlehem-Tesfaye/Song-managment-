import  mongoose  from "mongoose";

const DbConnect = async ()=>{
    mongoose.connection.on('connected', ()=>{
        console.log('database connected');
        
    })

    await mongoose.connect(`${process.env.MONGODB_URL}`)
}

export default DbConnect;