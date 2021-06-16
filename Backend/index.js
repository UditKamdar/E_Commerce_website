const express = require('express');
const app = express(),
  bodyParser = require("body-parser");
port = 3080;


require('./Models/db');
var router = express.Router();

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/api/hello', (req, res) => {

  // trial.find((err, docs) => {
  //     if (!err) {
  //       console.log(docs);
  //     }
  //     else {
  //         console.log('Error in retrieving employee list :' + err);
  //     }
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }
    var nodtst = databases.db("super_market");

    nodtst.collection("product").find(function (err, result) {
      if (err) throw err;
      console.log("Working");
      console.log("depppppoooooo")

      databases.close();
    })
       res.send("hiii")
  })

});

app.get('/kevin', (req, res) => {
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }

    var nodtst = databases.db("super_market");
    nodtst.collection("product").find({}).toArray(function (err, totalpract) {
      if (err) throw err;

      console.log(totalpract);
      console.log(totalpract[1]);
      for (i = 0; i < totalpract.length; i++) {
        let pract = totalpract[i];
        console.log("Working");
        console.log(pract.Product_Name);
        console.log(pract);
      }


      res.send(totalpract);
      //console.log(result);  
      databases.close();
    });
  });

});

app.get('/flours', (req, res) => {
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }
    var pract;
    var p;
    var nodtst = databases.db("super_market");
    nodtst.collection("product").find({ category: "Flour" }).toArray(function (err, totalpract) {
      if (err) throw err;

      p = totalpract[0];
      // console.log(totalpract);
      // console.log(totalpract[1]);
      for (i = 0; i < totalpract.length; i++) {
        let pract = totalpract[i];
        //    console.log("Working");
        // // console.log(pract.Product_Name);
        // console.log(pract);
      }
      console.log(p);
      //  res.render("t", { pract : p })
      res.sendfile("hello.html");
      //console.log(result);  
      databases.close();
    });
  });

});


app.get('/api/fruits', (req, res) => {
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }
    var pract ;
    var nodtst = databases.db("super_market");
    nodtst.collection("product").find({ category: "Fruit" }).toArray(function (err, totalpract) {
      if (err) throw err;

     
      console.log(totalpract[1]);
      for (i = 0; i < totalpract.length; i++) {
        pract = totalpract[i];
        console.log("Working kevin");
        
      }
       
      console.log(pract)
      res.send( totalpract);

      //console.log(result);  
      databases.close();
    });
  });

});
app.get('/vegetables', (req, res) => {
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }

    var nodtst = databases.db("super_market");
    nodtst.collection("product").find({ category: "Vegetable" }).toArray(function (err, totalpract) {
      if (err) throw err;

      console.log(totalpract);
      console.log(totalpract[1]);
      for (i = 0; i < totalpract.length; i++) {
        let pract = totalpract[i];
        console.log("Working");
        console.log(pract.Product_Name);
        console.log(pract);
      }


      res.send(totalpract);

      //console.log(result);  
      databases.close();
    });
  });

});
app.get('/pulses', (req, res) => {
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }

    var nodtst = databases.db("super_market");
    nodtst.collection("product").find({ category: "Pulses" }).toArray(function (err, totalpract) {
      if (err) throw err;

      console.log(totalpract);
      console.log(totalpract[1]);
      for (i = 0; i < totalpract.length; i++) {
        let pract = totalpract[i];
        console.log("Working");
        console.log(pract.Product_Name);
        console.log(pract);
      }


      res.send(totalpract);
      //console.log(result);  
      databases.close();
    });
  });

});
app.get('/spices', (req, res) => {
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }

    var nodtst = databases.db("super_market");
    nodtst.collection("product").find({ category: "Spices" }).toArray(function (err, totalpract) {
      if (err) throw err;

      console.log(totalpract);
      console.log(totalpract[1]);
      for (i = 0; i < totalpract.length; i++) {
        let pract = totalpract[i];
        console.log("Working");
        console.log(pract.Product_Name);
        console.log(pract);
      }



      res.send(totalpract);
      //console.log(result);  
      databases.close();
    });
  });

});
app.get('/checkout', (req, res) => {
  MongoClient.connect(url, function (error, databases) {
    if (error) {
      throw error;

    }

    var Turmeric = 2;
    var Cinnamon = 3;
    var nodtst = databases.db("super_market");
    nodtst.collection("product").find({ category: "Spices", name: "Turmeric" }).toArray(function (err, totalpract) {
      if (err) throw err;

      console.log(totalpract);

      console.log(totalpract[0].quantity);

      var a = totalpract[0].quantity - Turmeric;
      console.log(a);

      nodtst.collection("product").updateMany({ category: "Spices", name: "Turmeric" }, { $set: { quantity: a } }, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        console.log("Query Updated")
        databases.close();
      });


      res.send(totalpract);
      //console.log(result);  
      databases.close();
    });
  });

});





// app.get('/api/users', (req, res) => {
//   console.log('api/users called!!!!')
//   res.json(users);
// });

app.get('/api/udit', (req, res) => {
  console.log('api/users called!!!!');
  console.log("Udit Kevin Done dona doannknfknkfndskn")
  res.json("kddkndkn");
});

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user::::::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});