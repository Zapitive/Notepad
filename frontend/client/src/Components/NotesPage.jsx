import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotesPage() {

  const navigate = useNavigate()

  const [data,setData] = useState([])

  const getNotes = ()=>{
    fetch("/api/getNotes").then((res)=>{
      res.json().then((ds)=>{
        setData(ds)
      })
    })
  }

  useEffect(()=>{
    getNotes()
  },[])

  const deletNote = (id) =>{
    fetch(`/api/deleteNote/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    
  })
  getNotes()
}


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Notes</h2>
      <ul className="space-y-4">
        {data.length > 0 ? (
          data.map(note => (
            <li key={note._id} className="flex justify-between bg-white p-4 rounded-lg shadow " >
              <div className='hover:cursor-pointer' onClick={()=> navigate('/note',{state:{note}})}>
              <h3 className="text-xl font-semibold text-gray-900">{note.title}</h3>
              <p className="text-gray-600">{note.content}</p>
              </div>
              <div className='flex justify-self-end items-center'>
                <button onClick={()=>deletNote(note._id)} className='hover:cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No notes found. Add some notes!</p>
        )}
      </ul>
      <div className='mt-4 ml-2'>
        <button onClick={()=> navigate('/note')} className='hover:cursor-pointer bg-blue-400/80 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-gray-100/95">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
        </button>

      </div>
    </div>
  )
}

export default NotesPage