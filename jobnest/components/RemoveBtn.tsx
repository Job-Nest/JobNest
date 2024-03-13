'use client'

export default function RemoveBtn({id}) {
  const deleteJobs = async () => {
    await fetch(`http://localhost:3000/api/jobs?id=${id}`, {
      method: "DELETE",
    })
  } 
  
    return (
    <button onClick={deleteJobs}>Remove</button>
    )
  }
  