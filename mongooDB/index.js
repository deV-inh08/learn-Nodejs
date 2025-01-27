// connect MongooDB
const { MongoClient, Db } = require('mongodb')

const uri = "mongodb+srv://vinh:301108@cluster0.fjotu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

// Function
async function run() {
    try {
        await client.connect()
        client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You success connect mongoDb')
    } catch(error) {
        if(error) {
            console.log('Error:', error)
        }
    }
};


// Convert Fucntion to Class
class DatabaseServices {
    constructor() {
        this.client = new MongoClient(uri)
        this.db = this.client.db('test_connect')
    }

    async connect() {
        try {
            await this.db.command({ ping: 1 })
            console.log('Pinged your deployment. You success connect mongoDb')
        } catch(err) {
            console.log('Error:', err)
        }
    }
}
const databaseServices = new DatabaseServices()

databaseServices.connect()
