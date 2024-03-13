import React, { ButtonHTMLAttributes } from 'react';
import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';
import Link from 'next/link';

interface Job {
  title: string,
  company_name: string,
  _id: number
}

const jobListings: React.ReactElement<string>[] = [];

const getJobListings = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/jobs', { cache: 'no-store' });
    const data = await res.json();
    const {jobs} = data;
    jobs.map((job: Job) => {
      jobListings.push(
      <div className='p-4 border border-slate-300 flex justify-between items-center' key={crypto.randomUUID()}>
        <div>
          {job.title} {job.company_name}
        </div>
        <div>
        <RemoveBtn />
        <Link href={`/editJob/${job._id}`}>Edit</Link>
        </div>
      </div>  
      )})
    }
    catch (err) {
      console.error('Unable to load job listings')
    }
}

getJobListings();

export default async function JobListing() {

  const { jobs } = await getJobs()

  return (
    <>
      <div className='p-4 border border-slate-300 flex justify-between items-center'>
        <div>
          <div>Job Listing</div>
        </div>
      </div>
          {jobListings}
    </>
  );
}
