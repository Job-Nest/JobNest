import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';
import Link from 'next/link';
import { Job } from '@/utils/types'

// request to server to get jobs from backend
const getJobs = async () => {
  const res = await fetch('http://localhost:3000/api/jobs', {cache: "no-store"})
  return res.json()
}

export default async function JobListing() {

  const { jobs } = await getJobs()

  return (
    <>
          {jobs.map((job: Job) => (
            <div className='p-4 border border-slate-300 flex justify-between items-center '>
            <div>
              <div>
            <div>{job.title}, {job.company_name}</div>
            </div>
            </div>
            <div>
              <RemoveBtn />
              <Link href={`/editJob/${job._id}`}>Edit</Link>
            </div>
          </div>
          ))}
      
    </>
  );
}
