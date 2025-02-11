import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotesPage() {

  const navigate = useNavigate()

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("/api/getNotes").then((res)=>{
      res.json().then((ds)=>{
        setData(ds);
        console.log(ds)
      })
    })
  },[])
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Notes</h2>
      <ul className="space-y-4">
        {data.length > 0 ? (
          data.map(data => (
            <li key={data._id} className="bg-white p-4 rounded-lg shadow hover:cursor-pointer" onClick={()=> navigate('/note')}>
              <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
              <p className="text-gray-600">{data.content}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No notes found. Add some notes!</p>
        )}
      </ul>
    </div>
  )
}

export default NotesPage