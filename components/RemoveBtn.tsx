'use client'

import React from "react"
import { useRouter } from "next/navigation"

export default function RemoveBtn({id}) {
  const router = useRouter();
  const deleteJobs = async () => {
    await fetch(`http://localhost:3000/api/jobs?id=${id}`, {
      method: "DELETE",
    })
    router.refresh();
  } 
  
    return (
    <button onClick={deleteJobs} className="px-2 py-1 text-blue-200 font-bold bg-blue-600 rounded-md hover:bg-blue-700 hover:text-blue-300">Remove</button>
    )
  }
  