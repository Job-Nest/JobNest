import React, { ButtonHTMLAttributes } from 'react';
import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';
import Link from 'next/link';
import { Job } from '../utils/types';


const getJobListings = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/jobs', {
      cache: 'no-store',
    });
    const data = await res.json();
 
    return data;
  } catch (err) {
    console.error('Unable to load job listings');
  }
};

export default async function JobListing() {
  const { jobs } = await getJobListings();
  console.log('jobs:', jobs);

  return (
    <>
          {jobs.map((job: Job) => (
            <div className='p-4 border border-slate-300 flex justify-between items-center'  key={crypto.randomUUID()}>
              <>
                
                 
                {job.date}, {job.title}, {job.company_name}, {job.last_action}, {job.source}, {job.app_url}
                 
                
              </>
              <div>
                <RemoveBtn id={job._id} />
                <Link href={`/editJob/${job._id}`} >Edit</Link>
            
              </div>
            </div>
          ))}
    </>
  );
}
