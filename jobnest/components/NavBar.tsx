import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <div className='text-white font-bold'>navbar</div>
      <Link className='text-white font-bold' href={'/addJob'}>
        Add test
      </Link>
    </div>
  );
}
