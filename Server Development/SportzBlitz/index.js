const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// JWT
const jwt = require("jsonwebtoken");

// dotenv configuration
require("dotenv").config();
const stripe = require("stripe")(process.env.Payment_Secret_Key);

const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// ----------------------------------
//             Verify JWT
// ----------------------------------

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).send({ error: true, message: "Unauthorized Access" });
  }
  const token = authorization.split(" ")[1];
  // console.log(token);
  jwt.verify(token, process.env.Access_Token_Secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "Unauthorized Access" });
    }
    req.decoded = decoded;
    next();
  });
};

app.get("/", (req, res) => {
  res.send("Sports Blitz camp is going on....");
});

// ----------------------------------
//             DB Connection
// ----------------------------------
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.joz6qi9.mongodb.net/?retryWrites=true&w=majority`;

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

    const usersCollection = client.db("SportsDB").collection("users");
    const instructorsCollection = client
      .db("SportsDB")
      .collection("instructors");
    const classesCollection = client.db("SportsDB").collection("classes");
    const cartCollection = client.db("SportsDB").collection("cart");
    const paymentCollection = client.db("SportsDB").collection("payments");

    // --------------------------------
    //          Verify Admin
    //----------------------------------

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      if (user?.role !== "admin") {
        return res
          .status(403)
          .send({ error: true, message: "Forbidden Access" });
      }
      next();
    };

    // -----------------------------
    //          Users Api
    //------------------------------

    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exist" });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    // -----------------------------
    //      Admin role set Api
    //------------------------------

    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) {
        res.send({ admin: false });
      }
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const result = { admin: user?.role === "admin" };
      res.send(result);
    });

    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await usersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // ---------------------------------
    //      Instructor role set Api
    //----------------------------------

    app.get("/users/instructor/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) {
        res.send({ instructor: false });
      }
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const result = { instructor: user?.role === "instructor" };
      res.send(result);
    });

    app.patch("/users/instructor/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: "instructor",
        },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // ------------------------------
    //       Instructors Api
    //-------------------------------
    app.get("/instructors", async (req, res) => {
      const result = await instructorsCollection.find().toArray();
      res.send(result);
    });

    // -----------------------------
    //      Jwt Api
    //------------------------------

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.Access_Token_Secret, {
        expiresIn: "10h",
      });
      res.send({ token });
    });

    // -----------------------------
    //        classes Api
    //-----------------------------

    app.get("/classes", async (req, res) => {
      const result = await classesCollection.find().toArray();
      res.send(result);
    });

    app.get("/classes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await classesCollection.findOne(query);
      res.send(result);
    });

    app.post("/classes", verifyJWT, async (req, res) => {
      const newClass = req.body;
      const result = await classesCollection.insertOne(newClass);
      res.send(result);
    });

    // ----------------------------------
    //        class status set api
    // ----------------------------------

    app.patch("/classes/approved/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: "approved",
        },
      };
      const result = await classesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.patch("/classes/denied/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: "denied",
        },
      };
      const result = await classesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // ----------------------------------------------------
    //        class available seats and enrolled set api
    // ----------------------------------------------------
    app.patch("/classes/seats/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const desiredClass = await classesCollection.findOne(filter);
      const seats = parseFloat(desiredClass.available_seats);
      const enrolled = parseFloat(desiredClass.total_enrolled);
      // console.log(desiredClass);

      const updateDoc = {
        $set: {
          available_seats: seats - 1,
          total_enrolled: enrolled + 1,
        },
      };
      const result = await classesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    // ----------------------------
    //       Class Feedback api
    // ----------------------------
    app.patch("/classes/:id", async (req, res) => {
      const id = req.params.id;
      const message = req.body;
      console.log(id, message);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          feedback: message.feedback,
        },
      };
      const result = await classesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    //-------------------------------
    //          Class Update Api
    // --------------------------------
    app.patch("/classes/update/:id", async (req, res) => {
      const id = req.params.id;
      const updateClass = req.body;
      console.log(id, updateClass);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          class_name: updateClass.class_name,
          instructor_name: updateClass.instructor_name,
          instructor_email: updateClass.instructor_email,
          price: updateClass.price,
        },
      };
      const result = await classesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // -------------------------------
    //        Class Cart Api
    //--------------------------------

    app.post("/cart", async (req, res) => {
      const selectedClass = req.body;
      const result = await cartCollection.insertOne(selectedClass);
      res.send(result);
    });

    app.get("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.findOne(query);
      res.send(result);
    });

    app.get("/cart", async (req, res) => {
      const email = req.query.email;
      if (!email) {
        res.send([]);
      }
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });
    app.patch("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: "paid",
        },
      };
      const result = await cartCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    //  ----------------------------
    //       Create Payment Intent
    // ------------------------------

    app.post("/create-payment-intent", verifyJWT, async (req, res) => {
      const { value } = req.body;
      const amount = value * 100;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    //  ----------------------------
    //       Payment Api
    // ------------------------------
    app.post("/payments", async (req, res) => {
      const payment = req.body;
      const result = await paymentCollection.insertOne(payment);
      res.send(result);
    });

    app.get("/payments", async (req, res) => {
      const email = req.query.email;
      if (!email) {
        res.send([]);
      }
      const query = { email: email };
      const result = await paymentCollection.find(query).toArray();
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
  console.log("Sports camp is running on port", port);
});
