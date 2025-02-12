import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import HomePage from './Components/HomePage'
import NotesPage from './Components/NotesPage'
import NotePage from './Components/NotePage'

function App() {

  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path='/note' element={<NotePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
