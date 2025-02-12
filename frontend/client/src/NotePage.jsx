import { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

function NotePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const note = location.state?.note

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')



  useEffect(()=>{
    if(note){
      setTitle(note.title)
      setContent(note.content)
    }
  },[])

  const updateNote = (id) =>{
      fetch(`/api/updateNote/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        })
      })
    navigate("/notes")
  }

  const addNote = ()=>{
    if (title!='' || content!=''){
      fetch(`/api/addNote`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        })
      })
    }
    
  navigate("/notes")
  }

  return (
    <div className="max-h-screen max-w-screen bg-gray-50 p-6 flex-col">
      <button
        onClick={() => note? updateNote(note._id):addNote()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        Back to Notes
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md flex-col justify-start min-h-full min-w-full max-h-fit">
      {note ? (
        <>
          <input type='text' value={title} onChange={e =>{setTitle(e.target.value)}} className="block text-3xl font-bold text-gray-800 max-h-fit focus:border-none focus:outline-none"></input>
          <textarea type='text' value={content} onChange={e =>{setContent(e.target.value)}} className="text-gray-600 mt-2 block min-w-full min-h-130 max-h-screen overflow-hidden border-t-2 border-t-blue-200 focus:outline-none "></textarea>
          </>
      ) : (
        <>
          <input type='text' placeholder='Enter Title' onChange={e =>{setTitle(e.target.value)}} className="block text-3xl font-bold text-gray-800 max-h-fit focus:border-none focus:outline-none"></input>
          <textarea type='text' placeholder='Enter Note' onChange={e =>{setContent(e.target.value)}} className="text-gray-600 mt-2 block min-w-full min-h-130 max-h-screen overflow-hidden border-t-2 border-t-blue-200 focus:outline-none "></textarea>
        </>
      )}
      </div>
    </div>
  )
}

export default NotePage