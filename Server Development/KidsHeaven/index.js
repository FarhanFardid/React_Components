const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

// Middleware

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kids Heaven server is Running....");
});

const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.joz6qi9.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    client.connect();
    const toyCollection = client.db("ToyDB").collection("toys");

    app.get("/toys", async (req, res) => {
      let query = {};
      if (req.query?.sellerEmail) {
        query = { sellerEmail: req.query.sellerEmail };
      }
      const result = await toyCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/toys", async (req, res) => {
      const cursor = toyCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toyCollection.findOne(query);
      res.send(result);
    });

    app.delete("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toyCollection.deleteOne(query);
      res.send(result);
    });

    //  app.put('/toys/:id', async(req,res)=> {
    app.patch("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const upToy = req.body;
      const filter = { _id: new ObjectId(id) };
      // const options ={upsert:true};
      const updateToy = {
        $set: {
          toyName: upToy.toyName,
          price: upToy.price,
          quantity: upToy.quantity,
          details: upToy.details,
        },
      };
      // const result = await toyCollection.updateOne(filter,updateToy,options)
      const result = await toyCollection.updateOne(filter, updateToy);
      res.send(result);
    });

    app.post("/toys", async (req, res) => {
      const newToy = req.body;
      console.log("post api hitting", newToy);
      const result = await toyCollection.insertOne(newToy);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("The kids Heaven server is Running on port: ", port);
});
