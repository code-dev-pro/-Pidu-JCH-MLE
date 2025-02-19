import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Level from '@/pages/Level'
import Result from '@/pages/Result'
// YOU CAN NOW USE ALIAS IN YOUR IMPORTS
import Exercice from '@/pages/Exercice'
import Tracker from '@/store/test'

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="level" element={<Level />} />
      <Route path="exercice/:levelId/:questionId" element={<Exercice />} />
      <Route path="result" element={<Result />} />
      <Route path="test" element={<Tracker />} />
    </Routes>
  )
}

export default App
