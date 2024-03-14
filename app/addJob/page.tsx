'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'


export default function addJob() {
  const [date, setDate] = useState('');
  const [title, setJobTitle] = useState('');
  const [company_name, setCompName] = useState('');
  const [style, setStyle] = useState('');
  const [last_action, setLastAction] = useState('');
  const [source, setSource] = useState('');
  const [app_url, setAppUrl] = useState('');

  // post request to server to add job
  const addJob = async (e) => {
    const router = useRouter();
    e.preventDefault()
    try {
    const response = await fetch('http://localhost:3000/api/jobs', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ date, title, company_name, style, last_action, source, app_url })
      })
      if (response.ok) {
        router.push('/'); 
      }
      router.refresh()
    } catch (error) {
      throw new Error("No job lol")
    }
  }
  

    return (
      <form onSubmit={addJob} className="flex justify-center items-center space-x-3 space-x-2 space-y-4">
        <input
        type='text'
        value={date} 
        placeholder='Date'
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <input
        type='text'
        value={title} 
        placeholder='Job Title'
        onChange={(e) => setJobTitle(e.target.value)}
      ></input>
      <input
        type='text'
        value={company_name} 
        placeholder='Company Name'
        onChange={(e) => setCompName(e.target.value)}
      ></input>
      <input
        type='text'
        value={style} 
        placeholder='Style'
        onChange={(e) => setStyle(e.target.value)}
      ></input>
      <input
        type='text'
        value={last_action} 
        placeholder='Last Action'
        onChange={(e) => setLastAction(e.target.value)}
      ></input>
      <input
        type='text'
        value={source} 
        placeholder='Source'
        onChange={(e) => setSource(e.target.value)}
      ></input>
      <input
        type='text'
        value={app_url} 
        placeholder='App URL'
        onChange={(e) => setAppUrl(e.target.value)}
      ></input>
        <button type='submit' className="px-2 py-1 text-blue-200 font-bold bg-blue-600 rounded-md hover:bg-blue-700 hover:text-blue-300">Add Job</button>
      </form>
    );
  }
  