import mongoose, { Schema } from 'mongoose';

const jobSchema = new Schema(
  {
    title: String,
    company_name: String,
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;
