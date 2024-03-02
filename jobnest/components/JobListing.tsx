import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';
import Link from 'next/link';


const jobListings = [];

const getJobListings = async () => {
  const res = await fetch('http://localhost:3000/api/jobs', { cache: 'no-store' })
  const data = await res.json();
  const {jobs} = data;
  console.log('Jobs:', jobs);
  jobs.map(job => jobListings.push(
    <div className='p-4 border border-slate-300 flex justify-between items-center' key={crypto.randomUUID}>
      <div>
        {job.title} {job.company_name}
      </div>
      <div>
      <RemoveBtn />
      <Link href='/editJob/1'>Edit</Link>
      </div>
    </div>  
    ))
}

getJobListings();

export default function JobListing() {
  return (
    <>
      <div className='p-4 border border-slate-300 flex justify-between items-center '>
        <div>
          <div>Job Listing</div>
        </div>
      </div>
          {jobListings}
    </>
  );
}
