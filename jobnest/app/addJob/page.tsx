'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// try {
//   fetch('https://www.example.com/submit-form', {
//     method: 'POST', // Specify the HTTP method
//     body: new FormData(document.querySelector('form')) // Collect form data
//   })
//     .then(response => response.text()) // Read response as text
//     .then(data => alert(data)); // Alert the response
// } catch (error) {
//   alert('An error occurred!');
// }

export default function addJob() {
  const [title, setJobTitle] = useState('');
  const [company_name, setCompanyName] = useState('');
  const router = useRouter();

  const addNewJob = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/jobs', {
        method: 'POST',
        body: JSON.stringify({ title, company_name }),
      });
      let result = await response.json();
      if (result) {
        router.push('/jobs');
      }
    } catch (err) {
      console.error('Unable to add new job!');
    }
  };
  return (
    <form onSubmit={addNewJob}>
      <input
        type='text'
        placeholder='Job Title'
        onChange={(e) => setJobTitle(e.target.value)}
      ></input>
      <input
        type='text'
        placeholder='Company Name'
        onChange={(e) => setCompanyName(e.target.value)}
      ></input>
      <button>Add Job</button>
    </form>
  );
}
