import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  key: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('valid-sensor-ngork-url', UrlSchema);
