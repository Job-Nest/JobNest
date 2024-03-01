import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';
import Link from 'next/link';

export default function JobListing() {
  return (
    <>
      <div className='p-4 border border-slate-300 flex justify-between items-center '>
        <div>
          <div>Job Listing</div>
        </div>
        <div>
          <RemoveBtn />
          <Link href='/editJob/1'>Edit</Link>
        </div>
      </div>
    </>
  );
}
