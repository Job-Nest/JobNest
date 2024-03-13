'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'


export default function addJob() {
  const [title, setJobTitle] = useState("")
  const [company_name, setCompName] = useState("")
  const router = useRouter();

  // post request to server to add job
  const addJob = async (e) => {
    e.preventDefault()
    try {
    const response = await fetch('http://localhost:3000/api/jobs', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, company_name })
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
      <form onSubmit={addJob}>
        <input type='text' onChange={(e) => {setJobTitle(e.target.value)}} value={title} placeholder='Job Title'></input>
        <input type='text' onChange={(e) => {setCompName(e.target.value)}} value={company_name} placeholder='Company Name'></input>
        <button type='submit' >Add Job</button>
      </form>
    );
  }
  