'use client'

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

type HTMLInputType = React.FormEvent<HTMLFormElement>

export default function EditJobForm() {

  const [title, setTitle] = useState<string>('');
  const [company_name, setCompanyName] = useState<string>('');

  const router = useRouter();
  const params = useParams();

  const editJob = async (e: HTMLInputType) => {
    try{
      e.preventDefault();
      const data  = await fetch(`http://localhost:3000/api/jobs/${params.id}`, 
      { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'newTitle': title, 'newCompanyName': company_name})
      })

      setTitle('');
      setCompanyName('');

      if (data.status === 200){
        router.push('/')
      } else {
        console.log('Unable to update job listing');
      }
    }
    catch (error) {
      console.error(error)
    }
  }

    return (
      <form className='p-4 border border-slate-300 flex' name='editJob' onSubmit={editJob}>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setTitle(e.currentTarget.value)}} value={title} placeholder='Updated Job Title'></input>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setCompanyName(e.currentTarget.value)}} value={company_name}placeholder='Updated Company Name'></input>
        <button className='p-2 border border-slate-300'>Update Job</button>
      </form>
    );
  }