'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditJobForm() {
  
  const [title, setTitle] = useState('');
  const [company_name, setCompanyName] = useState('');
  const router = useRouter();

  const editJob = async (e) => {
    try{
      e.preventDefault();
      console.log('title:', title);
      console.log('company_name:', company_name);

      const data  = await fetch('http://localhost:3000/api/jobs', 
      { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'newTitle': title, 'newCompanyName': company_name})
      })
      const res = await data.json();
      setTitle('');
      setCompanyName('');
      if (res.status === 200){
        router.push('/jobs')
      }
    }
    catch (err) {
      console.error('Unable to update information')
    }
  }

    return (
      <form className='p-4 border border-slate-300 flex' onSubmit={editJob}>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setTitle(e.currentTarget.value)}} value={title} placeholder='Updated Job Title'></input>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setCompanyName(e.currentTarget.value)}} value={company_name}placeholder='Updated Company Name'></input>
        <button className='p-2 border border-slate-300'>Update Job</button>
      </form>
    );
  }