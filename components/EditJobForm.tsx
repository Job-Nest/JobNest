'use client'

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

type HTMLInputType = React.FormEvent<HTMLFormElement>

export default function EditJobForm() {

  const [date, setDate] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [company_name, setCompanyName] = useState<string>('');
  const [app_status, setAppStatus] = useState<string>('');
  const [last_action, setLastAction] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [app_url, setAppUrl] = useState<string>('');

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

      setDate('');
      setTitle('');
      setCompanyName('');
      setAppStatus('');
      setLastAction('');
      setSource('');
      setAppUrl('');

      if (data.status === 200){
        router.push('/')
        router.refresh();
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
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setDate(e.currentTarget.value)}} value={date}placeholder='Updated Date'></input>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setTitle(e.currentTarget.value)}} value={title} placeholder='Updated Job Title'></input>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setAppStatus(e.currentTarget.value)}} value={app_status}placeholder='Updated Application Status'></input>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setLastAction(e.currentTarget.value)}} value={last_action}placeholder='Updated Last Action'></input>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setSource(e.currentTarget.value)}} value={source}placeholder='Updated Source'></input>
        <input className='p-2 border border-slate-300' type='text' onChange={e => {setAppUrl(e.currentTarget.value)}} value={app_url}placeholder='Updated Application URL'></input>
        <button className='p-2 border border-slate-300'>Update Job</button>
      </form>
    );
  }