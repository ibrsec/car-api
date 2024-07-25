
const {Car} = require('../models/carModel');


module.exports.carController = {
  list: async (req, res) => {
    const cars = await Car.find();
    res.status(200).json({
      error:false,message:"Cars are listed!",result:cars
    })
  },
  create: async (req, res) => {},
  read: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
  patchUpdate: async (req, res) => {},
};
 