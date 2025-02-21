import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Level from '@/pages/level'
import Result from '@/pages/result'
// YOU CAN NOW USE ALIAS IN YOUR IMPORTS
import Exercice from '@/pages/exercice'
import Tracker from '@/store/test'
import StoryBook from '@/pages/storybook'

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="level" element={<Level />} />
      <Route path="exercice/:levelId/:questionId" element={<Exercice />} />
      <Route path="exercice" element={<Exercice />} />
      <Route path="result" element={<Result />} />
      <Route path="test" element={<Tracker />} />
      <Route path="storybook" element={<StoryBook />} />
    </Routes>
  )
}

export default App
