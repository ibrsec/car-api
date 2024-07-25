const mongoose  = require("mongoose");
const { Car } = require("../models/carModel");

module.exports.carController = {
  list: async (req, res) => {
    const cars = await Car.find();
    res.status(200).json({
      error: false,
      message: "Cars are listed!",
      result: cars,
    });
  },
  create: async (req, res) => {
    const { make, model, year, color, status } = req.body;

    // if(make && model && year && color && status){

    //   if(year >1950){

    //     const newCar = await Car.create({
    //       make,model,year,color,status
    //     })

    //   }else{
    //     res.status(400);
    //     throw new Error('Year cant be greater than 1950!')

    //   }

    // }else{
    //   res.status(400);
    //   throw new Error('All fields are mandatory!')
    // }

    if (!make || !model || !year || !color || !status) {
      res.status(400);
      // res.errorStatusCode = 400
      throw new Error(
        "All fields are mandatory! - [make, model, year, color, status]"
      );
    }

    // if (year <= 1950) {
    //   res.status(400);
    //   throw new Error("Year cant be greater than 1950!");
    // }

    const newCar = await Car.create({ make, model, year, color, status });

    res.status(201).json({
      error: false,
      message: "car created!",
      result: newCar,
    });
  },

  read: async (req, res) => {
    const paramId = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(paramId)){
      
      res.status(400);
      throw new Error("Invalid id type!");
    }



    const car = await Car.findOne({ _id: req.params.id });
    if (!car) {
      res.status(404);
      throw new Error("Car not found!");
    }

    res.status(200).json({
      error: false,
      message: "your car is here!",
      result: car,
    });
  },
  update: async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
      
      res.status(400);
      throw new Error("Invalid id type!");
    }


    const { make, model, year, color, status } = req.body;
    if (!make || !model || !year || !color || !status) {
      res.status(400);
      // res.errorStatusCode = 400
      throw new Error(
        "All fields are mandatory! - [make, model, year, color, status]"
      );
    }

    const car = await Car.findOne({_id:req.params.id});
    if(!car){
      res.status(404);
      // res.errorStatusCode = 400
      throw new Error(
        "car not found to update!"
      );
    }



    const data = await Car.updateOne({_id:req.params.id},{make, model, year, color, status})



if(data.modifiedCount < 1){
  res.status(500);
  // res.errorStatusCode = 400
  throw new Error(
    "Something went wrong !-coar foudn but couldnt updated! issue at the end!"
  );
}

res.status(202).json({
  error: false,
  message: "the car is updated!",
  result: await Car.findOne({_id:req.params.id}),
});


  },
  delete: async (req, res) => {},
  patchUpdate: async (req, res) => {},
};
