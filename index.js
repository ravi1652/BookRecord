const express = require("express"); //To get an express we imported
const app = express(); // To store an application in express
const port = 8081; //To run a port we shld give a port number
const { users }=require("./data/users.json")

app.use(express.json()); //application we are using in json format


app.get("/", (req, res) => {
  // for running Server if it comes to '/'
  res.status(200).json({
    message: "Server is running fine ",
  });
});
/*
Route:/users
Method : GET
Description : GET all the users
Access : public
Parameters : None
*/
app.get("/users",(req,res)=>{
    res.status(200).json({
        success:true,
        data:users,
    })
})

app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route does not exist",
  });
});


app.listen(port, () => {
  //application shld listen on the port
  console.log(`server is running in the ${port}`);
});
