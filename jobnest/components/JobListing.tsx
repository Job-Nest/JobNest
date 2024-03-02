import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { useEffect } from 'react';

const getJobs = async () => {
  try {
    const jobs = await fetch('http://localhost:3000/api/jobs', {
      cache: 'no-store',
    });
    const response = await jobs.json();
    console.log(response);
    return response;
  } catch {
    console.error('Failed to getJobs');
  }
};
export default async function JobListing() {
  const { jobs } = await getJobs();
  console.log(jobs);

  return (
    <>
      {jobs.map((e) => (
        <div className='p-4 border border-slate-300 flex justify-between items-center '>
          <div>
            <div>{e.title}</div>
            <div>{e.company_name}</div>
          </div>
          <div>
            <RemoveBtn />
            <Link href={`/editJob/${e._id}`}>Edit</Link>
          </div>
        </div>
      ))}
      {/* <div className='p-4 border border-slate-300 flex justify-between items-center '>
        <div>
          <div>Job Listing</div>
        </div>
        <div>
          <RemoveBtn />
          <Link href='/editJob/1'>Edit</Link>
        </div>
      </div> */}
    </>
  );
}
