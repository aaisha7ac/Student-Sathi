const express = require('express');
const userData = require('./user.json')
const fs = require('fs');
const cookie = require('cookie-parser');
const session = require('express-session');
const app = express();
const cors = require('cors');
app.use(cors());



const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://suman:suman@cloudcluster.rff2b.mongodb.net/?retryWrites=true&w=majority&appName=Cloudcluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let db;
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log('mongodb connected')
    db = client.db('StudentSathi');
    // Send a ping to confirm a successful connection
  }catch(err){
    console.log("error found")
    console.log(err)
  }
}
run();



app.use(cookie());
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: "abc"
}))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//Handling endpoints

app.get('/getdata', (req, res) => {
    res.send('Hello I am sending Data');
})
app.post('/getdata/:course', (req, res) => {
    //console.log(req.body);
    fs.readFile(`./data/${req.params.course}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.send({ msg: "Error" });
        }
        else {
            if (req.body.location != 'None') {
                data = JSON.parse(data);
                let colleges = data.filter((value) => {
                    return value.state === req.body.location
                })
                res.send(colleges);
            }
            else {
                res.send(data);
            }
        }
    })

})
<<<<<<< HEAD
app.post('/getRole/:role',(req,res)=>{
   
    fs.readFile(`./roles/${req.params.role}.json`,'utf-8',(err,data)=>{
        if(err){
            res.send({msg:"Error"});
        }
        else{
            res.send(data);
        }
    })
})

app.post('/login',(req,res)=>{
   const user=userData.find((user1)=>user1.username===req.body.username && user1.password===req.body.password);
   if(user){
   req.session.username=user.username;
   req.session.password=user.password;
   console.log("hello");   
   res.send("ok");
}
   else{   
 res.send("no");
}
=======
app.post('/login', async(req, res) => {

    try {
        const userData = req.body;
    const user = await db.collection('user').findOne({ username: userData.username });
    if (user) {
        // If user exists, send success response with username
        res.send({ status: true, username: user.username });
    } else {
        // If user doesn't exist, send failure response
        res.send({ status: false });
    }
    } catch (error) {
        console.error(err);
        res.send({ status: false });
    }
   
>>>>>>> 3b5b705e61773aa09cb61e6ab731d38d7dbd72fb
})

app.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        // Insert the user data into the collection
        await db.collection('user').insertOne(userData);
        // Send success response
        res.send({ status: true });
    } catch (err) {
        console.error(err);
        // Send failure response
        res.send({ status: false });
    } 
});

app.listen(5000, () => {
    console.log("Server running successfully at port 5000");
})
