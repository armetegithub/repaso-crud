const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema

const parkSchema = new Schema(
    {
      
      name: String,
      description: String,
      inversions: Boolean,
   
  
    },
  
    {
      timestamps: true
    }
  );
//   const Park = mongoose.model("coaster", parkSchema);
//   module.exports = Park;

module.exports = mongoose.model('Park', parkSchema)