const express = require("express");
const app = express();
//---------- Port selection --------------
const port = process.env.PORT || 3000;
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
//------------ Middlewares --------------
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Rural AgroCommerce Server is Up and Running");
});
//----------- MongoDB Connection URI ------------------
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.ypezjyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    client.connect();

    // ------------- Database Collections --------------------
    const demoProductsCollection = client
      .db("RuralAgroCommerceDB")
      .collection("demoProducts");

    const usersCollection = client
      .db("RuralAgroCommerceDB")
      .collection("users");

    const farmersCollection = client
      .db("RuralAgroCommerceDB")
      .collection("farmers");

    const buyersCollection = client
      .db("RuralAgroCommerceDB")
      .collection("buyers");

    const managersCollection = client
      .db("RuralAgroCommerceDB")
      .collection("managers");

    const farmerProductsCollection = client
      .db("RuralAgroCommerceDB")
      .collection("farmerProducts");

    const cartCollection = client
      .db("RuralAgroCommerceDB")
      .collection("productCarts");

    const orderCollection = client
      .db("RuralAgroCommerceDB")
      .collection("buyerOrders");

    //------------- APIs ----------------
    // ----------------------User APIs -----------------------------

    //----------------- All User Info Get API -----------------------
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // --------------------- Specific User (Farmer,Buyer,Manager,Admin) Info Get API ------------------------
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    //----------------- All User Info Post API -----------------------
    app.post("/users", async (req, res) => {
      const userInfo = req.body;
      // console.log(userInfo);
      const query = { email: userInfo.email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send("User already exist in UsersDB");
      } else {
        const result = await usersCollection.insertOne(userInfo);
        res.send(result);
      }
    });

    //----------------- All User Profile Info Update API -----------------------
    app.patch("/usersProfileUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateInfo = req.body;
      const filter = { _id: new ObjectId(id) };
      console.log("User Info Update API hitting");
      console.log(updateInfo);
      const updateDoc = {
        $set: {
          name: updateInfo.name,
          mobileNumber: updateInfo.mobileNumber,
          photo: updateInfo.photo,
        },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // -------------------- User Info Delete API ---------------
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log("User Delete APi Hit");
      const result = await usersCollection.deleteOne(filter);
      res.send(result);
    });

    // ------------------ Users Buyer Role Check API ------------------
    app.get("/users/buyer/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const result = { buyer: user?.role === "Buyer" };
      res.send(result);
    });

    // ------------------Users Manager Role Check API -----------------
    app.get("/users/manager/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const result = { manager: user?.role === "Manager" };
      res.send(result);
    });

    // -------------------- Users Admin Role Check API --------------
    app.get("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const result = { admin: user?.role === "Admin" };
      res.send(result);
    });
    //---------------------- Farmer APIs  ----------------------
    // ------------ Farmer Info Post API ------------------
    app.post("/farmers", async (req, res) => {
      const farmerInfo = req.body;
      // console.log(farmerInfo);
      const query = { email: farmerInfo.email };
      const existingFarmer = await farmersCollection.findOne(query);
      if (existingFarmer) {
        return res.send("Farmer already exist in the FarmerDB");
      } else {
        const result = await farmersCollection.insertOne(farmerInfo);
        res.send(result);
      }
    });
    // --------------- Farmer Info Get API -------------
    app.get("/farmers/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await farmersCollection.findOne(query);
      res.send(result);
      // console.log(result);
    });
    // ----------------- Farmer Profile Info Update API ------------------
    app.patch("/farmersProfileUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateInfo = req.body;
      // console.log("farmer Update Patch Api hitting");
      // console.log(updateInfo);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          name: updateInfo.name,
          mobileNumber: updateInfo.mobileNumber,
          photo: updateInfo.photo,
        },
      };
      const result = await farmersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // -------------------- Farmer Profile Delete API --------------------
    app.delete("/farmerDelete/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      console.log("Farmer Delete APi Hit");
      const result = await farmersCollection.deleteOne(query);
      res.send(result);
    });

    // -------------------------- Farmer Products Get API ------------------------
    app.get("/farmerProducts/:email", async (req, res) => {
      const email = req.params.email;
      const query = { farmerEmail: email };
      const cursor = farmerProductsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // --------------------- Farmer Products Add API ------------------
    app.post("/farmerProducts", async (req, res) => {
      const productsInfo = req.body;
      console.log("Product Add Api Hitting");
      const result = await farmerProductsCollection.insertOne(productsInfo);
      res.send(result);
    });

    // ----------------------------- Specific Farmer Product info Get API ---------------------
    app.get("/farmerProduct/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log("Specific Product Get API Hitting");
      const cursor = farmerProductsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // ----------------------------- Specific Farmer Product Info Update API ---------------------
    app.patch("/farmerProduct/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedInfo = req.body;
      console.log("Product Update API Hitting");
      const updatedDoc = {
        $set: {
          productName: updatedInfo.productName,
          productDescription: updatedInfo.productDescription,
          productQuantity: updatedInfo.productQuantity,
          productCategory: updatedInfo.productCategory,
          productUnit: updatedInfo.productUnit,
          productImage: updatedInfo.productImage,
          productPrice: updatedInfo.productPrice,
        },
      };
      const result = await farmerProductsCollection.updateOne(
        filter,
        updatedDoc
      );
      res.send(result);
    });

    // ----------------------------- Specific Farmer Product Info Delete API ---------------------
    app.delete("/farmerProductDelete/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log("Specific Product Delete API Hitting");
      const result = await farmerProductsCollection.deleteOne(filter);
      res.send(result);
    });

    //---------------------- Buyer APIs ----------------------

    // ------------ Buyer Info Post API ------------------
    app.post("/buyers", async (req, res) => {
      const buyerInfo = req.body;
      // console.log(buyerInfo);
      const query = { email: buyerInfo.email };
      const existingBuyer = await buyersCollection.findOne(query);
      if (existingBuyer) {
        return res.send("Buyer already exist in the BuyerDB");
      } else {
        const result = await buyersCollection.insertOne(buyerInfo);
        res.send(result);
      }
    });

    // --------------- Buyer Info Get API ----------------
    app.get("/buyers/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await buyersCollection.findOne(query);
      res.send(result);
    });

    // ----------------- Buyer Profile Info Update API ------------------
    app.patch("/buyersProfileUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateInfo = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          name: updateInfo.name,
          mobileNumber: updateInfo.mobileNumber,
          photo: updateInfo.photo,
        },
      };
      const result = await buyersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // -------------------- Buyer Profile Delete API --------------------
    app.delete("/buyerDelete/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      console.log("Buyer Delete APi Hit");
      const result = await buyersCollection.deleteOne(query);
      res.send(result);
    });

    // ----------------------Buyer Specific Cart Items Get API --------------------
    app.get("/cart/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    // -------------------- Buyer Cart Item Post API -------------------
    app.post("/cart", async (req, res) => {
      const cartItem = req.body;
      console.log("Cart Post Api Hitting");
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    // ----------------------- Buyer Cart  Specific Product Quantity Update API --------------------
    app.patch("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const cartItem = req.body;
      console.log("Cart Quantity Update API Hitting ");
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          quantity: cartItem.quantity,
        },
      };
      const result = await cartCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // ----------------------- Buyer Cart Specific Item Delete API ----------------------
    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log("Cart item delete API Hitting");
      const result = await cartCollection.deleteOne(filter);
      res.send(result);
    });

    // -------------------- Buyer Cart Specific Product Info Get API ----------------------
    app.get("/cartProduct/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      // console.log("Cart Product API Hitting ");
      const result = await cartCollection.findOne(filter);
      res.send(result);
    });

    // ------------------------ Buyer Orders Post API --------------------
    app.post("/orders", async (req, res) => {
      const orderInfo = req.body;
      console.log("Order Info Post API Hitting");
      const result = await orderCollection.insertOne(orderInfo);
      res.send(result);
    });

    // ------------------------- Buyer Orders Info Get API --------------------
    app.get("/orders/:email", async (req, res) => {
      const email = req.params.email;
      const query = { buyerEmail: email };
      console.log("Buyer Specific Order Info Get API Hitting");
      const result = await orderCollection.find(query).toArray();
      res.send(result);
    });

    // ------------------------- Buyer Specific Order Info Get API --------------------
    app.get("/order/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      // console.log("Specific Order Item Info Get API Hitting");
      const result = await orderCollection.findOne(filter);
      res.send(result);
    });

    // --------------------- Buyer Cart Product Status Update API -------------------
    app.patch("/cartStatus/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Cart Product Status Update API Hitting ");
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: "confirmed",
        },
      };
      const result = await cartCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // ----------------- Manager APIs ------------------------

    // ------------  Manager Info Post API ------------------
    app.post("/managers", async (req, res) => {
      const managerInfo = req.body;
      // console.log(managerInfo);
      const query = { email: managerInfo.email };
      const existingManager = await managersCollection.findOne(query);
      if (existingManager) {
        return res.send("Manager already exist in the ManagerDB");
      } else {
        const result = await managersCollection.insertOne(managerInfo);
        res.send(result);
      }
    });

    // --------------- Manager Info Get API ----------------
    app.get("/managers/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await managersCollection.findOne(query);
      res.send(result);
    });

    // ----------------- Manager Profile Info Update API ------------------
    app.patch("/managersProfileUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const updateInfo = req.body;
      console.log("manager patch API Hitting ");
      console.log(updateInfo);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          name: updateInfo.name,
          mobileNumber: updateInfo.mobileNumber,
          photo: updateInfo.photo,
        },
      };
      const result = await managersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // -------------------- Manager Profile Delete API --------------------
    app.delete("/managerDelete/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      console.log("Manager Delete APi Hit");
      const result = await managersCollection.deleteOne(query);
      res.send(result);
    });

    // ------------------------ Manager Location-wise Product Listing Pipeline Get API -----------------------
    app.get("/managerProductListing/:location", async (req, res) => {
      const location = req.params.location;
      const query = { farmerLocation: location };
      const cursor = farmerProductsCollection.find(query);
      const allProducts = await cursor.toArray();
      const pendingProducts = allProducts.filter(
        (product) => product.status === "Pending"
      );
      res.send(pendingProducts);
    });

    // ------------------------ Manager Inventory Product Get API -----------------------
    app.get("/managerInventoryProducts/:location", async (req, res) => {
      const location = req.params.location;
      const query = { farmerLocation: location };
      const cursor = farmerProductsCollection.find(query);
      const allProducts = await cursor.toArray();
      const pendingProducts = allProducts.filter(
        (product) => product.status === "Approved"
      );
      res.send(pendingProducts);
    });

    // --------------------- Manager Products Status Updates API ----------------------
    app.patch("/managerProductStatusUpdate/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          status: "Approved",
        },
      };
      const result = await farmerProductsCollection.updateOne(
        filter,
        updatedDoc
      );
      res.send(result);
    });

    // ------------------------- Manager's Warehouse Specific Order Details Info API -------------------
    app.get("/managerOrderView/:location", async (req, res) => {
      const location = req.params.location;
      const query = { warehouseLocation: location };
      // console.log("Warehouse Location wise Order Info API Hitting");
      const cursor = orderCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // ---------------------- Manager Order Delivery Status Update API -----------------------
    app.patch("/orderDeliveryStatus/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log("Delivery Status Updates API Hitting");
      const updatedDoc = {
        $set: {
          deliveryStatus: "Delivered",
        },
      };
      const result = await orderCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    //---------------- All Approved Products Get  API  --------------------
    app.get("/products", async (req, res) => {
      const cursor = farmerProductsCollection.find();
      const allProducts = await cursor.toArray();
      const result = allProducts.filter(
        (product) => product.status === "Approved"
      );
      res.send(result);
    });

    //---------------- Demo Products APIs --------------------
    app.get("/demoProducts", async (req, res) => {
      const cursor = demoProductsCollection.find();
      const result = await cursor.toArray();
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

//--------------- Trend Products data API -----------------
const trendProducts = require("./trendProducts.json");
app.get("/trendProducts", (req, res) => {
  res.send(trendProducts);
});

app.listen(port, () => {
  console.log(`Rural AgroCommerce Server is running on PORT: ${port}`);
});
