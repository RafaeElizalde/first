import mongoose from 'mongoose';
// Desestructurando la function Schema
const { Schema } = mongoose;

// Construir un Schema describe la forma de nuetros datos
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Compilando el esquema para
// generar un modelo
export default mongoose.model('project', ProjectSchema);
