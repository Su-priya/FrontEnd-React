let express = require("express"),
cors = require("cors"),
mongoose = require("mongoose");
 
let app = express();
let handleErrors = function(err){
    console.log("Error : ",err);
}
//----------------------
    app.use(cors());
    app.use(express.json());
//----------------------
let Schema = mongoose.Schema;
let  ObjectId = Schema.ObjectId;
let Hero = mongoose.model("Hero", new Schema({
    id : ObjectId,
    firstname : String, 
    lastname : String, 
    power : Number, 
    city : String
}));
let dataurl = "";
 
mongoose.connect(dataurl)
.then(
    () => {
        console.log("DB Connected")
    },
    (error) => {
        handleErrors(error);
    }
);
//----------------------
// READ
app.get("/data", function(req, res){
    Hero.find( function(error, hero){
        if(error){
            handleErrors(error);
        }else{
            res.json(hero);
        }
    })
});
// CREATE
app.post("/data", function(req, res){
    let hero = new Hero(req.body);
    hero.save().then(
        () => {
            res.status(200).send("Hero was added in to Database");
        },
        (error) => {
            handleErrors(error);
            res.status(400).send("Database update failed");
        }
    )
});
// DELETE
app.delete('/delete/:id', function(req, res){
    Hero.findByIdAndDelete({ _id : req.params.id }, function(error, hero){
        if(error){
            handleErrors(error);
        }else{
            res.send("Hero Removed");
        }
    })
});
// REQUEST TO UPDATE
app.get("/edit/:id", function(req, res){
    // console.log(req.params.id);
    Hero.findById(req.params.id, function(error, hero){
        if(error){
            handleErrors(error);
        }else{
            res.json(hero);
        }
    })
});
// UPDATE
app.post("/edit/:id", function(req, res){
    Hero.findById(req.params.id, function(error, hero){
        hero.firstname = req.body.firstname; 
        hero.lastname = req.body.lastname; 
        hero.power = req.body.power; 
        hero.city = req.body.city; 
        hero.save().then( hero => {
            res.json(hero);
        }).catch( () => {
            res.status(400).send("Unable to save the hero");
        })
    })
});
//----------------------
app.listen(2525, "localhost", function(error){
    if(error){
        handleErrors(error);
    }else{
        console.log("server is now live on localhost:2525");
    }
})