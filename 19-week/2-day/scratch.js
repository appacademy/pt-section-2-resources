const express = require("express");

const app = express();

app.use(express.json());

let foodCheckingMiddleware = (req, res, next) =>{
 console.log(req.params)
if (req.params.food !== "taco"){
  res.send("That's not a taco")
}
  next()
}



app.get("/:food", foodCheckingMiddleware, (request, response) =>{
  let {food} = request.params
  response.json({food: food})
})



let port = 3000;

app.listen(port, () => console.log(`We're running on port: ${port}`));
