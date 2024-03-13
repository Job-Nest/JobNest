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
    <button onClick={deleteJobs}>Remove</button>
    )
  }
  