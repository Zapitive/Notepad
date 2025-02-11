import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Simple & Powerful Notepad App
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Organize your thoughts, take notes, and boost your productivity with ease.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition" onClick={()=> navigate('/notes')}>
          Get Started
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Fast & Simple</h3>
          <p className="text-gray-600 mt-2">Instantly write and save your notes.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Cloud Sync</h3>
          <p className="text-gray-600 mt-2">Access your notes from anywhere.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Secure & Private</h3>
          <p className="text-gray-600 mt-2">Your notes are encrypted and safe.</p>
        </div>
      </div>
      </div>
  )
}

export default HomePage