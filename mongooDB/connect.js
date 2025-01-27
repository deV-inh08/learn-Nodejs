const { MongoClient } = require('mongodb')
require('dotenv').config()
const uri = "mongodb+srv://vinh:301108@cluster0.fjotu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// const client = new MongoClient(uri)

// fucntion
// async function run() {
//     try {
//         client.connect()
//         client.db().command({ ping: 1 })
//         console.log('Ping is connected MongooDB successfully')
//     } catch(error) {
//         console.log("Error:", error)
//     }
// }

// convert function to class
class DatabaseServices {
    constructor() {
        this.client = new MongoClient(uri);
        this.db = this.client.db(process.env.DB_NAME)
    }

    async connect() {
        try {
            await this.client.connect();
            this.db.command({ ping: 1 })
            console.log('Hello world! MongoDB đã kết nối thành công.')
        } catch(error) {
            console.log('Error:', error)
        }
    }

    async disconnect() {
        try {
            this.client.close()
            console.log('Closed connect MongoDB')
        } catch(error) {
            console.log('Error:', error)
        }
    }

    get products() {
        return this.db.collection(process.env.DB_PRODUCTS_COLLECTIONS)
    }
};

const databaseServices = new DatabaseServices() 

module.exports = {
    databaseServices
}