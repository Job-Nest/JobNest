import mongoose, { Schema } from 'mongoose';

const jobSchema = new Schema(
  {
    date: { 
      type: Date, 
      default: Date.now 
    },
    title: String,
    company_name: String,
    last_action: String,
    source: String,
    app_url: String
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;
